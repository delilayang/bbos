 <template>
 <div class="edit-home">
    <transition name="fade">
    <div class="side-content main" v-if="isLayer1">
      <el-select v-model="page" placeholder="請選擇頁面" @change="mainSelect">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <div class="tab-menu" v-if="isHome">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="頁面管理" name="first">
            <div class="page-management">
              <ul>
                <li>
                  <span>LOGO</span>
                  <el-tooltip class="item" effect="light" content="設定" placement="top">
                    <el-button round class="btn-setting" @click="SettingLogo">
                      <i class="el-icon-more"></i>
                    </el-button>
                  </el-tooltip>
                </li>
                <li>
                  <span>頁首導航列</span>
                  <el-button round class="btn-setting" @click="SettingHeadNav">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
                <li>
                  <span>頁尾導航列</span>
                  <el-button round class="btn-setting" @click="SettingFooterNav">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
                <draggable
                  :list="moveList"
                  :disabled="!enabled"
                  class="list-group"
                  ghost-class="ghost"
                  :move="checkMove"
                  @start="dragging = true"
                  @end="dragging = false"
                >
                  <li
                    class="list-group-item"
                    v-for="element in moveList"
                    :key="element.name"
                  >
                    {{ element.name }}
                    <el-button round class="btn-setting" @click="SettingBanner">
                      <i class="el-icon-more"></i>
                    </el-button>
                    <el-button round class="btn-setting" @click="SettingSlider">
                      <i class="el-icon-more"></i>
                    </el-button>
                    <el-button round class="btn-setting" @click="SettingMarquee">
                      <i class="el-icon-more"></i>
                    </el-button>
                    <el-button round class="btn-setting" @click="SettingContent">
                      <i class="el-icon-more"></i>
                    </el-button>
                  </li>
                </draggable>
                <li>
                  <span>頁尾</span>
                  <el-button round class="btn-setting" @click="SettingFooter">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
                <li>
                  <span>新增區塊</span>
                   <el-button round class="btn-setting" @click="add">
                    <i class="el-icon-plus"></i>
                  </el-button>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="系統設置" name="second">
            <div class="system-setting">
              <ul>
                <li>排版</li>
                <li>字型</li>
                <li>顏色</li>
                <li>社群媒體</li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="浮動圖" name="third">
            <div class="floating-img">
              <ul>
                <li>浮動圖設定</li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>    
      </div>
      
    </div>
    </transition>
    
    <transition name="fade">
    <div class="side-content setting" v-if="isHeadNav">
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
    </transition>

    <transition name="fade">
    <div class="side-content setting" v-if="isLOGO">
      <ul>
        <li>
          <el-button round class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>LOGO設定</span>
        </li>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">點擊上傳</el-button>
            <div slot="tip" class="el-upload__tip">只能上傳jpg/png文件，且不超過500kb</div>
          </el-upload>
      </ul>
    </div>
    </transition>

    <transition name="fade">
    <div class="side-content setting" v-if="isFooterNav">
      <ul>
        <li>
          <el-button round class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>頁尾導航列設定</span>
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
      </ul>
    </div>
    </transition>

    <transition name="fade">
    <div class="side-content setting" v-if="isFooter">
      <ul>
        <li>
          <el-button round class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>頁尾設定</span>
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
      </ul>
    </div>
    </transition>
</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import draggable from "vuedraggable";
let id = 1;
export default {
  display: "Simple",
  order: 0,
  components: {
    draggable
  },
  data() {
    return {
      activeName: 'first',
      page: '',
      isPreview: true,
      isLayer1: true,
      isLOGO: false,
      isHeadNav: false,
      isFooterNav: false,
      isBanner: false,
      isSlider: false,
      isMarquee: false,
      isContent: false,
      isFooter: false,
      //drag
      enabled: true,
      moveList: [
        { name: "橫幅", id: 0 },
        { name: "輪播特效", id: 1 },
        { name: "跑馬燈", id: 2 },
        { name: "內容", id: 3 }
      ],
      dragging: false,
      //Upload
      fileList: [
        {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
        {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ]
    }
  },
  computed: {
    ...mapState("main", ["locales", "options", "setting", "tabList"]),
    ...mapGetters("main", [
      "isHome",
      "isLiveStream",
      "isEPlay",
      "isPreferential",
      "isFishing",
      "isVip",
      "isQA",
      "isPayOption",
      "isPartner",
      "is404",
      "isJoin",
      "isAgentReg",
      "isForgot"
    ]),
    //drag
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    SettingLogo() {
      if(this.isLOGO = !this.isLOGO) {
        this.isLayer1 = false;
      };
    },
    SettingHeadNav() {
      if(this.isHeadNav = !this.isHeadNav) {
        this.isLayer1 = false;
      };
    },
    SettingFooterNav() {
      if(this.isFooterNav = !this.isFooterNav) {
        this.isLayer1 = false;
      };
    },
    SettingBanner() {
      if(this.isBanner = !this.isBanner) {
        this.isLayer1 = false;
      };
    },
    SettingSlider() {
      if(this.isSlider = !this.isSlider) {
        this.isLayer1 = false;
      };
    },
    SettingMarquee() {
      if(this.isMarquee = !this.isMarquee) {
        this.isLayer1 = false;
      };
    },
    SettingContent() {
      if(this.isContent = !this.isContent) {
        this.isLayer1 = false;
      };
    },

    SettingFooter() {
      if(this.isFooter = !this.isFooter) {
        this.isLayer1 = false;
      };
    },
    goBack() {
      if(this.isLayer1 = !this.isLayer1) {
        this.isLOGO = false;
        this.isHeadNav = false;
        this.isFooterNav = false;
        this.isBanner = false;
        this.isSlider = false;
        this.isMarquee = false;
        this.isContent = false;
        this.isFooter = false;
      }
    },
    mainSelect(val) {
      this.$store.commit("main/updateSelect", { value: val });
    },
    handleClick() {},
    //drag
    add: function() {
      this.moveList.push({ name: "新區塊" + id, id: id++ });
    },
    replace: function() {
      this.moveList = [{ name: "移除區塊", id: id++ }];
    },
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    //Upload
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>
 
 