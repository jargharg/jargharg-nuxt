export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jarod Hargreaves, Frontend Web Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Jarod Hargreaves, Frontend Web Developer',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/llt2ihl.css',
      },
    ],
  },

  firebase: {
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: 'jargharg.firebaseapp.com',
      databaseURL: 'https://jargharg.firebaseio.com',
      projectId: 'jargharg',
      storageBucket: 'jargharg.appspot.com',
      messagingSenderId: '673415082314',
      appId: '1:673415082314:web:28d332c427763f356351b3',
      measurementId: 'G-D9S0JKDGN2',
    },
    services: {
      analytics: true,
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/firebase'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
