const state = () => ({
    locales: ['tw', 'en', 'jp', 'cn'],
    locale: "tw",
    options: [{
        value: 'opt1',
        label: '首頁'
    }, {
        value: 'opt2',
        label: '視訊直播'
    }, {
        value: 'opt3',
        label: '電子遊藝'
    }, {
        value: 'opt4',
        label: '優惠活動'
    }, {
        value: 'opt5',
        label: '捕魚大廳'
    }, {
        value: 'opt6',
        label: 'VIP'
    }, {
        value: 'opt7',
        label: '常見問題'
    }, {
        value: 'opt8',
        label: '支付選項'
    }, {
        value: 'opt9',
        label: '合作夥伴'
    }, {
        value: 'opt10',
        label: '404'
    }, {
        value: 'opt11',
        label: '加入會員'
    }, {
        value: 'opt12',
        label: '代理註冊'
    }, {
        value: 'opt13',
        label: '忘記密碼'
    }],
    setting: [{
        value: 'list01',
        label: '選擇模版'
    }, {
        value: 'list02',
        label: 'SEO'
    }, {
        value: 'list03',
        label: '多國語系'
    }, {
        value: 'list04',
        label: '操作記錄'
    }, {
        value: 'list05',
        label: '操作說明'
    }],
    tabList: [{
        name: 'first',
        label: '頁面管理'
    }, {
        name: 'second',
        label: '系統設置'
    }, {
        name: 'third',
        label: '浮動圖'
    }]
})

const getters = {

    // optionList: (state, getters, rootState, rootGetters) => {
    //   return state.options;
    // }

}

const actions = {

    // setGameList({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
    //   const { list } = payload;
    //   commit("setGameList", { list });
    // },

    // setBannerList({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
    //   const { list } = payload;
    //   commit("setBannerList", { list });
    // }

}

const mutations = {

    // setGameList(state, payload) {
    //   const { list } = payload;
    //   state.gameList = list;
    // },

    // setBannerList(state, payload) {
    //   const { list } = payload;
    //   state.banner = list;
    // }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}