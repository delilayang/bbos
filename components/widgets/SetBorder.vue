<template>
    <div class="set-border">
        <el-input-number v-model="num" @change="handleChange" :min="0" :max="50" label="描述文字"></el-input-number>
        <span>px</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // TopBar input border
            num: 4
        }
    },
    methods: {
        //Change TopBar Input Border
        handleChange(value) {
            console.log(value);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
