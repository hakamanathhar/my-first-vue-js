import webpack from 'webpack'

export default {
  server: {
    port: 4000,
    host: '0.0.0.0',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sekolah-beta',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' },
      // {
      //   rel: 'stylesheet',
      //   href:'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      // }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', type: "text/javascript"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa'
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://127.0.0.1:3333/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
      // global modules
      _: 'lodash',
      $: "jquery"
      })
    ],
  },
  pwa: {
    meta: {
      title: 'My PWA',
      author: 'Me',
    },
    manifest: {
      name: 'NuxtJS PWAs are easy',
      short_name: 'Nuxt.js PWA',
      lang: 'en',
      display: 'standalone',
    },
    // icon: {
    //   source: '',
    //   fileName: '',
    // }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },
}
