import { Clock3, ExternalLink, MapPin, Phone, X } from 'lucide-react'
import type { Place } from '../types'
import { mapLinks } from '../utils/navigation'

export function PlaceSheet({ place, onClose }: { place: Place | null; onClose: () => void }) {
  if (!place) return null
  const fallbackLinks = mapLinks(place.address)
  const links = {
    naver: place.naverUrl ?? fallbackLinks.naver,
    kakao: place.kakaoUrl ?? fallbackLinks.kakao,
  }
  return (
    <div className="sheet-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="place-sheet" role="dialog" aria-modal="true" aria-labelledby="place-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="sheet-handle" />
        <button className="sheet-close" aria-label="장소 상세 닫기" onClick={onClose}><X /></button>
        <div className="place-hero-icon">{place.icon}</div>
        <span className="category-label">{place.category}</span>
        <h2 id="place-title">{place.name}</h2>
        <div className="place-meta">
          {place.day && <span>DAY {place.day}</span>}
          {place.time && <span>{place.time}</span>}
          {place.label && <span>{place.label}</span>}
        </div>
        <p className="place-summary">{place.summary}</p>
        {place.openHours && <div className="hours-row"><Clock3 size={17} /><span>{place.openHours}</span></div>}
        <div className="address-row"><MapPin size={17} /><span>{place.address}</span></div>
        <ul className="tip-list">{place.tips.map((tip) => <li key={tip}>✓ {tip}</li>)}</ul>
        {place.caution && <p className="caution">⚠ {place.caution}</p>}
        <div className={`map-buttons ${place.phone ? 'has-phone' : ''}`}>
          {place.phone && <a className="phone-link" href={`tel:${place.phone.replaceAll('-', '')}`}><Phone size={15} /> 전화하기</a>}
          <a href={links.naver} target="_blank" rel="noreferrer">네이버지도 <ExternalLink size={15} /></a>
          <a href={links.kakao} target="_blank" rel="noreferrer">카카오맵 <ExternalLink size={15} /></a>
        </div>
      </section>
    </div>
  )
}
