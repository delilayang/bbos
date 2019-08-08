<template>
    <div class="set-border">
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
