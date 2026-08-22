import { RefreshCw, X } from 'lucide-react'
import { useRegisterSW } from 'virtual:pwa-register/react'

export function UpdatePrompt() {
  const { needRefresh: [needRefresh, setNeedRefresh], updateServiceWorker } = useRegisterSW()
  if (!needRefresh) return null
  return (
    <div className="update-toast" role="status">
      <div><strong>새로운 여행 정보가 있어요</strong><span>지금 새로고침해서 확인하세요.</span></div>
      <button className="refresh-button" onClick={() => updateServiceWorker(true)}><RefreshCw size={16} /> 새로고침</button>
      <button className="dismiss-button" aria-label="닫기" onClick={() => setNeedRefresh(false)}><X size={18} /></button>
    </div>
  )
}
