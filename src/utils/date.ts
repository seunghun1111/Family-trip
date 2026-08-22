import { trip } from '../data/trip'
import type { DayNumber, ScheduleItem } from '../types'

const DAY_MS = 86_400_000

function localDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function startOfToday(now = new Date()) {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

export function getTripStatus(now = new Date()) {
  const today = startOfToday(now)
  const start = localDate(trip.startDate)
  const end = localDate(trip.endDate)

  if (today < start) {
    const days = Math.ceil((start.getTime() - today.getTime()) / DAY_MS)
    return { label: `여행까지 D-${days}`, state: 'before' as const }
  }
  if (today > end) return { label: '여행 완료', state: 'after' as const }

  const day = Math.floor((today.getTime() - start.getTime()) / DAY_MS) + 1
  return { label: `DAY ${day} · 양평 여행 중`, state: 'during' as const, day: day as DayNumber }
}

export function getDefaultDay(now = new Date()): DayNumber {
  const status = getTripStatus(now)
  return status.state === 'during' ? status.day : 1
}

function minutes(value: string) {
  const [hour, minute] = value.split(':').map(Number)
  return hour * 60 + minute
}

export function isCurrentItem(item: ScheduleItem, date: string, nextItem?: ScheduleItem, now = new Date()) {
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  if (today !== date) return false
  const current = now.getHours() * 60 + now.getMinutes()
  const start = minutes(item.time)
  const end = item.endTime ? minutes(item.endTime) : nextItem ? minutes(nextItem.time) : 24 * 60
  return current >= start && current < end
}
