 <template>
 <div class="edit-home">
<div class="row">
    <!-- <div class="col-2">
      <div class="form-group">
        <div
          class="btn-group-vertical buttons"
          role="group"
          aria-label="Basic example"
        >
          <button class="btn btn-secondary" @click="add">Add</button>
          <button class="btn btn-secondary" @click="replace">Replace</button>
        </div>

        <div class="form-check">
          <input
            id="disabled"
            type="checkbox"
            v-model="enabled"
            class="form-check-input"
          />
          <label class="form-check-label" for="disabled">DnD enabled</label>
        </div>
      </div>
    </div> -->

    <div>
      <!-- <h3>Draggable {{ draggingInfo }}</h3> -->

      <!-- <draggable
        :list="list"
        :disabled="!enabled"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <div
          class="list-group-item"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable> -->
    </div>

    <!-- <rawDisplayer class="col-3" :value="list" title="List" /> -->
  </div>



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
                </li>
                <li>
                  <span>頁首導航列</span>
                  <el-button round class="btn-setting" @click="showSetting">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
                <li>頁尾導航列</li>
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
                  </li>
                </draggable>
                <li>頁尾</li>
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
    <div class="side-content setting" v-if="isLayer2">
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
      isLayer2: false,
      //drag
      enabled: true,
      moveList: [
        { name: "橫幅", id: 0 },
        { name: "輪播特效", id: 1 },
        { name: "跑馬燈", id: 2 },
        { name: "內容", id: 3 }
      ],
      dragging: false
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
    showSetting() {
      if(this.isLayer2 = !this.isLayer2) {
        this.isLayer1 = false;
      };
    },
    goBack() {
      if(this.isLayer1 = !this.isLayer1) {
        this.isLayer2 = false;
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
    }
  }
}
</script>
<style lang="scss" scoped>
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: .5;
  background: #c8ebfb;
}
.list-group {
  margin: 10px 0;
  box-shadow: 0 0 1px rgba(0,0,0, .2);
  background: #fff;
}

// .list-group-item {
//   border: 1px solid #ddd;
//   background: #fff;
//   &:hover{border-right: 4px solid rgb(55, 88, 164);}
// }
</style>

 
 