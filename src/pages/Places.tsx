import { ChevronRight, MapPin } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { placeCategories, places } from '../data/places'
import type { Place } from '../types'

export function Places({ onPlace }: { onPlace: (place: Place) => void }) {
  return (
    <div className="page">
      <PageHeader eyebrow="PLACES" title="여행 장소" description="주소와 방문 팁을 한곳에 모았어요." />
      <div className="place-groups">
        {placeCategories.map((category) => {
          const group = places.filter((place) => place.category === category)
          return (
            <section key={category}>
              <div className="place-group-title"><span>{group[0].icon}</span><h2>{category}</h2><small>{group.length}</small></div>
              <div className="place-cards">
                {group.map((place) => (
                  <button key={place.id} onClick={() => onPlace(place)}>
                    <span className="place-card-icon">{place.icon}</span>
                    <span className="place-card-copy"><strong>{place.name}</strong><small><MapPin size={13} /> {place.shortAddress}</small><p>{place.summary}</p></span>
                    <ChevronRight size={20} />
                  </button>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
