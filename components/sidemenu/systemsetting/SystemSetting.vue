<template>
    <div class="system-setting">
        <ul>
            <!-- <li>字型</li>
            <li>顏色</li>
            <li>社群媒體</li> -->
            <li
                class="list-group-item"
                v-for="(element) in systemSettingList"
                :key="element.name">
                <span> {{ element.name }} </span>
                <div v-if="element.settingSwitch === true">
                  <el-button  class="btn-setting" @click="SettingSwitch(element.setPanel)">
                    <i class="el-icon-more"></i>
                  </el-button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>

</style>
