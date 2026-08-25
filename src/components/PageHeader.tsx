export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header className="page-header">
      <div className="page-header-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      <img className="page-character" src={`${import.meta.env.BASE_URL}shinchan-travel-sticker.webp`} alt="" aria-hidden="true" />
      <span className="page-bubble" aria-hidden="true">출발~!</span>
    </header>
  )
}
