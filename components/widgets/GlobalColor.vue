<template>
    <div class="global-color">
        <div class="block">
            <strong><h4>文字</h4></strong>
            <el-color-picker v-model="color1"></el-color-picker><span>一般狀態</span>
            <el-color-picker v-model="color2"></el-color-picker><span>滑鼠移入</span>
            <el-color-picker v-model="color3"></el-color-picker><span>滑鼠點擊</span>
            <strong><h4>按鈕</h4></strong>
            <el-color-picker v-model="color2"></el-color-picker>
            <strong><h4>Body</h4></strong>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color1: '#555',
            color2: '#409EFF',
            color3: '#ccc'
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
