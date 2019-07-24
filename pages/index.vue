<template>
  <el-container style="height: 100vh; border: 1px solid #eee;">
  <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
    <el-header style="height: 40px;">
      <button>捨棄當前編輯</button>
      <button>儲存</button>
      <button>發佈</button>
    </el-header>

    <el-select v-model="page" placeholder="請選擇頁面" @change="mainSelect">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <tab-menu></tab-menu>

    <el-select class="other-setting" v-model="value2" placeholder="其他設定">
      <el-option
        v-for="list in setting"
        :key="list.value"
        :label="list.label"
        :value="list.value">
      </el-option>
    </el-select>
  </el-aside>
  
  <el-container>
    <el-header style="height: 40px;">
      <el-select v-model="$i18n.locale">
        <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</el-option>
      </el-select>
      <button @click="toggle"><i class="el-icon-monitor"></i></button>
      <button @click="toggle"><i class="el-icon-mobile-phone"></i></button>
    </el-header>
    
    <el-main>
      <div class="web-preview" v-if="isPreview">
        <div class="web-preview index" v-if="isHome">
          <span>首頁 Web-Preview</span>
          <h2>{{ $t("hello123") }}</h2>
          <h2>{{ $t("bye123")}}</h2>
          <p>{{ $tc('car') }}</p>
          <p>{{ $tc('car', 10, { count: 10}) }}</p>
        </div>
        <div class="web-preview live" v-if="isLiveStream"><span>視訊直播 Web-Preview</span></div>
        <div class="web-preview game" v-if="isEPlay"><span>電子遊藝 Web-Preview</span></div>
        <div class="web-preview" v-if="isPreferential"><span>優惠活動 Web-Preview</span></div>
        <div class="web-preview" v-if="isFishing"><span>捕魚大廳 Web-Preview</span></div>
        <div class="web-preview" v-if="isVip"><span>VIP Web-Preview</span></div>
        <div class="web-preview" v-if="isQA"><span>常見問題 Web-Preview</span></div>
        <div class="web-preview" v-if="isPayOption"><span>支付選項 Web-Preview</span></div>
        <div class="web-preview" v-if="isPartner"><span>合作夥伴 Web-Preview</span></div>
        <div class="web-preview" v-if="is404"><span>404 Web-Preview</span></div>
        <div class="web-preview" v-if="isJoin"><span>加入會員 Web-Preview</span></div>
        <div class="web-preview" v-if="isAgentReg"><span>代理註冊 Web-Preview</span></div>
        <div class="web-preview" v-if="isForgot"><span>忘記密碼 Web-Preview</span></div>
      </div>
      <div class="mobile-preview" v-else></div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import TabMenu from "~/components/TabMenu";

export default {
  components: {
    TabMenu
  },
  head() {
    return {
      title: 'Home-Page',
      meta: [
        {name: 'twitter: title', content: 'bbos CMS content'},
        {name: 'twitter: description', content: 'bbos CMS content'},
        {name: 'twitter: image', content: ''},
        {name: 'twitter: card', content: ''}
      ]
    }
  },
  data() {
    return {
      activeName: 'first',
      activeVersion: 'web',
      page: '',
      value2: '',
      isPreview: true,
    }
  },
  computed: {
    ...mapState("main", ["langs", "options", "setting", "tabList"]),
    ...mapGetters("main", [
      "isHome",
      "isLiveStream",
      "isEPlay",
      "isPreferential",
      "isFishing",
      "isVip",
      "isQA",
      "isPayOption",
      "isPartner",
      "is404",
      "isJoin",
      "isAgentReg",
      "isForgot"
    ]),
  },
  methods: {
    // changeLanguage (language) {
    //     this.$i18n.locale = language
    //     document.cookie = "locale=" + language // 將當前語言保存到cookie 中，代碼僅作爲演示，自己完善下哈
    // },
    handleClick(tab) {
      switch(tab) {
        case "first": //頁面管理
          this.isShow1 = true;
          this.isShow2 = false;
          this.isShow3 = false;
          break;
        case "second": //系統設置
          this.isShow1 = false;
          this.isShow2 = true;
          this.isShow3 = false;
          break;
        case "third": //浮動圖
          this.isShow1 = false;
        this.isShow2 = false;
        this.isShow3 = true;
          break;
      }
    },
    toggle() {
      this.isPreview = !this.isPreview;
    },
    mainSelect(val) {
      this.$store.commit("main/updateSelect", { value: val });
    }
  }
};
</script>

<style lang="scss">
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 30px;
  font-size: 12;
  display: flex;
  justify-content: center;
}
  
.el-aside {
  color: #333;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-select {
  width: 250px;
}
.page-management, .system-setting, .floating-img {
  ul {
    list-style: none;
    padding-left: 0;
    li {
      padding: 10px;
      border-bottom: 1px solid #DCDFE6;
    }
  }
}

.web-preview {
  background: #ddd; 
  display: flex; 
  flex-grow: 1; 
  height: 100%;
  position: relative;
  align-items: center;
  overflow-y: auto;
  .index, .live, .game {
    color: #fff;
    display: flex;
    text-align: center;
  }
  .index {
    background: rgb(69, 91, 145);
  }
  .live {
    background: rgb(63, 47, 101);
  }
  .game {
    background: #333;
  }
}

.mobile-preview {
  background: #ddd; 
  width: 375px;
  max-height: 667px; 
  height: 100%;
  margin: 0 auto;
}

.other-setting {
  position: absolute;
  bottom: 0;
}
</style>
