<template>
<div class="footer-nav">
    <el-row>
        <el-col>
            <div class="grid-content">
                <nav>
                    <router-link to="">VIP</router-link> |
                    <router-link to="">常見問題</router-link> |
                    <router-link to="">支付選項</router-link> |
                    <router-link to="">合作夥伴</router-link>
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
.footer-nav {
    .el-row {
        background: #555; 
        margin-bottom: 0;
        a {
          font-size: 10px;
        }
    }
}
nav {
    display: flex;
    justify-content:center;
}
</style>
