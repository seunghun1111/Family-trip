import { useEffect, useState } from 'react'
import { BottomNav, type Tab } from './components/BottomNav'
import { PlaceSheet } from './components/PlaceSheet'
import { UpdatePrompt } from './components/UpdatePrompt'
import { places } from './data/places'
import { Home } from './pages/Home'
import { Places } from './pages/Places'
import { Preparation } from './pages/Preparation'
import { Schedule } from './pages/Schedule'
import type { DayNumber, Place } from './types'
import { getDefaultDay } from './utils/date'

function tabFromHash(): Tab {
  const value = window.location.hash.replace('#/', '')
  return ['schedule', 'places', 'preparation'].includes(value) ? value as Tab : 'home'
}

export default function App() {
  const [tab, setTab] = useState<Tab>(tabFromHash)
  const [selectedDay, setSelectedDay] = useState<DayNumber>(getDefaultDay)
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)

  useEffect(() => {
    const onHashChange = () => { setTab(tabFromHash()); setSelectedPlace(null); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = (next: Tab) => {
    const hash = next === 'home' ? '#/' : `#/${next}`
    if (window.location.hash === hash) { setTab(next); window.scrollTo(0, 0) }
    else window.location.hash = hash
  }

  const showPlaceById = (id: string) => setSelectedPlace(places.find((place) => place.id === id) ?? null)
  const showScheduleDay = (day: DayNumber) => {
    setSelectedDay(day)
    navigate('schedule')
  }

  return (
    <main className="app-shell">
      <div className="app-content">
        {tab === 'home' && <Home onNavigate={navigate} onScheduleDay={showScheduleDay} />}
        {tab === 'schedule' && <Schedule selectedDay={selectedDay} onDayChange={setSelectedDay} onPlace={showPlaceById} />}
        {tab === 'places' && <Places onPlace={setSelectedPlace} />}
        {tab === 'preparation' && <Preparation />}
      </div>
      <BottomNav active={tab} onChange={navigate} />
      <PlaceSheet place={selectedPlace} onClose={() => setSelectedPlace(null)} />
      <UpdatePrompt />
    </main>
  )
}
