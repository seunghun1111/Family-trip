import { ArrowRight, CloudSun, MapPin, PawPrint, Sparkles, Users } from 'lucide-react'
import { trip, tripDays } from '../data/trip'
import { getTripStatus } from '../utils/date'
import type { Tab } from '../components/BottomNav'
import type { DayNumber } from '../types'

export function Home({
  onNavigate,
  onScheduleDay,
}: {
  onNavigate: (tab: Tab) => void
  onScheduleDay: (day: DayNumber) => void
}) {
  const status = getTripStatus()
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-topline"><span>2026 SUMMER</span><PawPrint size={19} /></div>
        <p className="hero-kicker">우리 가족의 느긋한 여름 쉼표</p>
        <h1>양평<br />가족여행</h1>
        <div className="date-lockup">
          <div><strong>08.30</strong><span>SUN</span></div>
          <ArrowRight size={24} />
          <div><strong>09.01</strong><span>TUE</span></div>
        </div>
        <div className={`status-pill ${status.state}`}><Sparkles size={15} /> {status.label}</div>
        <div className="hero-hills" aria-hidden="true"><span /><span /><i>🐕</i></div>
      </section>

      <section className="quick-facts" aria-label="여행 기본 정보">
        <div><Users size={19} /><span><small>함께 가요</small>{trip.travelers}</span></div>
        <div><PawPrint size={19} /><span><small>반려견</small>{trip.companion}</span></div>
        <div><MapPin size={19} /><span><small>머무는 곳</small>{trip.accommodation}</span></div>
      </section>

      <section className="section-block">
        <div className="section-title"><div><span className="eyebrow">OUR ROUTE</span><h2>3일의 여행</h2></div><button onClick={() => onNavigate('schedule')}>전체 일정 <ArrowRight size={16} /></button></div>
        <div className="route-list">
          {tripDays.map((day) => (
            <button key={day.day} onClick={() => onScheduleDay(day.day)}>
              <span className="day-stamp"><b>DAY {day.day}</b><small>{day.date.slice(5).replace('-', '.')} {day.weekday}</small></span>
              <span className="route-copy"><strong>{day.theme}</strong><small>{day.route}</small></span>
              <ArrowRight size={18} />
            </button>
          ))}
        </div>
      </section>

      <section className="weather-card">
        <div className="weather-icon"><CloudSun size={28} /></div>
        <div><span className="eyebrow">BEFORE WE GO</span><h2>출발 전 양평 날씨를<br />확인해 주세요</h2></div>
        <a href="https://www.weather.go.kr/w/index.do" target="_blank" rel="noreferrer">날씨 확인 <ArrowRight size={16} /></a>
      </section>

      <p className="heat-note">🌿 한낮 12:00~16:00에는 야외활동을 줄이고<br />숙소와 실내에서 충분히 쉬어요.</p>
    </div>
  )
}
