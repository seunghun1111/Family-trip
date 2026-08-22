import type { PackingGroup } from '../types'

export const shopping: PackingGroup[] = [
  { icon: '🍽️', title: '식사', items: ['포장 음식', '밀키트', '햇반', '라면', '계란', '빵', '김치', '과일', '안주'] },
  { icon: '🥤', title: '음료', items: ['생수', '탄산수', '음료', '커피'] },
  { icon: '🍺', title: '주류', items: ['가족이 원하는 주류', '얼음'] },
]

export const familyPacking: PackingGroup[] = [
  { icon: '🏊', title: '물놀이', items: ['수영복', '래시가드', '수건', '슬리퍼', '방수팩'] },
  { icon: '🔌', title: '전자기기', items: ['휴대폰 충전기', '보조배터리'] },
  { icon: '🧴', title: '생활', items: ['세면도구', '상비품', '우산', '개인 짐'] },
]

export const dogPacking: PackingGroup[] = [
  { icon: '🐶', title: '필수', items: ['사료', '물', '물그릇', '밥그릇', '배변봉투', '배변패드', '리드줄', '하네스'] },
  { icon: '🏊', title: '물놀이', items: ['반려견 수건', '샴푸', '구명조끼'] },
  { icon: '🚗', title: '외출', items: ['이동가방', '휴대용 물병', '배변용품'] },
]
