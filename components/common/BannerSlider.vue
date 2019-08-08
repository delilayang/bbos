<template>
    <div class="banner-slider">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.el-carousel-item {
    text-align: center;
    h3 {
      margin-top: 50%;
    }
  }
</style>
