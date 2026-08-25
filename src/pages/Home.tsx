import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CloudRain,
  CloudSun,
  MapPin,
  PawPrint,
  Sparkles,
  Sun,
  Umbrella,
  Users,
} from 'lucide-react'
import type { Tab } from '../components/BottomNav'
import { trip, tripDays } from '../data/trip'
import type { DayNumber, TripDay } from '../types'
import { getTripStatus, isCurrentItem } from '../utils/date'

const weatherIcons = {
  shower: CloudSun,
  sun: Sun,
  rain: CloudRain,
}

function getFocus() {
  const status = getTripStatus()
  if (status.state === 'before') {
    return { label: '첫 일정', day: tripDays[0], item: tripDays[0].items[0], note: '주말 교통과 빗길을 생각해 여유 있게 출발해요.' }
  }
  if (status.state === 'after') {
    return { label: '여행 기록', day: tripDays[2], item: tripDays[2].items.at(-1)!, note: '우리 가족의 양평 여행을 무사히 마쳤어요.' }
  }

  const day = tripDays.find((candidate) => candidate.day === status.day)!
  const current = day.items.find((item, index) => isCurrentItem(item, day.date, day.items[index + 1]))
  if (current) return { label: '지금 일정', day, item: current, note: current.description ?? day.weatherNote }

  const now = new Date()
  const nowMinutes = now.getHours() * 60 + now.getMinutes()
  const next = day.items.find((item) => {
    const [hour, minute] = item.time.split(':').map(Number)
    return hour * 60 + minute > nowMinutes
  }) ?? day.items.at(-1)!
  return { label: '다음 일정', day, item: next, note: next.description ?? day.weatherNote }
}

function ForecastCard({ day, onClick }: { day: TripDay; onClick: () => void }) {
  const Icon = weatherIcons[day.weatherTone]
  return (
    <button className={`forecast-mini ${day.weatherTone}`} onClick={onClick}>
      <span className="forecast-day">DAY {day.day}</span>
      <Icon size={20} />
      <strong>{day.temperature}</strong>
      <small>{day.forecast.split(' · ')[0]}</small>
    </button>
  )
}

export function Home({
  onNavigate,
  onScheduleDay,
  onPlace,
}: {
  onNavigate: (tab: Tab) => void
  onScheduleDay: (day: DayNumber) => void
  onPlace: (placeId: string) => void
}) {
  const status = getTripStatus()
  const focus = getFocus()

  return (
    <div className="page home-page">
      <section className="hero notebook-cover">
        <img className="hero-art" src={`${import.meta.env.BASE_URL}shinchan-hero.webp`} alt="짱구 가족과 흰둥이가 함께 떠나는 양평 가족여행" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-topline"><span>FAMILY TRAVEL NOTE · 01</span><PawPrint size={19} /></div>
        <p className="hero-kicker">우리 가족의 느긋한 여름 쉼표</p>
        <h1>양평<br />여행수첩</h1>
        <div className="date-lockup">
          <div><strong>08.30</strong><span>SUN</span></div>
          <ArrowRight size={24} />
          <div><strong>09.01</strong><span>TUE</span></div>
        </div>
        <div className={`status-pill ${status.state}`}><Sparkles size={15} /> {status.label}</div>
        <span className="cover-stamp">4 FAMILY<br />+ CHUCHU</span>
        <span className="hero-bubble" aria-hidden="true">신나는 가족여행!</span>
      </section>

      <section className="quick-facts" aria-label="여행 기본 정보">
        <div><Users size={19} /><span><small>함께 가요</small>{trip.travelers}</span></div>
        <div><PawPrint size={19} /><span><small>반려견</small>{trip.companion}</span></div>
        <div><MapPin size={19} /><span><small>머무는 곳</small>{trip.accommodation}</span></div>
      </section>

      <section className="focus-card" aria-label={focus.label}>
        <div className="focus-heading">
          <span className="focus-icon"><CalendarClock size={21} /></span>
          <div><span className="eyebrow">{focus.label}</span><small>DAY {focus.day.day} · {focus.day.date.slice(5).replace('-', '.')}</small></div>
        </div>
        <div className="focus-main"><strong>{focus.item.time}</strong><div><h2>{focus.item.title}</h2><p>{focus.note}</p></div></div>
        <div className="focus-actions">
          <button onClick={() => onScheduleDay(focus.day.day)}>일정 펼치기 <ArrowRight size={15} /></button>
          <button onClick={() => onPlace('slowinn')}>숙소 보기 <MapPin size={15} /></button>
        </div>
      </section>

      <section className="section-block forecast-block">
        <div className="section-title">
          <div><span className="eyebrow">WEATHER MEMO</span><h2>날씨 한눈에</h2></div>
          <span className="updated-label">{trip.forecastUpdatedAt}</span>
        </div>
        <div className="forecast-grid">
          {tripDays.map((day) => <ForecastCard key={day.day} day={day} onClick={() => onScheduleDay(day.day)} />)}
        </div>
        <p className="forecast-caption"><Umbrella size={14} /> 예보는 바뀔 수 있어 출발 전 기상청에서 다시 확인해요.</p>
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

      <section className="section-block note-section">
        <div className="section-title"><div><span className="eyebrow">TRIP PROMISE</span><h2>이번 여행의 약속</h2></div><BookOpen size={22} /></div>
        <div className="note-grid">
          <article><span>01</span><strong>서두르지 않기</strong><p>관광 40, 휴식 60. 힘들면 다음 일정을 과감히 줄여요.</p></article>
          <article><span>02</span><strong>더위와 비 먼저 보기</strong><p>12시 이후 야외활동을 줄이고 우천 플랜을 바로 사용해요.</p></article>
          <article><span>03</span><strong>츄츄 간식 금지</strong><p>알러지 사료만 먹고, 물과 휴식 시간을 자주 챙겨요.</p></article>
        </div>
      </section>

      <p className="heat-note">이 수첩은 가족이 함께 보는 안내용이에요.<br />예약·영업시간·반려견 동반 조건은 방문 직전에 한 번 더 확인해요.</p>
    </div>
  )
}
