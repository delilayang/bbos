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

            <!-- Logo Nav -->
            <logo-nav></logo-nav>
            
            <!--  (banner) 1 <= item <= 6  (carousel) -->
            <banner-slider></banner-slider>

            <!-- 跑馬燈 -->
            <marquee-bar></marquee-bar>

            <!-- 內容區塊 -->
            <content-section></content-section>

            <!-- Footer Nav -->
            <footer-nav></footer-nav>

            <!-- Footer -->
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
import HeaderLogin from '~/components/common/HeaderLogin'
import LogoNav from '~/components/common/LogoNav'
import MarqueeBar from '~/components/common/MarqueeBar'
import BannerSlider from '~/components/common/BannerSlider'
import ContentSection from '~/components/common/ContentSection'
import FooterNav from '~/components/common/FooterNav'
export default {
    name: 'IndexPreview',
    data() {
        return {
        }
    },
    components: {
      HeaderLogin,
      MarqueeBar,
      LogoNav,
      BannerSlider,
      ContentSection,
      FooterNav
    }
}
</script>
<style lang="scss" scoped>
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
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
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
