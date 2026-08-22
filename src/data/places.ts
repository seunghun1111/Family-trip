import type { Place } from '../types'

export const places: Place[] = [
  { id: 'slowinn', category: '숙소', icon: '🏡', name: '슬로우인 풀빌라', shortAddress: '경기 양평군 단월면', address: '경기 양평군 단월면 섬이길 329-11', day: 1, time: '15:00 체크인 · 11:00 체크아웃', summary: '가족과 반려견이 함께 쉬는 여행의 베이스캠프.', tips: ['숙소 물놀이와 휴식 중심', '저녁은 포장·밀키트로 간단히'] },
  { id: 'yongmunsan', category: '관광', icon: '🌲', name: '용문산관광지', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 신점리 515-2', day: 2, time: '10:00 ~ 12:00', summary: '가족 + 반려견 가벼운 숲길 산책.', tips: ['등산 목적이 아니에요', '입구와 숲길 위주', '강아지 물을 준비해요'], caution: '8월 말 더위에 대비해 그늘 위주로 이동하세요.' },
  { id: 'dumulmeori', category: '관광', icon: '🌿', name: '두물머리', shortAddress: '경기 양평군 양서면', address: '경기 양평군 양서면 양수리', day: 3, time: '12:00 ~ 13:30', summary: '강변을 따라 천천히 걷는 마지막 날 산책.', tips: ['느티나무와 강변 산책', '가족사진', '연핫도그'] },
  { id: 'albero', category: '식당', icon: '🍕', name: '레스토랑 알베로', shortAddress: '경기 양평군', address: '레스토랑 알베로 양평', day: 2, time: '12:00 ~ 13:30', summary: '화덕피자와 파스타 점심 1순위.', tips: ['외부 테라스 이용 예정'], caution: '방문 전 반려견 동반과 영업 여부를 확인하세요.' },
  { id: 'petrepublic', category: '식당', icon: '🐾', name: '양평 펫리퍼블릭', shortAddress: '경기 양평군', address: '양평 펫리퍼블릭', day: 2, summary: '날씨가 너무 더울 때 고려할 반려견 동반 대안.', tips: ['레스토랑·카페 대체 후보'], caution: '방문 전 운영 및 이용 조건을 확인하세요.' },
  { id: 'moonlit', category: '카페', icon: '☕', name: '문릿 카페', shortAddress: '경기 양평군 용문면', address: '경기 양평군 용문면 덕촌길 109', day: 2, time: '13:30 ~ 15:00', summary: '한낮 더위를 피해 쉬어가는 오후 카페.', tips: ['숙소 복귀 전 충분히 휴식'], caution: '반려견 동반 조건을 방문 전에 확인하세요.' },
  { id: 'susu', category: '카페', icon: '☕', name: '수수카페', shortAddress: '경기 양평군 양서면', address: '수수카페 양평', day: 3, time: '14:30 ~ 15:30 · 선택', summary: '가족 컨디션에 따라 들르는 선택 일정.', tips: ['서울 출발 시간을 늦추지 않도록 짧게'], caution: '반려견 동반 조건을 방문 전에 확인하세요.' },
  { id: 'hanaro', category: '마트', icon: '🛒', name: '용문농협 하나로마트 단월점', shortAddress: '경기 양평군 단월면', address: '용문농협 하나로마트 단월점', day: 1, time: '13:00 ~ 14:00', summary: '두 번의 저녁과 아침, 음료·야식을 한 번에 준비.', tips: ['냉장 보관 품목은 마지막에 담기', '준비 탭의 장보기 목록 확인'] },
]

export const placeCategories = ['숙소', '관광', '식당', '카페', '마트'] as const
