import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Seamless auto-update: when a new service worker takes control, reload once so
// the freshest build is always shown without manual cache clearing.
if ('serviceWorker' in navigator) {
  let refreshing = false
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return
    refreshing = true
    window.location.reload()
  })
  // Proactively check for an updated service worker on every load.
  navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.update()))
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
