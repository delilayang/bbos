<template>
    <div class="global-social">
      <strong><h4>帳號連結</h4></strong>
        <div class="flex-row" 
          v-for="(item) in globalSocialList" 
          :key="item.id">
          <i :class="item.class"></i>
          <input type="text" placeholder="https://">
          <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
              <el-button  class="btn-setting view" @click="showToggle(item)">
                <i :class="{'iconfont icon-view': item.visableStatus, 'iconfont icon-view_off': !item.visableStatus}"></i>                      
              </el-button>
          </el-tooltip>
        </div>
    </div>
</template>
<script>
import { navItem } from "~/utils/model.js";
import menuData from '~/data/menu.json'

export default {
  data() {
    return { 
      popoverContent: '顯示',
      globalSocialList: []
    }
  },
  created() {
    this.initData();
  },  
  methods: {
      initData() {
        if(this.globalSocialList.length == 0) {
          this.globalSocialList = menuData["globalSocialList"]
        }
      },
      showToggle(item) {
      if(typeof(item) === "object") {
        item.visableStatus = ! item.visableStatus;
      }
		}    
  }
}
</script>
<style lang="scss">
.el-form-item__content {
  margin-left: 10px;
}
</style>