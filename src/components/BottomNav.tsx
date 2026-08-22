import { Backpack, CalendarDays, House, MapPinned } from 'lucide-react'

export type Tab = 'home' | 'schedule' | 'places' | 'preparation'

const items = [
  { id: 'home' as const, label: '여행', Icon: House },
  { id: 'schedule' as const, label: '일정', Icon: CalendarDays },
  { id: 'places' as const, label: '장소', Icon: MapPinned },
  { id: 'preparation' as const, label: '준비', Icon: Backpack },
]

export function BottomNav({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  return (
    <nav className="bottom-nav" aria-label="주요 메뉴">
      {items.map(({ id, label, Icon }) => (
        <button key={id} className={active === id ? 'active' : ''} onClick={() => onChange(id)} aria-current={active === id ? 'page' : undefined}>
          <Icon size={21} strokeWidth={active === id ? 2.6 : 2} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  )
}
