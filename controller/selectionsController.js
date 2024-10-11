import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 나의 스타트업 선택 API
export const postMyStartups = async (req, res) => {
  const { id, sessionId } = req.body;

  const [updateStartup, existingSelection] = await Promise.all([
    prisma.startup.update({
      where: { id },
      data: {
        selectedCount: {
          increment: 1,
        },
      },
    }),
    prisma.selection.findFirst({
      where: {
        sessionId,
        startupId: id,
      },
    }),
  ]);

  const newOrUpdateSelection = existingSelection
    ? await prisma.selection.update({
        where: { id: existingSelection.id },
        data: {
          isSelected: true,
          updatedAt: new Date(),
        },
      })
    : await prisma.selection.create({
        data: {
          sessionId,
          startupId: id,
          isSelected: true,
          createdAt: new Date(),
        },
      });

  res.send({ updateStartup, newOrUpdateSelection });
};

// 비교할 스타트업 여러개 선택 API
export const postComparisonStartups = async (req, res) => {
  const { ids, sessionId } = req.body;

  if (!Array.isArray(ids) || ids.length < 1 || ids.length > 5) {
    return res
      .status(400)
      .send({ message: "1개에서 5개 사이의 스타트업을 골라야 합니다." });
  }
  const [updateStartups, existingComparisons] = await Promise.all([
    Promise.all(
      ids.map((id) =>
        prisma.startup.update({
          where: { id },
          data: {
            comparedCount: {
              increment: 1,
            },
          },
        }),
      ),
    ),

    Promise.all(
      ids.map((id) =>
        prisma.comparison.findFirst({
          where: {
            sessionId: sessionId,
            startupId: id,
          },
        }),
      ),
    ),
  ]);

  const newOrUpdateComparisons = await Promise.all(
    existingComparisons.map((comparison, index) => {
      if (comparison) {
        return prisma.comparison.update({
          where: { id: comparison.id },
          data: {
            isCompared: true,
            updatedAt: new Date(),
          },
        });
      } else {
        return prisma.comparison.create({
          data: {
            sessionId: sessionId,
            startupId: ids[index],
            isCompared: true,
            createdAt: new Date(),
          },
        });
      }
    }),
  );

  res.send({ updateStartups, newOrUpdateComparisons });
};

// 나의 스타트업 선택 취소 API
export const postCancelMyStartups = async (req, res) => {
  const { id, sessionId } = req.body;

  const [updateStartup, existingSelection] = await Promise.all([
    prisma.startup.update({
      where: { id },
      data: {
        selectedCount: {
          decrement: 1,
        },
      },
    }),
    prisma.selection.findFirst({
      where: {
        sessionId,
        startupId: id,
      },
    }),
  ]);

  const newOrUpdateSelection = existingSelection
    ? await prisma.selection.update({
        where: { id: existingSelection.id },
        data: {
          isSelected: false,
          updatedAt: new Date(),
        },
      })
    : await prisma.selection.create({
        data: {
          sessionId,
          startupId: id,
          isSelected: false,
          createdAt: new Date(),
        },
      });

  res.send({ updateStartup, newOrUpdateSelection });
};

// 비교할 스타트업 여러개 선택 취소 API
export const postCancelComparisonStartups = async (req, res) => {
  const { ids, sessionId } = req.body;

  if (!Array.isArray(ids) || ids.length < 1 || ids.length > 5) {
    return res
      .status(400)
      .send({ message: "1개에서 5개 사이의 스타트업을 골라야 합니다." });
  }
  const [updateStartups, existingComparisons] = await Promise.all([
    Promise.all(
      ids.map((id) =>
        prisma.startup.update({
          where: { id },
          data: {
            comparedCount: {
              decrement: 1,
            },
          },
        }),
      ),
    ),

    Promise.all(
      ids.map((id) =>
        prisma.comparison.findFirst({
          where: {
            sessionId: sessionId,
            startupId: id,
          },
        }),
      ),
    ),
  ]);

  const newOrUpdateComparisons = await Promise.all(
    existingComparisons.map((comparison, index) => {
      if (comparison) {
        return prisma.comparison.update({
          where: { id: comparison.id },
          data: {
            isCompared: false,
            updatedAt: new Date(),
          },
        });
      } else {
        return prisma.comparison.create({
          data: {
            sessionId: sessionId,
            startupId: ids[index],
            isCompared: false,
            createdAt: new Date(),
          },
        });
      }
    }),
  );

  res.send({ updateStartups, newOrUpdateComparisons });
};

// src/controller/selectionsController.js
/* //buff */
export const getSelections = async (req, res) => {
  const { sessionId } = req.query;

  if (!sessionId) {
    return res.status(400).json({ error: "sessionId가 필요합니다." });
  }

  try {
    const selectedStartups = await prisma.selection.findMany({
      where: {
        sessionId,
        isSelected: true,
      },
      /* Selection 에서 같은 sessionId 에 isSelected 값이 true 로 여러개 남아 있어 임시로 1개만 리턴하게 함
      기업 비교하기 버튼 클릭시 기존의 sessionId에 해당하는 값이 Selection 과 Comparison 에 있으면 isSelected, isCompared 를 false 로 하는 로직 점검이 필요해 보입니다.
      */
      orderBy: {
        updatedAt: 'desc', // updatedAt을 기준으로 내림차순 정렬
      },
      take: 1, // 가장 최신의 1개 항목만 가져옴
      include: {
        startup: {
          select: {
            id: true,
            name: true,
            description: true,
            image: true,
            category: true,
            simInvest: true,
            revenue: true,
            employees: true,
          },
        },
      },
    });

    const comparisonStartups = await prisma.comparison.findMany({
      where: {
        sessionId,
        isCompared: true,
      },
      include: {
        startup: {
          select: {
            id: true,
            name: true,
            description: true,
            image: true,
            category: true,
            simInvest: true,
            revenue: true,
            employees: true,
          },
        },
      },
    });

    res.status(200).json({
      selectedStartups: selectedStartups.map((selection) => selection.startup),
      comparisonStartups: comparisonStartups.map((comparison) => comparison.startup),
    });
  } catch (error) {
    console.error("선택 정보 불러오기 실패:", error);
    res.status(500).json({ error: "선택 정보를 불러오는 데 실패했습니다." });
  }
};
