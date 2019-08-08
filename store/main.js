const state = () => ({
    locales: ['tw', 'en', 'jp', 'cn'],
    locale: "tw",
    currentSelect: 'home',
    options: [{
        value: 'home',
        label: '首頁'
    }, {
        value: 'liveStream',
        label: '視訊直播'
    }, {
        value: 'ePlay',
        label: '電子遊藝'
    }, {
        value: 'preferential',
        label: '優惠活動'
    }, {
        value: 'fishing',
        label: '捕魚大廳'
    }, {
        value: 'vip',
        label: 'VIP'
    }, {
        value: 'qa',
        label: '常見問題'
    }, {
        value: 'payOption',
        label: '支付選項'
    }, {
        value: 'partner',
        label: '合作夥伴'
    }, {
        value: '404',
        label: '404'
    }, {
        value: 'join',
        label: '加入會員'
    }, {
        value: 'forgot',
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
    }],
    //Upload
    fileList: [
        { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
    ]
})

const getters = {
    isHome: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'home';
    },

    isLiveStream: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'liveStream';
    },

    isEPlay: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'ePlay';
    },

    isPreferential: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'preferential';
    },

    isFishing: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'fishing';
    },

    isVip: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'vip';
    },

    isQA: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'qa';
    },

    isPayOption: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'payOption';
    },

    isPartner: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'partner';
    },

    is404: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === '404';
    },

    isJoin: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'join';
    },
    
    isForgot: (state, getters, rootState, rootGetters) => {
        return state.currentSelect === 'forgot';
    },

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

    updateSelect(state, payload) {
        const { value } = payload;
        state.currentSelect = value;
    },

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