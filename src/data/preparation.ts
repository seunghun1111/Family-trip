import type { PackingGroup } from '../types'

export const shopping: PackingGroup[] = [
  { icon: '🍳', title: '아침 2번', items: ['햇반', '라면', '계란', '빵', '김치', '과일', '간단한 국'] },
  { icon: '🍽️', title: '숙소 식사', items: ['첫날 추어탕 포장', '둘째 날 쌀국수 포장', '비상용 밀키트', '가족용 야식·안주'] },
  { icon: '🥤', title: '음료', items: ['생수 넉넉히', '탄산수', '가족 음료', '커피', '얼음'] },
  { icon: '🧊', title: '보관', items: ['보냉백', '아이스팩', '지퍼백', '남은 음식 용기'] },
]

export const familyPacking: PackingGroup[] = [
  { icon: '📎', title: '예약·이동', items: ['숙소 예약내역', '차량 충전·주유', '하이패스', '우산 4개', '보냉백'] },
  { icon: '🏊', title: '물놀이', items: ['수영복', '래시가드', '개인 수건', '슬리퍼', '방수팩'] },
  { icon: '🔌', title: '전자기기', items: ['휴대폰 충전기', '보조배터리', '차량 충전 케이블'] },
  { icon: '🧴', title: '생활', items: ['칫솔·치약', '세면도구', '상비약', '모자', '얇은 겉옷', '개인 짐'] },
]

export const dogPacking: PackingGroup[] = [
  { icon: '🐶', title: '츄츄 식사', items: ['알러지 사료 2박 3일분', '여유 사료 1회분', '물', '물그릇', '밥그릇', '간식은 챙기지 않기'] },
  { icon: '📱', title: '확인 자료', items: ['예방접종 확인 앱', '동물등록 정보', '숙소 반려견 이용안내'] },
  { icon: '🏊', title: '물놀이', items: ['츄츄 전용 수건', '반려견 샴푸', '구명조끼', '브러시'] },
  { icon: '🚗', title: '외출', items: ['이동가방', '휴대용 물병', '배변봉투', '배변패드 넉넉히', '리드줄', '하네스', '발 닦는 티슈'] },
]
