<template>
<div class="other-setting">
    <el-select  v-model="value2" placeholder="其他設定">
        <el-option
          v-for="list in otherSetting"
          :key="list.value"
          :label="list.label"
          :value="list.value">
        </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      value2: ''
    }
  },
  computed: {
    ...mapState("main", ["otherSetting"])
  },
  methods: {
    mainSelect(val) {
      this.$store.commit("main/updateSelect", { value: val });
    }
  }
}
</script>
