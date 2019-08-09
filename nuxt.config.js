import colors from 'vuetify/es5/util/colors'

const NAME = 'WATCH_DOCS'
const DESCRIPTION = 'Document Management Service for Company'
const BASE_URL = '/'
const PRIMARY_COLOR = '#632a7e'
const SECONDARY_COLOR = '#a13e97'

export default {
  css: [],

  loading: { color: PRIMARY_COLOR },

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  devModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  manifest: {
    name: NAME,
    short_name: NAME,
    description: DESCRIPTION,
    scope: BASE_URL,
    display: 'standalone',
    start_url: `${BASE_URL}?utm_source=homescreen`,
    theme_color: PRIMARY_COLOR,
    background_color: PRIMARY_COLOR
  },

  meta: {
    name: NAME,
    description: DESCRIPTION,
    appleStatusBarStyle: 'black-translucent',
    ogHost: `https://watchdocs.github.io${BASE_URL}`,
    ogImage: 'social_preview.png'
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: PRIMARY_COLOR,
          accent: colors.grey.darken3,
          secondary: SECONDARY_COLOR,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  mode: 'universal',

  router: { base: BASE_URL },

  build: {
    extractCSS: true
  }
}
