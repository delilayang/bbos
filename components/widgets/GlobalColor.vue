<template>
    <div class="global-color">
        <div class="block">
            <strong><h4>文字</h4></strong>
            <div class="flex-row"><el-color-picker v-model="color1"></el-color-picker><span class="color-status">一般狀態</span></div>
            <div class="flex-row"><el-color-picker v-model="color2"></el-color-picker><span class="color-status">滑鼠移入</span></div>
            <div class="flex-row"><el-color-picker v-model="color3"></el-color-picker><span class="color-status">滑鼠點擊</span></div>
        </div>
        <div style="margin: 20px;"></div>
        <div class="block">
            <strong><h4>按鈕</h4></strong>
            <div class="flex-row"><el-color-picker v-model="color1"></el-color-picker><span class="color-status">一般狀態</span></div>
            <div class="flex-row"><el-color-picker v-model="color2"></el-color-picker><span class="color-status">滑鼠移入/點擊</span></div>
        </div>
        <div style="margin: 20px;"></div>
        <div class="block">
            <strong><h4>Body</h4></strong>
            <div class="flex-row"><el-color-picker v-model="color3"></el-color-picker><span class="color-status">背景色</span></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color1: '#ccc',
            color2: '#409EFF',
            color3: '#555'
        }
    }
}
</script>

