<template>
<Fragment>
    <div class="aside-main side-content" v-if="isLayer1">
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
</Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapState, mapGetters } from "vuex";
// import TabMenu from "./TabMenu";
export default {
  components: {
    Fragment,
    // TabMenu
  },
  data() {
    return {
      activeName: 'first',
      page: '',
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
    mainSelect(val) {
      this.$store.commit("main/updateSelect", { value: val });
    },
    handleClick() {
      
    }
  },
  }
</script>
<style lang="scss" scoped>

</style>
