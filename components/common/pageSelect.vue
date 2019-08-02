<template>
  <el-select v-model="page" placeholder="請選擇頁面" @change="mainSelect">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      page: ''
    }
  },
  computed: {
    ...mapState("main", ["options"])
  },
  methods: {
    mainSelect(val) {
      this.$store.commit("main/updateSelect", { value: val });
    },
  }
}
</script>
