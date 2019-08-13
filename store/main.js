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
        value: 'join',
        label: '加入會員'
    }, {
        value: 'forgot',
        label: '忘記密碼'
    }],
    otherSetting: [{
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
    ],
    headNavList: [{
        "id": 1,
        "name": "LOGO",
        "settingSwitch": true,
        "setPanel": "SettingLogo"
    },
    {
        "id": 2,
        "name": "TOP BAR",
        "settingSwitch": true,
        "setPanel": "SettingTopBar"
    },
    {
        "id": 3,
        "name": "頁首導航列",
        "settingSwitch": true,
        "setPanel": "SettingHeadNav"
    },
    {
        "id": 4,
        "name": "頁尾導航列",
        "settingSwitch": true,
        "setPanel": "SettingFooterNav"
    }],
    footerNavSettingList: [{
        "id": 1,
        "name": "VIP設定",
        "setPanel": "isVipSetting"
    },
    {
        "id": 2,
        "name": "常見問題設定",
        "setPanel": "isQASetting"
    },
    {
        "id": 3,
        "name": "支付選項設定",
        "setPanel": "isPayOptionSetting"
    },
    {
        "id": 4,
        "name": "合作夥伴設定",
        "setPanel": "isPartnerSetting"
    }],
    systemSettingList: [{
        "id": 1,
        "name": "字型",
        "settingSwitch": true,
        "setPanel": "SettingFont"
    },
    {
        "id": 2,
        "name": "顏色",
        "settingSwitch": true,
        "setPanel": "SettingColor"
    },
    {
        "id": 3,
        "name": "社群媒體",
        "settingSwitch": true,
        "setPanel": "SettingSocial"
    }],
    fontList: [{ 
        value: '1',
        label: '現代'
    }, 
    {
        value: '2',
        label: '標準'
    }, 
    {
        value: '3',
        label: '傳統'
    },
    {
        value: '4',
        label: '雅黑'
    }]
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