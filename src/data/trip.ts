import type { TripDay } from '../types'

export const trip = {
  title: '양평 가족여행',
  startDate: '2026-08-30',
  endDate: '2026-09-01',
  duration: '2박 3일',
  travelers: '가족 4명',
  companion: '소형견 1마리',
  departureDisplay: '서울 광진구',
  accommodation: '슬로우인 풀빌라',
  accommodationArea: '경기 양평군 단월면',
  concept: '관광 40 · 휴식 60',
}

export const tripDays: TripDay[] = [
  {
    day: 1,
    date: '2026-08-30',
    weekday: 'SUN',
    theme: '서울 → 양평 → 장보기 → 풀빌라',
    route: '🚗 서울 → 🛒 장보기 → 🏡 풀빌라',
    items: [
      { time: '09:30', icon: '🚗', title: '서울 광진구 출발', description: '여유 있게 양평으로 출발해요.' },
      { time: '11:30', endTime: '12:30', icon: '🍽️', title: '양평 점심', description: '도착 상황과 가족 컨디션에 따라 결정해요.' },
      { time: '13:00', endTime: '14:00', icon: '🛒', title: '하나로마트 장보기', description: '두 번의 저녁과 아침, 음료·야식을 준비해요.', placeId: 'hanaro' },
      { time: '15:00', icon: '🏡', title: '풀빌라 체크인', placeId: 'slowinn' },
      { time: '15:30', endTime: '18:00', icon: '🏊', title: '가족 + 반려견 물놀이', description: '한낮 더위를 피해 숙소에서 시원하게 쉬어요.' },
      { time: '18:00', endTime: '19:00', icon: '🚿', title: '샤워 · 휴식' },
      { time: '19:00', endTime: '21:00', icon: '🍽️', title: '숙소 저녁', description: '포장 음식, 마트 음식 또는 밀키트로 간단히.', notes: ['바비큐는 하지 않아요', '족발·보쌈 / 회 / 전골·찌개 추천'] },
      { time: '21:00', icon: '🌙', title: '자유시간', description: '가족 휴식 · 야식 · 반려견 산책' },
    ],
  },
  {
    day: 2,
    date: '2026-08-31',
    weekday: 'MON',
    theme: '용문산 → 점심 → 카페 → 풀빌라',
    route: '🌲 용문산 → 🍕 점심 → ☕ 카페 → 🏊 수영',
    items: [
      { time: '08:30', endTime: '09:30', icon: '🍳', title: '숙소 아침', description: '전날 장본 음식으로 가볍게 먹어요.' },
      { time: '09:30', icon: '🚗', title: '숙소 출발' },
      { time: '10:00', endTime: '12:00', icon: '🌲', title: '용문산관광지 산책', description: '등산보다는 숲길과 가족사진 중심으로.', notes: ['그늘 위주로 이동', '강아지 물 충분히 준비'], placeId: 'yongmunsan' },
      { time: '12:00', endTime: '13:30', icon: '🍕', title: '점심 · 레스토랑 알베로', description: '화덕피자와 파스타. 더우면 펫리퍼블릭으로 변경해요.', notes: ['테라스 반려견 동반 조건 재확인'], placeId: 'albero' },
      { time: '13:30', endTime: '15:00', icon: '☕', title: '문릿 카페', description: '시원하게 쉬며 오후 더위를 피해요.', placeId: 'moonlit' },
      { time: '15:30', endTime: '16:00', icon: '🚗', title: '숙소 복귀' },
      { time: '16:00', endTime: '18:00', icon: '🏊', title: '물놀이' },
      { time: '18:00', endTime: '19:00', icon: '🚿', title: '샤워 · 휴식' },
      { time: '19:00', icon: '🍽️', title: '숙소 저녁', description: '남은 음식, 밀키트 또는 돌아오는 길 포장.' },
    ],
  },
  {
    day: 3,
    date: '2026-09-01',
    weekday: 'TUE',
    theme: '체크아웃 → 두물머리 → 서울',
    route: '🏡 체크아웃 → 🌿 두물머리 → 🚗 서울',
    items: [
      { time: '08:30', icon: '☀️', title: '기상' },
      { time: '09:00', endTime: '10:00', icon: '🍳', title: '숙소 아침', description: '남은 음식을 활용해요.' },
      { time: '10:00', endTime: '10:50', icon: '🧳', title: '짐 정리' },
      { time: '11:00', icon: '🏡', title: '체크아웃', placeId: 'slowinn' },
      { time: '12:00', endTime: '13:30', icon: '🌿', title: '두물머리 산책', description: '느티나무 · 강변 산책 · 가족사진 · 연핫도그', placeId: 'dumulmeori' },
      { time: '13:30', endTime: '14:30', icon: '🍽️', title: '양수리 주변 점심' },
      { time: '14:30', endTime: '15:30', icon: '☕', title: '선택 · 수수카페', description: '가족 컨디션이 괜찮으면 방문해요.', notes: ['반려견 동반 조건 재확인'], placeId: 'susu' },
      { time: '15:30', icon: '🚗', title: '서울 출발 권장', description: '퇴근시간 진입 정체를 최대한 피해요.' },
    ],
  },
]
