import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { dogPacking, familyPacking, shopping } from '../data/preparation'
import type { PackingGroup } from '../types'

type PrepTab = 'shopping' | 'family' | 'dog'
const tabs: { id: PrepTab; label: string }[] = [{ id: 'shopping', label: '장보기' }, { id: 'family', label: '가족 준비물' }, { id: 'dog', label: '반려견' }]

function List({ groups }: { groups: PackingGroup[] }) {
  return <div className="packing-groups">{groups.map((group) => <section key={group.title}><div className="packing-title"><span>{group.icon}</span><h2>{group.title}</h2></div><div className="packing-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></section>)}</div>
}

export function Preparation() {
  const [tab, setTab] = useState<PrepTab>('shopping')
  const groups = tab === 'shopping' ? shopping : tab === 'family' ? familyPacking : dogPacking
  return (
    <div className="page">
      <PageHeader eyebrow="PACKING NOTES" title="짐 꾸리기" description="가족이 같은 목록을 보며 빠뜨린 것만 챙겨요." />
      <div className="prep-tabs" role="tablist">{tabs.map((item) => <button key={item.id} role="tab" aria-selected={tab === item.id} className={tab === item.id ? 'active' : ''} onClick={() => setTab(item.id)}>{item.label}</button>)}</div>
      {tab === 'shopping' && <p className="prep-tip">🛒 첫날 장보기는 서홍천농협 두미지점을 1순위로 이용해요. 저녁 2번과 아침 2번 분량을 한 번에 준비하고 바비큐 재료는 사지 않아요.</p>}
      {tab === 'family' && <p className="prep-tip">☔ 첫날과 마지막 날 비 예보가 있어 우산과 젖은 물건을 담을 지퍼백을 챙겨요.</p>}
      {tab === 'dog' && <p className="prep-tip dog-tip">🐶 츄츄는 알러지 사료만 먹어요. 여행 중에도 간식은 주지 않고 여유 사료 1회분을 더 챙겨요.</p>}
      <List groups={groups} />
      <p className="readonly-note">기기별 체크 상태가 달라지지 않도록 안내 전용으로 구성했어요.<br />필요한 내용은 가족 단톡방에서 최종 확인해 주세요.</p>
    </div>
  )
}
