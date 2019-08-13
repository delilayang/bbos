<template>
    <div class="global-social">
        <strong><h4>帳號連結</h4></strong>
        <el-form ref="form" :model="form">
          <div class="flex-row">
            <i class="iconfont icon-line"></i>
            <el-form-item label="">
              <el-input v-model="form.name1" placeholder="https://"></el-input>
            </el-form-item>
          </div>
          <div class="flex-row">
             <i class="iconfont icon-blogger"></i>
             <el-form-item label="">
              <el-input v-model="form.name2" placeholder="https://"></el-input>
            </el-form-item>
          </div>
          <div class="flex-row">
            <i class="iconfont icon-twitterlogo"></i>
            <el-form-item label="">
              <el-input v-model="form.name3" placeholder="https://"></el-input>
            </el-form-item>
          </div>
          <div class="flex-row">
            <i class="iconfont icon-Instagram"></i>
            <el-form-item label="">
              <el-input v-model="form.name4" placeholder="https://"></el-input>
            </el-form-item>
          </div>
          <div class="flex-row">
            <i class="iconfont icon-telegram"></i>
            <el-form-item label="">
              <el-input v-model="form.name5" placeholder="https://"></el-input>
            </el-form-item>
          </div>
          <div class="flex-row">
            <i class="iconfont icon-youtube-square"></i>
            <el-form-item label="">
              <el-input v-model="form.name6" placeholder="https://"></el-input>
            </el-form-item>
          </div>
        </el-form>
    </div>
</template>
<script>

export default {
    data() {
       return { 
           //view/view-off
           popoverContent: '顯示',
           form: {name1: '', name2: '', name3: '', name4: '', name5: '', name6: ''}
       }
    },
    methods: {
    }
}
</script>
<style lang="scss">
.el-form-item__content {
  margin-left: 10px;
}

</style>