export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nizar Baihaqi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Web Developer from Indonesia' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/0fcc578757.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-seo-meta",
    "@nuxt/content",
    ['nuxt-supabase', {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_API_KEY
    }]
  ],
  
  // Seo Meta
  seoMeta: {
    title: 'Nizar Baihaqi',
    defaultDescription: 'Hello, I’m Nizar Baihaqi from Indonesia. I am a Web Developer. I have experience at building website with Jamstack. 🛠️',
    defaultUrl: 'https://nizarbaihaqi.com/',
    defaultImage: 'https://nizarbaihaqi.com/banner.jpg',
    locale: 'en_US',
    siteName: 'Nizar Baihaqi',
    twitterUser: '@abaihaaqi'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: true
  },

  // Color mode
  colorMode: {
    classSuffix: ''
  },

  // Page Transition
  pageTransition: 'page',
}
