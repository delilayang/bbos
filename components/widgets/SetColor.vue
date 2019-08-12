<template>
    <div class="set-color">
        <div class="block">
            <strong><h4>輸入框背景顏色</h4></strong>
            <el-color-picker v-model="color1"></el-color-picker>
            <strong><h4>TOP BAR背景顏色</h4></strong>
            <el-color-picker v-model="color2"></el-color-picker>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color1: '#555',
            color2: '#409EFF'
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
