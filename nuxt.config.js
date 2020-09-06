export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - DTL NAVI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '同志社大学のテニスサークルの一覧を掲載しています。活動日程から、ビラのダウンロードまで様々な用途でご利用いただけます。',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '同志社　テニスサークル　テニス　サークル　新歓',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'DTL NAVI' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://dtlnavi.com' },
      { hid: 'og:title', property: 'og:title', content: 'DTL NAVI' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '同志社大学のテニスサークルの一覧を掲載しています。活動日程から、ビラのダウンロードまで様々な用途でご利用いただけます。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dtlnavi.com/img/headerImage.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  googleAnalytics: {
    id: 'UA-177362145-1',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
