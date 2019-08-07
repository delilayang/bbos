import config from './static/public/config'

module.exports = {
    mode: 'spa', //Universal
    /*
     ** Headers of the page
     */

    env: {
        apiHost: config.api_host,
        version: config.version,
        commitHash: config.commit_hash,
        redirectURL: config.redirect_url
    },

    head: {
        title: 'bbos-CMS',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { name: 'twitter: title', content: 'bbos CMS content' },
            { name: 'twitter: description', content: 'bbos CMS content' },
            { name: 'twitter: image', content: '' },
            { name: 'twitter: card', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '@/assets/style/index.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/i18n', // webpack plugin
        '@/plugins/vue2-filters',
        '@/plugins/filters/Moment',
        '@/plugins/filters/DotString'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    router: { // customize nuxt.js router (vue-router).
        middleware: 'i18n' // middleware all pages of the application
    },
    generate: {
        routes: ['/']
    }
}