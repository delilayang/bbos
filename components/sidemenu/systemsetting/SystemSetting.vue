<template>
    <div class="system-setting">
        <ul>
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
import { mapState, mapGetters } from "vuex";
export default {
    data() {
        return {}
    },
    methods: {
        SettingFont() {},
        SettingColor() {},
        SettingSocialMedia() {},
        SettingSwitch(option) {
            switch(option) {
            //系統設置
            case "SettingFont": //字型  
                this.SettingFont()
                break
            case "SettingColor": //顏色
                this.SettingColor()
                break
            case "SettingSocialMedia": //社群媒體 
                this.SettingSocialMedia()
                break
            default:
                break
            } 
        }
    },
    computed: {
        ...mapState("main", ["systemSettingList"])
    }
}
</script>
<style lang="scss" scoped>

</style>
