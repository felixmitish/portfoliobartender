import { createRoot } from 'react-dom/client'
import { Logo } from '@pmndrs/branding'
import App from './App'
import { Overlay } from './overlay'

export default function Page() {
  return (
    <>
      <App />
      <Overlay />
      {/* <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} /> */}
    </>
  )
}
