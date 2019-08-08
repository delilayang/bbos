<template>
    <div class="set-border">
        <strong><h4>輸入框背景顏色</h4></strong>
        <div class="block">
            <el-color-picker v-model="color1"></el-color-picker>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color1: '#409EFF'
        }
    }
}
</script>
<style lang="scss">
.el-color-picker {
    .el-color-picker__trigger {
        width: 180px;
    }
}
</style>
