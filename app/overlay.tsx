'use client'
import { createRoot } from 'react-dom/client'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import App from './App.js'

export function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div className="absolute bottom-4 left-8 bg-white/30 px-2 rounded-sm backdrop-blur-sm"> Bar Catering Cote d&apos;Azur </div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>good cocktails</div>
    </div>
  )
}
