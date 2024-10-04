export const CATEGORIES = [
  { id: 1, category: '에듀테크' },
  { id: 2, category: '전자상거래' },
  { id: 3, category: '솔루션' },
];

export const STARTUPS = [
  {
    id: 1,
    name: '코드잇',
    categoryId: 1, 
    actualInvest: BigInt(4000000000),
    simInvest: BigInt(3000000000),
    revenue: BigInt(1200000000),
    employees: 50,
    description: '프로그래밍, 웹 개발, 파이썬, 데이터 사이언스 등 다양한 분야의 강의를 실무 중심의 맞춤형 학습 과정과 실전 프로젝트를 통해 제공하는 온라인 교육 플랫폼입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_codeit.png',
    createdAt: '2024-09-01T09:00:00Z',
    updatedAt: '2024-09-01T09:00:00Z',
  },
  {
    id: 2,
    name: '매스프레소',
    categoryId: 1, 
    actualInvest: BigInt(2000000000),
    simInvest: BigInt(3000000000),
    revenue: BigInt(1800000000),
    employees: 100,
    description: '가장 효과적인 교육을 전 세계 모두에게 - 50여 개 국가에서 매월 1천만 명의 학생이 사용하는 No. 1 교육 서비스 콴다를 만듭니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_mathpresso.png',
    createdAt: '2024-09-02T09:30:00Z',
    updatedAt: '2024-09-02T09:30:00Z',
  },
  {
    id: 3,
    name: '엘리스',
    categoryId: 1, 
    actualInvest: BigInt(1000000000),
    simInvest: BigInt(500000000),
    revenue: BigInt(1400000000),
    employees: 70,
    description: '편리한 올인원 AI 교육 플랫폼. 인터랙티브 실습환경부터 스마트한 AI 학습 관리 시스템까지 한 번에! AI 기능으로 차별화된 학습 플랫폼을 제공합니다',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_elice.png',
    createdAt: '2024-09-03T10:00:00Z',
    updatedAt: '2024-09-03T10:00:00Z',
  },
  {
    id: 4,
    name: '뤼이드',
    categoryId: 1, 
    actualInvest: BigInt(5500000000),
    simInvest: BigInt(800000000),
    revenue: BigInt(1900000000),
    employees: 90,
    description: '뤼이드는 AI를 활용한 학습 개인화와 시험 준비 솔루션을 제공합니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_riiid.png',
    createdAt: '2024-09-04T10:30:00Z',
    updatedAt: '2024-09-04T10:30:00Z',
  },
  {
    id: 5,
    name: '패스트캠퍼스',
    categoryId: 1, 
    actualInvest: BigInt(4500000000),
    simInvest: BigInt(1000000000),
    revenue: BigInt(1600000000),
    employees: 60,
    description: '프로그래밍, 영상편집, UX/UI, 마케팅, 데이터 분석, 엑셀강의, The RED, 국비지원 교육과정을 제공하는 플랫폼입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_fastcampus.png',
    createdAt: '2024-09-05T11:00:00Z',
    updatedAt: '2024-09-05T11:00:00Z',
  },
  {
    id: 6,
    name: '럭스로보',
    categoryId: 1,
    actualInvest: BigInt(2800000000),
    simInvest: BigInt(1000000000),
    revenue: BigInt(1100000000),
    employees: 40,
    description: '럭스로보는 로봇 기술을 기반으로 교육용 로봇, 사물인터넷(IoT) 플랫폼을 개발하는 스타트업으로, 모듈형 코딩 키트와 로봇을 통해 코딩 교육을 제공합니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_luxrobo.png',
    createdAt: '2024-09-06T11:30:00Z',
    updatedAt: '2024-09-06T11:30:00Z',
  },
  {
    id: 7,
    name: '스파르타코딩클럽',
    categoryId: 1, 
    actualInvest: BigInt(3200000),
    simInvest: BigInt(3000000000),
    revenue: 2000000,
    employees: 80,
    description: '스파르타코딩클럽은 초보자부터 실무 개발자까지 누구나 쉽게 코딩을 배울 수 있도록 돕는 대한민국 대표 코딩 교육 플랫폼입니다. 실무 중심의 교육과 실전 프로젝트 기반 학습을 통해 단기간에 코딩 실력을 쌓을 수 있도록 지원합니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_sparta.png',
    createdAt: '2024-09-07T12:00:00Z',
    updatedAt: '2024-09-07T12:00:00Z',
  },
  {
    id: 8,
    name: '엔코드',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: BigInt(1500000000),
    revenue: 2000000,
    employees: 80,
    description: '엔코드는 국내 최초 럭셔리 프리오더 플랫폼 디코드를 운영하는 회사로, 지속 가능한 소비 문화를 구축하는 것을 목표로 하고 있습니다.	',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_ncode.png',
    createdAt: '2024-09-08T12:00:00Z',
    updatedAt: '2024-09-08T12:00:00Z',
  },
  {
    id: 9,
    name: '직방',
    categoryId: 3, 
    actualInvest: BigInt(3700000),
    simInvest: BigInt(1700000000),
    revenue: 1300000,
    employees: 400,
    description: '부동산 정보 검색과 아파트 관리 서비스를 제공하는 플랫폼으로, 사용자가 손쉽게 매물 검색과 부동산 관련 정보를 확인할 수 있도록 돕는 혁신적인 부동산 솔루션을 제공합니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_zigbang.png',
    createdAt: '2024-09-09T13:00:00Z',
    updatedAt: '2024-09-09T13:00:00Z',
  },
  {
    id: 10,
    name: '당근마켓',
    categoryId: 2, 
    actualInvest: BigInt(60000000),
    simInvest: BigInt(2300000000),
    revenue: 23000000,
    employees: 1000,
    description: '당근마켓은 지역 기반의 중고 거래 플랫폼으로, 사용자들이 가까운 지역에서 중고 물품을 쉽게 사고팔 수 있도록 연결해주는 서비스입니다. 친근한 사용자 경험과 지역 커뮤니티 활성화를 통해 신뢰할 수 있는 중고 거래 환경을 제공합니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_daangn.png',
    createdAt: '2024-09-10T13:00:00Z',
    updatedAt: '2024-09-10T13:00:00Z',
  },
  {
    id: 11,
    name: '쿠팡',
    categoryId: 2, 
    actualInvest: BigInt(600000000),
    simInvest: BigInt(4000000000),
    revenue: 230000000,
    employees: 2000,
    description: '쿠팡은 다양한 상품을 빠르고 편리하게 구매할 수 있는 전자상거래 플랫폼으로, 특히 로켓배송 서비스를 통해 빠른 배송과 높은 고객 만족도를 제공하고 있습니다. 첨단 기술과 물류 인프라를 바탕으로 사용자에게 최적화된 쇼핑 경험을 제공합니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: 'http://genys.kr/z/startups/images/logo_coupang.png',
    createdAt: '2024-09-11T13:00:00Z',
    updatedAt: '2024-09-11T13:00:00Z',
  },
  {
    id: 12,
    name: '센드버드',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: BigInt(3000000),
    revenue: 2500000,
    employees: 80,
    description: '센드버드는 실시간 채팅 및 메시징 솔루션을 제공하는 글로벌 스타트업으로, 앱 내 채팅 기능을 손쉽게 통합할 수 있는 API를 제공합니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-12T12:00:00Z',
    updatedAt: '2024-09-12T12:00:00Z',
  },
  {
    id: 13,
    name: '빅밸류',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 3500000,
    employees: 210,
    description: '빅밸류는 부동산 데이터 분석 솔루션을 제공하는 스타트업으로, 인공지능과 빅데이터를 활용해 부동산의 가치를 평가하고 매물 정보를 제공합니다. 특히 아파트 시세를 예측하고 분석하는 데 특화된 솔루션을 제공하여 부동산 시장에서의 의사결정을 돕고 있습니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-13T12:00:00Z',
    updatedAt: '2024-09-13T12:00:00Z',
  },	
  {
    id: 14,
    name: '기업14',
    categoryId: 3, 
    actualInvest: BigInt(320000),
    simInvest: 0,
    revenue: 1400000,
    employees: 140,
    description: '기업 14는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-14T12:00:00Z',
    updatedAt: '2024-09-14T12:00:00Z',
  },	
  {
    id: 15,
    name: '기업15',
    categoryId: 2, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 1500000,
    employees: 150,
    description: '기업 15는 전자상거래 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-15T12:00:00Z',
    updatedAt: '2024-09-15T12:00:00Z',
  },	
  {
    id: 16,
    name: '기업16',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 3900000,
    employees: 160,
    description: '기업 16는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-16T12:00:00Z',
    updatedAt: '2024-09-16T12:00:00Z',
  },	
  {
    id: 17,
    name: '기업17',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 3100000,
    employees: 170,
    description: '기업 17는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-17T12:00:00Z',
    updatedAt: '2024-09-17T12:00:00Z',
  },	
  {
    id: 18,
    name: '기업18',
    categoryId: 2, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 1200000,
    employees: 180,
    description: '기업 18는 전자상거래 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-18T12:00:00Z',
    updatedAt: '2024-09-18T12:00:00Z',
  },	
  {
    id: 19,
    name: '기업19',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 1000000,
    employees: 190,
    description: '기업 19는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-19T12:00:00Z',
    updatedAt: '2024-09-19T12:00:00Z',
  },	
 {
    id: 20,
    name: '기업20',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 2800000,
    employees: 200,
    description: '기업 20는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-20T12:00:00Z',
    updatedAt: '2024-09-20T12:00:00Z',
  },	
  {
    id: 21,
    name: '기업21',
    categoryId: 2, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 2100000,
    employees: 210,
    description: '기업 21는 전자상거래 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-21T12:00:00Z',
    updatedAt: '2024-09-21T12:00:00Z',
  },	
  {
    id: 22,
    name: '기업 22',
    categoryId: 1, 
    actualInvest: BigInt(5000000),
    simInvest: 0,
    revenue: 2200000,
    employees: 220,
    description: '기업 22는 에듀테크 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-22T09:30:00Z',
    updatedAt: '2024-09-22T09:30:00Z',
  },		
];
	
export const MOCK_INVESTORS = [
  {
    id: 1,
    name: '홍길동',
    startupId: 1,
    investAmount: BigInt(2000000000),
    comment: '유망한 스타트업입니다.',
    password: 'pw1234',
    createdAt: '2024-09-01T09:00:00Z',
    updatedAt: '2024-09-01T09:00:00Z',
  },
  {
    id: 2,
    name: '김철수',
    startupId: 2,
    investAmount: BigInt(1000000000),
    comment: '성장 가능성이 높습니다.',
    password: 'pw1234',
    createdAt: '2024-09-02T09:30:00Z',
    updatedAt: '2024-09-02T09:30:00Z',
  },
  {
    id: 3,
    name: '이영희',
    startupId: 3,
    investAmount: BigInt(500000000),
    comment: '신뢰할 수 있는 기업입니다.',
    password: 'pw1234',
    createdAt: '2024-09-03T10:00:00Z',
    updatedAt: '2024-09-03T10:00:00Z',
  },
  {
    id: 4,
    name: '박민수',
    startupId: 4,
    investAmount: BigInt(800000000),
    comment: '초기 투자를 고려할 만합니다.',
    password: 'pw1234',
    createdAt: '2024-09-04T10:30:00Z',
    updatedAt: '2024-09-04T10:30:00Z',
  },
  {
    id: 5,
    name: '최진영',
    startupId: 5,
    investAmount: BigInt(1000000000),
    comment: '안정적인 투자처입니다.',
    password: 'pw1234',
    createdAt: '2024-09-05T11:00:00Z',
    updatedAt: '2024-09-05T11:00:00Z',
  },
  {
    id: 6,
    name: '정다희',
    startupId: 6,
    investAmount: BigInt(1000000000),
    comment: '기술력이 뛰어납니다.',
    password: 'pw1234',
    createdAt: '2024-09-06T11:30:00Z',
    updatedAt: '2024-09-06T11:30:00Z',
  },
  {
    id: 7,
    name: '한지수',
    startupId: 2,
    investAmount: BigInt(1000000000),
    comment: '미래가 기대됩니다.',
    password: 'pw1234',
    createdAt: '2024-09-07T12:00:00Z',
    updatedAt: '2024-09-07T12:00:00Z',
  },
  {
    id: 8,
    name: '윤상우',
    startupId: 2,
    investAmount: BigInt(1000000000),
    comment: '혁신적인 아이디어가 좋습니다.',
    password: 'pw1234',
    createdAt: '2024-09-08T12:30:00Z',
    updatedAt: '2024-09-08T12:30:00Z',
  },
  {
    id: 9,
    name: '이수민',
    startupId: 1,
    investAmount: BigInt(1000000000),
    comment: '투자 가치가 높습니다.',
    password: 'pw1234',
    createdAt: '2024-09-09T13:00:00Z',
    updatedAt: '2024-09-09T13:00:00Z',
  },
  {
    id: 10,
    name: '박준호',
    startupId: 1,
    investAmount: BigInt(1000000000),
    comment: '빠른 성장이 예상됩니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 11,
    name: '홍길동',
    startupId: 7,
    investAmount: BigInt(3000000000),
    comment: '유망한 스타트업입니다2.',
    password: 'pw1234',
    createdAt: '2024-09-01T09:00:00Z',
    updatedAt: '2024-09-01T09:00:00Z',
  },	
  {
    id: 12,
    name: '윤상우',
    startupId: 8,
    investAmount: BigInt(1500000000),
    comment: '혁신적인 아이디어가 좋습니다2.',
    password: 'pw1234',
    createdAt: '2024-09-08T12:30:00Z',
    updatedAt: '2024-09-08T12:30:00Z',
  },
  {
    id: 13,
    name: '이수민',
    startupId: 9,
    investAmount: BigInt(1700000000),
    comment: '투자 가치가 높습니다2.',
    password: 'pw1234',
    createdAt: '2024-09-09T13:00:00Z',
    updatedAt: '2024-09-09T13:00:00Z',
  },
  {
    id: 14,
    name: '박준호',
    startupId: 10,
    investAmount: BigInt(2300000000),
    comment: '빠른 성장이 예상됩니다2.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },		
  {
    id: 15,
    name: '이수민',
    startupId: 11,
    investAmount: BigInt(4000000000),
    comment: '투자 가치가 높습니다2.',
    password: 'pw1234',
    createdAt: '2024-09-09T13:00:00Z',
    updatedAt: '2024-09-09T13:00:00Z',
  },
  {
    id: 16,
    name: '박준호',
    startupId: 12,
    investAmount: BigInt(3000000),
    comment: '빠른 성장이 예상됩니다2.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
];
