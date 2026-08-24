export type DayNumber = 1 | 2 | 3

export type ScheduleItem = {
  time: string
  endTime?: string
  icon: string
  title: string
  description?: string
  notes?: string[]
  placeId?: string
  placeIds?: string[]
}

export type TripDay = {
  day: DayNumber
  date: string
  weekday: string
  theme: string
  route: string
  items: ScheduleItem[]
}

export type PlaceCategory = '숙소' | '관광' | '식당' | '카페' | '마트'

export type Place = {
  id: string
  category: PlaceCategory
  icon: string
  name: string
  shortAddress: string
  address: string
  day?: DayNumber
  time?: string
  summary: string
  tips: string[]
  caution?: string
  naverUrl?: string
  kakaoUrl?: string
}

export type PackingGroup = {
  icon: string
  title: string
  items: string[]
}
