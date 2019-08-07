<template>
    <div class="index-preview">
        <el-container>
            <!-- <span>首頁 Web-Preview</span>
          <h2>{{ $t("hello123") }}</h2>
          <h2>{{ $t("bye123")}}</h2>
          <p>{{ $tc('car') }}</p>
          <p>{{ $tc('car', 10, { count: 10}) }}</p> -->

            <!-- Top Bar -->
            <header-login></header-login>

            <!-- LOGO, Nav -->
            <el-row :gutter="20" style="margin-bottom: 0; background: #4f85ab;">
                <el-col :span="6">
                    <div class="grid-content">
                       <img src="" class="logo" width="100%" height="80">
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="grid-content" style="display: flex; justify-content: flex-end;">
                        <nav style="margin: 2em;">
                            <router-link to="">首頁</router-link> |
                            <router-link to="">視訊直播</router-link> |
                            <router-link to="">電子遊藝</router-link> |
                            <router-link to="">捕魚大廳</router-link> |
                            <router-link to="">優惠活動</router-link>
                        </nav>
                    </div>
                </el-col>
            </el-row>
            
            <!--  (banner) 1 <= item <= 6  (carousel) -->
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 6" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>

            <!-- 跑馬燈 -->
            <marquee-bar></marquee-bar>

            <!-- 內容區塊 -->
            <el-main>
            <el-row :gutter="20">
                <el-col :span="6" v-for="item in imgTxt" :key="item.title">
                <div class="grid-content">
                    <div class="block" >
                        <el-image :src="item.url"></el-image>
                        <strong><h4>{{item.title}}</h4></strong>
                        <p>{{item.content}}</p>
                    </div>
                </div>
                </el-col>
            </el-row>
            </el-main>

            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
import HeaderLogin from '~/components/common/HeaderLogin'
import MarqueeBar from '~/components/common/MarqueeBar'
export default {
    name: 'IndexPreview',
    data() {
        return {
            imgTxt: [{
                title: '標題1', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題2', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題3', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題4', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題5', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題6', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題7', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題8', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }]
        }
    },
    components: {
        HeaderLogin,
        MarqueeBar
    }
}
</script>
<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-image {
    width: 100%; 
    height: 100%;
  }  
  .el-carousel-item {
    text-align: center;
    h3 {
      margin-top: 50%;
    }
  }
</style>
