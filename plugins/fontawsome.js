// import { defineNuxtPlugin } from 'nuxt3/app'
import { defineNuxtPlugin } from '#app'


import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRotateRight)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
