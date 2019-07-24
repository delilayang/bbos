import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
    // Set i18n instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.i18n = new VueI18n({
        locale: store.state.main.locale,
        fallbackLocale: store.state.main.locale || 'tw',
        messages: {
            'tw': require('~/locales/tw.json'),
            'jp': require('~/locales/jp.json'),
            'en': require('~/locales/en.json'),
            'cn': require('~/locales/cn.json')
        }
    })
}