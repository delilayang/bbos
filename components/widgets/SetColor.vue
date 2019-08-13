<template>
    <div class="set-color">
        <strong><h4>輸入框</h4></strong>
        <div class="flex-row"><el-color-picker v-model="color1"></el-color-picker><span class="color-status">背景色</span></div>
        <div style="margin: 20px;"></div>
        <strong><h4>TOP BAR</h4></strong>
        <div class="flex-row"><el-color-picker v-model="color2"></el-color-picker><span class="color-status">背景色</span></div>       
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