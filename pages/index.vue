<template>
  <el-container style="height: 100vh; border: 1px solid #eee;">
  <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
    <el-header style="height: 40px;">
      <button>捨棄當前編輯</button>
      <button>儲存</button>
      <button>發佈</button>
    </el-header>
    
    <div class="side-content-main" style="display: none;">
      <el-select v-model="page" placeholder="請選擇頁面" @change="mainSelect">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <tab-menu></tab-menu>
    </div>
      
    

    <div class="side-content-setting" style="">
      <ul>
        <li>
          <el-button round class="btn-back"><i class="el-icon-more"></i></el-button>
          <span>頁首導航列設定</span>
        </li>
        <li>
          <span>首頁</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>視訊直播</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>電子遊藝</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>捕魚大廳</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>優惠活動</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>新增頁面</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
      </ul>
    </div>

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
        <el-option v-for="(lang, i) in locales" :key="`Lang${i}`" :value="lang">{{ lang }}</el-option>
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
    ...mapState("main", ["locales", "options", "setting", "tabList"]),
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
    toggle() {
      this.isPreview = !this.isPreview;
    },
    mainSelect(val) {
      this.$store.commit("main/updateSelect", { value: val });
    }
  }
};
</script>
