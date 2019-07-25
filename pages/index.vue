<template>
  <el-container style="height: 100vh; border: 1px solid #eee;">
  <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
    <el-header style="height: 40px;">
      <button>捨棄當前編輯</button>
      <button>儲存</button>
      <button>發佈</button>
    </el-header>
    
    <transition name="fade">
    <div class="side-content main" v-if="isLayer1">
      <el-select v-model="page" placeholder="請選擇頁面" @change="mainSelect">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <div class="tab-menu" v-if="isHome">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="頁面管理" name="first">
            <div class="page-management">
              <ul>
                <li>
                  <span>LOGO</span>
                </li>
                <li>
                  <span>頁首導航列</span>
                  <el-button round class="btn-setting" @click="showSetting">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
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
      <!-- <tab-menu></tab-menu> -->
    </div>
    </transition>
    
    <transition name="fade">
    <div class="side-content setting" v-if="isLayer2">
      <ul>
        <li>
          <el-button round class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
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
    </transition> 

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
      isLayer1: true,
      isLayer2: false
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
    showSetting() {
      if(this.isLayer2 = !this.isLayer2) {
        this.isLayer1 = false;
      };
    },
    goBack() {
      if(this.isLayer1 = !this.isLayer1) {
        this.isLayer2 = false;
      }
    },
    toggle() {
      this.isPreview = !this.isPreview;
    },
    mainSelect(val) {
      this.$store.commit("main/updateSelect", { value: val });
    }
  },
  }

</script>
