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
      <PageHeader eyebrow="PACKING LIST" title="여행 준비" description="체크 없이, 필요한 것을 가볍게 확인해요." />
      <div className="prep-tabs" role="tablist">{tabs.map((item) => <button key={item.id} role="tab" aria-selected={tab === item.id} className={tab === item.id ? 'active' : ''} onClick={() => setTab(item.id)}>{item.label}</button>)}</div>
      {tab === 'shopping' && <p className="prep-tip">🛒 첫날 마트에서 저녁 2번과 아침 2번 분량을 한 번에 준비해요.</p>}
      <List groups={groups} />
      <p className="readonly-note">이 목록은 가족이 함께 보는 안내용이에요.<br />체크하거나 저장하는 기능은 없어요.</p>
    </div>
  )
}
