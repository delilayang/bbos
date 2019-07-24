export const state = () => ({
    locales: ['tw', 'en', 'jp', 'cn'],
    locale: 'tw'
})
export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}