import { CloudRain, CloudSun, MapPin, ShieldCheck, Sun } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { places } from '../data/places'
import { trip, tripDays } from '../data/trip'
import type { DayNumber } from '../types'
import { isCurrentItem } from '../utils/date'

const weatherIcons = {
  shower: CloudSun,
  sun: Sun,
  rain: CloudRain,
}

export function Schedule({ selectedDay, onDayChange, onPlace }: { selectedDay: DayNumber; onDayChange: (day: DayNumber) => void; onPlace: (placeId: string) => void }) {
  const day = tripDays.find((candidate) => candidate.day === selectedDay)!
  const WeatherIcon = weatherIcons[day.weatherTone]

  return (
    <div className="page schedule-page">
      <PageHeader eyebrow="TRAVEL LOG" title="우리 여행 일정" description="이동시간과 날씨까지 채워 넣은 2박 3일 수첩이에요." />
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

      <section className={`day-weather ${day.weatherTone}`}>
        <div className="day-weather-icon"><WeatherIcon size={24} /></div>
        <div><span>{trip.forecastUpdatedAt} 예보</span><strong>{day.forecast}</strong><p>{day.weatherNote}</p></div>
        <b>{day.temperature}</b>
      </section>

      <div className="timeline">
        {day.items.map((item, index) => {
          const current = isCurrentItem(item, day.date, day.items[index + 1])
          const placeIds = item.placeIds ?? (item.placeId ? [item.placeId] : [])
          return (
            <article key={`${item.time}-${item.title}`} className={`${current ? 'current ' : ''}item-${item.kind ?? 'activity'}`}>
              <div className="timeline-time"><strong>{item.time}</strong>{item.endTime && <small>— {item.endTime}</small>}</div>
              <div className="timeline-rail"><span>{item.icon}</span></div>
              <div className="timeline-content">
                <div className="timeline-labels">
                  {current && <span className="now-badge">지금 일정</span>}
                  {item.badge && <span className="item-badge">{item.badge}</span>}
                </div>
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
                {item.notes && <ul>{item.notes.map((note) => <li key={note}>{note}</li>)}</ul>}
                {placeIds.length > 0 && <div className="place-link-row">
                  {placeIds.map((placeId) => {
                    const place = places.find((candidate) => candidate.id === placeId)
                    return <button key={placeId} onClick={() => onPlace(placeId)}><MapPin size={14} /> {place?.name ?? '장소 보기'}</button>
                  })}
                </div>}
              </div>
            </article>
          )
        })}
      </div>

      <section className="fallback-note">
        <ShieldCheck size={21} />
        <div><span>PLAN B · 컨디션이 다르면</span><p>{day.fallback}</p></div>
      </section>
    </div>
  )
}
