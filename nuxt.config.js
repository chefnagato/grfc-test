export default {
// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
ssr: false,

server: {

    port: 8002,

  },

// Global page headers: https://go.nuxtjs.dev/config-head
head: {

  title: 'Тестовое задание',

  meta: [

    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'Content-Security-Policy', content: "script ;default-src * gap: ws: https://ssl.gstatic.com;img-src * 'self' data: content:;style-src 'self' 'unsafe-inline' data: blob:;script-src * 'unsafe-inline' 'unsafe-eval' data: blob:;" },

  ],

  link: [

    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap' },

  ]

},

// Global CSS: https://go.nuxtjs.dev/config-css
css: [

'~/assets/css/reset.css',
'~/assets/css/config.css',
'~/assets/css/index.css',

],

// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
],

// Auto import components: https://go.nuxtjs.dev/config-components
components: true,

// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
buildModules: [
],

// Modules: https://go.nuxtjs.dev/config-modules
modules: [
// https://go.nuxtjs.dev/pwa
'@nuxtjs/pwa',
],

// PWA module configuration: https://go.nuxtjs.dev/pwa
pwa: {
manifest: {
lang: 'en'
}
},

// Build Configuration: https://go.nuxtjs.dev/config-build
build: {
}
}