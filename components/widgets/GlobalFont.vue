<template>
<div class="global-font">
    <el-select v-model="value" placeholder="請選擇字型">
        <el-option
            v-for="item in fontList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
    data() {
        return {
            value: ''
        }
    },
    computed: {
        ...mapState("main", ["fontList"])
    }
}
</script>