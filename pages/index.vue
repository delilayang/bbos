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

      <div class="tab-menu" v-if="isSelected1">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="tab in tabList"
            :key="tab.value"
            :label="tab.label"
            :name="tab.name">
          </el-tab-pane>
        </el-tabs>
        
        <div class="page-management" v-if="isShow1">
          <ul>
            <li>
              <span>LOGO</span>
            </li>
            <li>
              <span>頁首導航列</span>
              <el-button round class="btn btn-setting"><i class="el-icon-more"></i></el-button>
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
        <div class="system-setting" v-if="isShow2">
          <ul>
            <li>排版</li>
            <li>字型</li>
            <li>顏色</li>
            <li>社群媒體</li>
          </ul>
        </div>
        <div class="floating-img" v-if="isShow3">
          <ul>
            <li>浮動圖設定</li>
          </ul>
        </div>
      </div>

      <div class="tab-menu" v-if="isSelected2"><p>視訊直播編輯區</p></div>
      <div class="tab-menu" v-if="isSelected3"><p>電子遊藝編輯區</p></div>
      <div class="tab-menu" v-if="isSelected4"><p>優惠活動編輯區</p></div>
      <div class="tab-menu" v-if="isSelected5"><p>捕魚大廳編輯區</p></div>
      <div class="tab-menu" v-if="isSelected6"><p>VIP編輯區</p></div>
      <div class="tab-menu" v-if="isSelected7"><p>常見問題編輯區</p></div>
      <div class="tab-menu" v-if="isSelected8"><p>支付選項編輯區</p></div>
      <div class="tab-menu" v-if="isSelected9"><p>合作夥伴編輯區</p></div>
      <div class="tab-menu" v-if="isSelected10"><p>404編輯區</p></div>
      <div class="tab-menu" v-if="isSelected11"><p>加入會員編輯區</p></div>
      <div class="tab-menu" v-if="isSelected12"><p>代理註冊編輯區</p></div>
      <div class="tab-menu" v-if="isSelected13"><p>忘記密碼編輯區</p></div>

      <el-select class="other-setting" v-model="value2" placeholder="其他設定">
        <el-option
          v-for="list in setting"
          :key="list.value"
          :label="list.label"
          :value="list.value">
        </el-option>
      </el-select>
    </div>

    <div class="side-content-setting">
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
        <div class="web-preview index" v-if="isSelected1">
          <span>首頁 Web-Preview</span>
          <h2>{{ $t("hello123") }}</h2>
          <h2>{{ $t("bye123")}}</h2>
          <p>{{ $tc('car') }}</p>
          <p>{{ $tc('car', 10, { count: 10}) }}</p>
        </div>
        <div class="web-preview live" v-if="isSelected2"><span>視訊直播 Web-Preview</span></div>
        <div class="web-preview game" v-if="isSelected3"><span>電子遊藝 Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected4"><span>優惠活動 Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected5"><span>捕魚大廳 Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected6"><span>VIP Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected7"><span>常見問題 Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected8"><span>支付選項 Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected9"><span>合作夥伴 Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected10"><span>404 Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected11"><span>加入會員 Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected12"><span>代理註冊 Web-Preview</span></div>
        <div class="web-preview" v-if="isSelected13"><span>忘記密碼 Web-Preview</span></div>
      </div>
      <div class="mobile-preview" v-else></div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import { mapState } from "vuex";
export default {
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
      isShow1: true,
      isShow2: false,
      isShow3: false,
      isSelected1: true,
      isSelected2: false,
      isSelected3: false,
      isSelected4: false,
      isSelected5: false,
      isSelected6: false,
      isSelected7: false,
      isSelected8: false,
      isSelected9: false,
      isSelected10: false,
      isSelected11: false,
      isSelected12: false,
      isSelected13: false
    }
  },
  methods: {
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
      switch(val) {
        case "opt1": //首頁
          this.isSelected1 = true;
          this.isSelected2 = false;
          this.isSelected3 = false;
          this.isSelected4 = false;
          this.isSelected5 = false;
          this.isSelected6 = false;
          this.isSelected7 = false;
          this.isSelected8 = false;
          this.isSelected9 = false;
          this.isSelected10 = false;
          this.isSelected11 = false;
          this.isSelected12 = false;
          this.isSelected13 = false;
          break;
        case "opt2": //視訊直播
          this.isSelected1 = false;
          this.isSelected2 = true;
          this.isSelected3 = false;
          this.isSelected4 = false;
          this.isSelected5 = false;
          this.isSelected6 = false;
          this.isSelected7 = false;
          this.isSelected8 = false;
          this.isSelected9 = false;
          this.isSelected10 = false;
          this.isSelected11 = false;
          this.isSelected12 = false;
          this.isSelected13 = false;
          break;
        case "opt3": //電子遊藝
          this.isSelected1 = false;
          this.isSelected2 = false;
          this.isSelected3 = true;
          this.isSelected4 = false;
          this.isSelected5 = false;
          this.isSelected6 = false;
          this.isSelected7 = false;
          this.isSelected8 = false;
          this.isSelected9 = false;
          this.isSelected10 = false;
          this.isSelected11 = false;
          this.isSelected12 = false;
          this.isSelected13 = false;
          break;
      }
    }
  },
  computed: {
    ...mapState("main", ["langs", "options", "setting", "tabList"])
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

  ul {
    list-style: none;
    padding-left: 0;
    li {
      padding: 10px;
      border-bottom: 1px solid #DCDFE6;
      display: flex;
      justify-content: flex-start;
      position: relative;
      .el-button {
        top: 0;
        position: absolute;
        background: transparent;
        border: 0;
        padding: 0;
        &.btn-setting {
          right: 0;
        }
        &.btn-back {
          left: 0;
        }
      }
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

.el-icon-more {
  transform:rotate(90deg);
}

</style>
