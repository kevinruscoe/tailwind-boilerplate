import Alpine from 'alpinejs'
import welcome from './components/welcome'
 
window.Alpine = Alpine

Alpine.data('welcome', welcome)
 
Alpine.start()