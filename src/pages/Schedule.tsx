import { MapPin } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { places } from '../data/places'
import { tripDays } from '../data/trip'
import { isCurrentItem } from '../utils/date'
import type { DayNumber } from '../types'

export function Schedule({ selectedDay, onDayChange, onPlace }: { selectedDay: DayNumber; onDayChange: (day: DayNumber) => void; onPlace: (placeId: string) => void }) {
  const day = tripDays.find((candidate) => candidate.day === selectedDay)!
  return (
    <div className="page">
      <PageHeader eyebrow="ITINERARY" title="우리 여행 일정" description="서두르지 않고, 함께 즐기는 만큼만." />
      <div className="day-tabs" role="tablist" aria-label="여행 일자">
        {tripDays.map((candidate) => (
          <button key={candidate.day} role="tab" aria-selected={candidate.day === selectedDay} className={candidate.day === selectedDay ? 'active' : ''} onClick={() => onDayChange(candidate.day)}>
            <b>DAY {candidate.day}</b><small>{candidate.date.slice(5).replace('-', '.')} {candidate.weekday}</small>
          </button>
        ))}
      </div>
      <section className="day-intro">
        <span>DAY {day.day} ROUTE</span><h2>{day.theme}</h2><p>{day.route}</p>
      </section>
      <div className="timeline">
        {day.items.map((item, index) => {
          const current = isCurrentItem(item, day.date, day.items[index + 1])
          return (
            <article key={`${item.time}-${item.title}`} className={current ? 'current' : ''}>
              <div className="timeline-time"><strong>{item.time}</strong>{item.endTime && <small>— {item.endTime}</small>}</div>
              <div className="timeline-rail"><span>{item.icon}</span></div>
              <div className="timeline-content">
                {current && <span className="now-badge">지금 일정</span>}
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
                {item.notes && <ul>{item.notes.map((note) => <li key={note}>{note}</li>)}</ul>}
                {(item.placeIds ?? (item.placeId ? [item.placeId] : [])).map((placeId) => {
                  const place = places.find((candidate) => candidate.id === placeId)
                  return <button key={placeId} onClick={() => onPlace(placeId)}><MapPin size={14} /> {place?.name ?? '장소 보기'}</button>
                })}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
