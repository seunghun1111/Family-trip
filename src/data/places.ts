import type { Place } from '../types'

export const places: Place[] = [
  {
    id: 'slowinn', category: '숙소', icon: '🏡', name: '슬로우인 풀빌라', shortAddress: '경기 양평군 단월면', address: '경기 양평군 단월면 섬이길 329-11', day: 1, time: '15:00 체크인 · 11:00 체크아웃', openHours: '체크인 15:00 · 체크아웃 11:00', label: 'BASECAMP',
    summary: '가족과 츄츄가 이틀 동안 푹 쉬는 독채 풀빌라.', tips: ['실내 수영장과 숙소 휴식 중심', '도착하면 냉장식품부터 정리', '퇴실 전 수영복·충전기·냉장고 확인'], caution: '예약 객실별 이용 안내와 미온수 운영 여부는 예약 내용을 다시 확인하세요.',
  },
  {
    id: 'yongmunsan', category: '관광', icon: '🌲', name: '용문산관광지', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 신점리 515-2', day: 2, time: '10:00 ~ 11:40', openHours: '관광단지 08:00~21:00 · 시설별 상이', phone: '031-773-0088', label: '오전 산책',
    summary: '더위가 오기 전 입구와 그늘진 숲길을 가볍게 걷는 코스.', tips: ['입장료·주차료 무료', '등산보다 숲길과 가족사진 중심', '리드줄·배변봉투·물을 준비'], caution: '법당 내부는 반려견 동반이 어렵고, 시설별 이용조건은 현장에서 달라질 수 있어요.',
  },
  {
    id: 'phonamri', category: '식당', icon: '🍜', name: '북한강 포남리', shortAddress: '경기 남양주시 화도읍', address: '경기 남양주시 화도읍 북한강로 1627', day: 1, time: '11:00 ~ 12:30', openHours: '일요일 11:00~21:00', phone: '0507-1317-7183', label: '반려동물 동반',
    summary: '북한강 드라이브 길에서 쌀국수와 반쎄오를 즐기는 첫날 점심.', tips: ['반려동물 동반 가능', '쌀국수·반쎄오 등 베트남 음식', '주차 가능'], caution: '방문 전 반려견 동반 가능 좌석과 당일 영업시간을 확인하세요.', naverUrl: 'https://map.naver.com/p/search/%EB%B6%81%ED%95%9C%EA%B0%95%20%ED%8F%AC%EB%82%A8%EB%A6%AC',
  },
  {
    id: 'gangga', category: '식당', icon: '🥘', name: '강가추어탕', shortAddress: '강원 홍천군 서면', address: '강원 홍천군 서면 한서로 883', day: 1, time: '18:10 포장 픽업', openHours: '포장 전 당일 영업 확인', label: '포장',
    summary: '첫날 저녁으로 포장해 숙소에서 편하게 먹는 추어탕.', tips: ['17시 30분쯤 포장 가능 여부와 준비 시간 확인', '한 명이 픽업하고 나머지는 숙소에서 휴식'], caution: '영업시간과 포장 가능 여부가 바뀔 수 있어 출발 전에 지도에서 확인하세요.', naverUrl: 'https://naver.me/FW6zVfVa', kakaoUrl: 'https://place.map.kakao.com/1869505692',
  },
  {
    id: 'hwanghae', category: '식당', icon: '🍚', name: '황해식당', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 용문산로 640', day: 2, time: '12:30 ~ 13:40', openHours: '매일 08:00~19:00 · 18:30 라스트오더', phone: '031-773-3775', label: '전용룸 확인',
    summary: '용문산 산책 후 반려견 동반 전용룸에서 먹는 산채요리.', tips: ['반려견 동반은 전용룸 이용', '리드줄 준비', '포장 가능'], caution: '전용룸 좌석은 방문 전에 전화로 확인하세요.', naverUrl: 'https://naver.me/FeX2FAkV', kakaoUrl: 'https://place.map.kakao.com/8014600',
  },
  {
    id: 'pho-you', category: '식당', icon: '🍜', name: '포유 쌀국수', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 용문산로 249', day: 2, time: '15:20 포장', openHours: '월요일 09:30~20:00 · 19:30 라스트오더', phone: '031-774-4951', label: '미리 주문',
    summary: '용문산에서 숙소로 돌아가는 길에 포장하는 둘째 날 저녁.', tips: ['반려동물 동반 가능', '쌀국수·반쎄오', '포장과 주차 가능'], caution: '매주 수요일은 휴무예요. 카페에서 출발하기 전 포장 주문을 권장해요.', naverUrl: 'https://map.naver.com/p/entry/place/1909425365', kakaoUrl: 'https://place.map.kakao.com/1608896337',
  },
  {
    id: 'uchane', category: '카페', icon: '🍪', name: '우차네 용문 천년한과', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 용문산로 646', day: 2, time: '12:00 ~ 12:20', label: '짧게 들르기',
    summary: '용문산 산책 직후 가족 간식을 고르는 작은 한과 가게.', tips: ['달지 않은 연잎한과', '반려동물 동반', '주차 가능'], caution: '츄츄는 알러지가 있어 한과나 반려견 간식을 먹이지 않아요.', naverUrl: 'https://naver.me/FV7m2mJb', kakaoUrl: 'https://place.map.kakao.com/1837248937',
  },
  {
    id: 'gureum', category: '카페', icon: '🥐', name: '구름정원제빵소', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 용문산로 543', day: 2, time: '14:00 ~ 15:20 · 선택', openHours: '월요일 10:00~19:00 · 화요일 휴무', label: '야외 동반',
    summary: '정원과 계절 풍경을 즐기는 베이커리 카페.', tips: ['베이커리와 음료', '넓은 야외 공간', '월요일 운영'], caution: '반려견은 야외 테라스 또는 정원만 동반 가능해 30℃ 예보에는 그늘 좌석을 먼저 확인하세요.', naverUrl: 'https://naver.me/F5D1YxBT', kakaoUrl: 'https://place.map.kakao.com/1288125279',
  },
  {
    id: 'zelkova', category: '카페', icon: '☕', name: '젤코바', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 용문산로 576-20', day: 2, time: '14:00 ~ 15:20 · 선택', openHours: '월요일 09:00~20:00', label: '이용구역 확인',
    summary: '용문산 주차장 입구 근처에서 쉬기 좋은 베이커리 카페.', tips: ['반려동물 동반', '가족 휴식과 주차가 편리', '리드줄 착용'], caution: '당일 반려견 이용 가능 구역과 실내 동반 여부를 확인하세요.', naverUrl: 'https://naver.me/5VmblKhl', kakaoUrl: 'https://place.map.kakao.com/957490124',
  },
  {
    id: 'damda', category: '카페', icon: '🥯', name: '담다', shortAddress: '경기 양평군 옥천면', address: '경기 양평군 옥천면 신복복동길 20-15 1층', day: 3, time: '11:40 ~ 13:10', openHours: '화요일 08:30~20:00 · 수요일 휴무', phone: '0507-1351-2503', label: '귀가 동선 1순위',
    summary: '서울 방향으로 이동하며 들르기 좋은 애견동반 브런치 카페.', tips: ['브런치와 베이글', '넓은 잔디밭과 야외 공간', '포장과 주차 가능'], caution: '9월 1일은 비 예보가 있어 실내 반려견 동반 조건을 전화로 확인하세요.', naverUrl: 'https://map.naver.com/p/entry/place/1012500670', kakaoUrl: 'https://place.map.kakao.com/1465721986',
  },
  {
    id: 'pet-republic', category: '식당', icon: '🐾', name: '펫리퍼블릭', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 중원산로 521-12', day: 3, time: '11:40 ~ 13:10 · 선택', openHours: '화요일 10:00~19:00 · 연중무휴', phone: '010-9524-6302', label: '실내 놀이',
    summary: '비가 와도 실내 카페와 레스토랑을 이용할 수 있는 반려견 복합공간.', tips: ['객실 이용 없이 부대시설 개별 이용 가능', '실내 카페·레스토랑', '반려견 운동장과 주차'], caution: '담다보다 귀가 동선이 길어져 가족 컨디션과 교통상황을 먼저 확인하세요.', kakaoUrl: 'https://place.map.kakao.com/1902419558',
  },
  {
    id: 'happy-garden', category: '식당', icon: '🌼', name: '행복한뜰', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 용문로 268-6', day: 3, time: '11:40 ~ 13:10 · 선택', openHours: '화요일 11:00~21:00 · 일·월 휴무', phone: '031-773-0101', label: '화요일 정상영업',
    summary: '넓은 정원과 아기자기한 실내에서 파스타·피자·필라프를 즐기는 가족 레스토랑.', tips: ['9월 1일 화요일 정상 영업 안내', '양평레일바이크 맞은편 · 용문역 도보권', '정원 산책과 가족 식사를 한곳에서'], caution: '비 예보가 있으니 실내 반려견 동반 좌석과 예약 가능 여부를 전화로 확인하세요.', naverUrl: 'https://map.naver.com/p/entry/place/1147984536', kakaoUrl: 'https://place.map.kakao.com/17898347',
  },
  {
    id: 'hanaro-dumi', category: '마트', icon: '🛒', name: '하나로마트 서홍천농협두미지점', shortAddress: '강원 홍천군 서면', address: '강원 홍천군 서면 팔봉산로 545', day: 1, time: '13:10 ~ 14:10 · 1순위', label: '장보기 1순위',
    summary: '첫날 북한강 포남리 식사 후 숙소로 이동하며 가족 식재료와 음료를 한 번에 준비할 장보기 1순위.', tips: ['첫날 장보기 1순위', '저녁 2번·아침 2번 먹을 양을 한 번에 준비', '냉장·냉동식품은 마지막에 담기'], caution: '방문 전 네이버지도에서 당일 영업시간을 확인하세요.', naverUrl: 'https://naver.me/GUTWHPFr',
  },
  {
    id: 'hanaro', category: '마트', icon: '🛒', name: '용문농협 하나로마트 단월점', shortAddress: '경기 양평군 단월면', address: '경기 양평군 단월면 보룡길 90', day: 1, time: '13:10 ~ 14:10 · 선택', openHours: '08:00~18:00로 안내 · 당일 재확인', phone: '031-773-0258', label: '숙소 근처',
    summary: '숙소 가까이에서 꼭 필요한 품목만 빠르게 살 때 선택하는 마트.', tips: ['냉장 보관 품목은 마지막에 담기', '주차 공간이 작을 수 있어요', '준비 탭의 장보기 목록 확인'], caution: '공식 페이지에 영업시간이 명확하지 않아 방문 전 전화 확인을 권장해요.',
  },
  {
    id: 'hanaro-seorak', category: '마트', icon: '🛒', name: '가평군농협 하나로마트 설악점', shortAddress: '경기 가평군 설악면', address: '경기 가평군 설악면 신천중앙로 112', day: 1, time: '13:10 ~ 14:10 · 대안', openHours: '매일 09:00~21:00', phone: '031-585-8136', label: '장보기 대안',
    summary: '북한강 포남리에서 숙소로 이동하는 길에 넉넉하게 장보기 좋은 선택지.', tips: ['365일 운영 안내', '신선식품·음료·가족 간식을 한 번에 준비', '냉장 보관 품목은 마지막에 담기'], naverUrl: 'https://naver.me/FUhsaVph',
  },
  {
    id: 'seven-eleven-caravan-papa', category: '편의점', icon: '🏪', name: '세븐일레븐 양평카라반파파점', shortAddress: '경기 양평군 단월면', address: '경기 양평군 단월면 석산로 1413', label: '숙소 근처',
    summary: '숙소에서 빠뜨린 생수·얼음·생활용품이 생겼을 때 들르기 좋은 가까운 편의점.', tips: ['급하게 필요한 물품만 보충', '숙소 출입 전 필요한 품목을 한 번에 확인', '준비 탭 장보기 목록과 함께 확인'], caution: '방문 전 네이버지도에서 영업 여부와 필요한 상품 재고를 확인하세요.', naverUrl: 'https://naver.me/5MvNJjfo',
  },
]

export const placeCategories = ['숙소', '관광', '식당', '카페', '마트', '편의점'] as const
