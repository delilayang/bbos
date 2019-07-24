<template>
  <el-container style="height: 100vh; border: 1px solid #eee;">
  <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
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
  
    
    <el-select v-model="value2" placeholder="其他設定">
      <el-option
        v-for="list in setting"
        :key="list.value"
        :label="list.label"
        :value="list.value">
      </el-option>
    </el-select>
  </el-aside>
  
  <el-container>
    <el-header style="height: 30px;">
      <button @click="toggle"><i class="el-icon-monitor"></i></button>
      <button @click="toggle"><i class="el-icon-mobile-phone"></i></button>
    </el-header>
    
    <el-main>
      <div class="web-preview" v-if="isPreview"></div>
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
      // value: '',
      value2: '',
      isPreview: true,
      isShow1: true,
      isShow2: false,
      isShow3: false,
      isSelected1: true,
      isSelected2: false,
      isSelected3: false
    }
  },
  methods: {
    handleClick(tab) {
      if(tab.name == "first") {
        this.isShow1 = true;
        this.isShow2 = false;
        this.isShow3 = false;
      } else if(tab.name == "second") {
        this.isShow1 = false;
        this.isShow2 = true;
        this.isShow3 = false;
      } else if(tab.name == "third") {
        this.isShow1 = false;
        this.isShow2 = false;
        this.isShow3 = true;
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
          break;
        case "opt2": //視訊直播
          this.isSelected1 = false;
          this.isSelected2 = true;
          this.isSelected3 = false;
          break;
        case "opt3": //電子遊藝
          this.isSelected1 = false;
          this.isSelected2 = false;
          this.isSelected3 = true;
          break;
      }
    }
  },
  computed: {
    ...mapState("main", ["options", "setting", "tabList"]),
    // posts() {
    //   return this.$store.state.posts.all
    // }
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
