export default {
  head: {
    title: 'Design Village 2023 — “Дизайн під час війни”',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Подія, на якій 10.06 відомі українські дизайнери поділяться своїм досвідом створення візуальних комунікацій під час повномасштабного вторгнення. Івано-Франківськ.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  ssr: false,
  target: 'static',
  router: {
    base:'/Design_Village/'
  },

  css: [
    '~/static/scss/normalize.css',
    '~/static/scss/main.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },

  build: {
  }
}
