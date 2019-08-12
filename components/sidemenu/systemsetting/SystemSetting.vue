<template>
    <div class="system-setting">
        <div v-if="isSystemSetting">
        <ul>
            <li
                class="list-group-item"
                v-for="element in systemSettingList"
                :key="element.name">
                <span> {{ element.name }} </span>
                <div v-if="element.sysSettingSwitch === true">
                  <el-button class="btn-setting" @click="sysSettingSwitch(element.setPanel)">
                    <i class="el-icon-more"></i>
                  </el-button>
                </div>
            </li>
        </ul>
        </div>
        <transition name="fade">
            <div class="side-content setting" v-if="isFont">
                <ul>
                    <li>
                    <el-button class="btn-back" @click="goBack">
                        <i class="el-icon-arrow-left"></i>
                    </el-button>
                    <span>字型設定</span>
                    <global-font></global-font>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="fade">
            <div class="side-content setting" v-if="isColor">
                <ul>
                    <li>
                    <el-button  class="btn-back" @click="goBack">
                        <i class="el-icon-arrow-left"></i>
                    </el-button>
                    <span>顏色設定</span>
                    <global-color></global-color>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="fade">
            <div class="side-content setting" v-if="isSocialMedia">
                <ul>
                    <li>
                    <el-button  class="btn-back" @click="goBack">
                        <i class="el-icon-arrow-left"></i>
                    </el-button>
                    <span>社群媒體設定</span>
                    <global-socialmedia></global-socialmedia>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import GlobalFont from "~/components/widgets/GlobalFont";
import GlobalColor from "~/components/widgets/GlobalColor";
import GlobalSocialMedia from "~/components/widgets/GlobalSocialMedia";
export default {
    components: {
        GlobalFont,
        GlobalColor,
        GlobalSocialMedia
    },
    data() {
        return {
            isSystemSetting: true,
            isFont: false,
            isColor: false,
            isSocialMedia: false
        }
    },
    methods: {
        goBack() {
            if(this.isSystemSetting === false) {
                this.isFont = false;
                this.isColor = false;
                this.isSocialMedia = false;
            }
        },
        SettingFont() {
            if(this.isFont === true) {
                this.isSystemSetting = false;
            } else {
                this.isSystemSetting = true;
            }
        },
        SettingColor() {
            if(this.isColor === true) {
                this.isSystemSetting = false;
            } else {
                this.isSystemSetting = true;
            }
        },
        SettingSocialMedia() {
            if(this.isSocialMedia === true) {
                this.isSystemSetting = false;
            } else {
                this.isSystemSetting = true;
            }
        },
        sysSettingSwitch(option) {
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
