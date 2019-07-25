<template>
    <Fragment>
    <div class="aside-setting side-content" v-if="isLayer2">
      <ul>
        <li>
          <el-button round class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>頁首導航列設定</span>
        </li>
        <li>
          <span>首頁</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>視訊直播</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>電子遊藝</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>捕魚大廳</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>優惠活動</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
        <li>
          <span>新增頁面</span>
          <el-button round class="btn-setting"><i class="el-icon-more"></i></el-button>
        </li>
      </ul>
    </div>
    </Fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
export default {
    data() {
        return {
            isLayer1: true,
            isLayer2: false
        }
    },
    methods: {
        goBack() {
            if(this.isLayer1 = !this.isLayer1) {
                this.isLayer2 = false;
            }
        },
    },
    components: {
        Fragment
    }
}
</script>
<style lang="scss" scoped>

</style>
