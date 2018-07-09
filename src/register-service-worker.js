import { register } from 'register-service-worker'

const dispatchEvent = (name, timeout = 8000) => {
  setTimeout(() => {
    document.dispatchEvent(new Event(name))
  }, timeout)
}

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome <= 67 from automatically showing the prompt
  event.preventDefault()
  // Show the modal add to home screen dialog
  event.prompt()

  event.userChoice.then((choice) => {
    dispatchEvent(`install:${choice.outcome}`)
  })
})

register('service-worker.js', {
  ready () {
    // console.log('Service worker is active.')
  },
  registered (registration) {
    registration.update()
  },
  cached (registration) { // eslint-disable-line no-unused-vars
    // console.log('Content has been cached for offline use.')
  },
  updated (registration) { // eslint-disable-line no-unused-vars
    dispatchEvent('sw:update')
    dispatchEvent('sw:update', 8000 * 5)
  },
  offline () {
    console.log('No internet connection found. App is running in offline mode.') // eslint-disable-line no-console
  },
  error (error) {
    dispatchEvent('sw:error')
    console.error('Error during service worker registration:', error) // eslint-disable-line no-console
  }
})
