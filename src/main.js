import { createApp } from 'vue'
import './libreriaRB.css'
import App from './App.vue'
// Fonts
import '@fontsource-variable/mulish'; // Supports weights 200-900
import '@fontsource-variable/playfair-display/wght-italic.css'; // Supports weights 400-900
// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Icone
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faPinterestP, faFacebookF, faLinkedinIn)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

