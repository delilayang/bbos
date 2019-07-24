<template>
  <Fragment>
    <div class="tab-menu" v-if="isHome">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="頁面管理" name="first">
          <div class="page-management">
            <ul>
              <li>LOGO</li>
              <li>頁首導航列</li>
              <li>頁尾導航列</li>
              <li>橫幅</li>
              <li>輪播特效</li>
              <li>跑馬燈</li>
              <li>內容</li>
              <li>頁尾</li>
              <li>新增區塊</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="系統設置" name="second">
          <div class="system-setting">
            <ul>
              <li>排版</li>
              <li>字型</li>
              <li>顏色</li>
              <li>社群媒體</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="浮動圖" name="third">
          <div class="floating-img">
            <ul>
              <li>浮動圖設定</li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>    
    </div>

    <div class="tab-menu" v-if="isLiveStream"><p>視訊直播編輯區</p></div>
    <div class="tab-menu" v-if="isEPlay"><p>電子遊藝編輯區</p></div>
    <div class="tab-menu" v-if="isPreferential"><p>優惠活動編輯區</p></div>
    <div class="tab-menu" v-if="isFishing"><p>捕魚大廳編輯區</p></div>
    <div class="tab-menu" v-if="isVip"><p>VIP編輯區</p></div>
    <div class="tab-menu" v-if="isQA"><p>常見問題編輯區</p></div>
    <div class="tab-menu" v-if="isPayOption"><p>支付選項編輯區</p></div>
    <div class="tab-menu" v-if="isPartner"><p>合作夥伴編輯區</p></div>
    <div class="tab-menu" v-if="is404"><p>404編輯區</p></div>
    <div class="tab-menu" v-if="isJoin"><p>加入會員編輯區</p></div>
    <div class="tab-menu" v-if="isAgentReg"><p>代理註冊編輯區</p></div>
    <div class="tab-menu" v-if="isForgot"><p>忘記密碼編輯區</p></div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapGetters } from 'vuex';

export default {
  components: {
    Fragment
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  computed: {
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
    handleClick(tab, event) {
      
    },
  }
}
</script>

<style>

</style>
