<template>
  <el-container style="height: 100vh; border: 1px solid #eee;">
  <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
    <el-header style="height: 40px;">
      <button>捨棄當前編輯</button>
      <button>儲存</button>
      <button>發佈</button>
    </el-header>
       
    <edit-index></edit-index>
    <edit-live-stream></edit-live-stream>
    <edit-ePlay></edit-ePlay>
    <edit-preferential></edit-preferential>
    <edit-fishing></edit-fishing>
    <edit-fishing></edit-fishing>
    <edit-vip></edit-vip>
    <edit-qa></edit-qa>
    <edit-pay-option></edit-pay-option>
    <edit-partner></edit-partner>
    <edit-404></edit-404>
    <edit-join></edit-join>
    <edit-agent-reg></edit-agent-reg>
    <edit-forgot></edit-forgot>

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
import EditIndex from "~/components/EditIndex";
import EditLiveStream from "~/components/EditLiveStream";
import EditEPlay from "~/components/EditEPlay";
import EditPreferential from "~/components/EditPreferential";
import EditFishing from "~/components/EditFishing";
import EditVip from "~/components/EditVip";
import EditQa from "~/components/EditQa";
import EditPayOption from "~/components/EditPayOption";
import EditPartner from "~/components/EditPartner";
import Edit404 from "~/components/Edit404";
import EditJoin from "~/components/EditJoin";
import EditAgentReg from "~/components/EditAgentReg";
import EditForgot from "~/components/EditForgot";

export default {
  components: {
    EditIndex,
    EditLiveStream,
    EditEPlay,
    EditPreferential,
    EditFishing,
    EditVip,
    EditQa,
    EditPayOption,
    EditPartner,
    Edit404,
    EditJoin,
    EditAgentReg,
    EditForgot
  },
  data() {
    return {
      activeName: 'first',
      activeVersion: 'web',
      value2: '',
      isPreview: true
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
    }
  }
}
</script>
