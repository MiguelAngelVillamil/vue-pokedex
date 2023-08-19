import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import vuex from '../store/store'
import router from '../router'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(vuex)
}