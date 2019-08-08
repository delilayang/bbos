<template>
    <div class="logo-nav">
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>
