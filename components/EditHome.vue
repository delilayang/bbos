 <template>
 <div class="edit-home">
   <!-- layer1 -->
    <transition name="fade">
    <div class="side-content main" v-if="isLayer1">

      <page-select></page-select>

      <div class="tab-menu" v-if="isHome">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="頁面管理" name="first">
            <div class="page-management">
              <ul>
                <li>
                  <span>LOGO</span>
                  <el-tooltip class="item" effect="light" content="設定" placement="top">
                    <el-button  class="btn-setting" @click="SettingLogo">
                      <i class="el-icon-more"></i>
                    </el-button>
                  </el-tooltip>
                </li>
                <li>
                  <span>頁首導航列</span>
                  <el-button  class="btn-setting" @click="SettingHeadNav">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
                <li>
                  <span>頁尾導航列</span>
                  <el-button  class="btn-setting" @click="SettingFooterNav">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
                <draggable class="list-group" :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false">
                <li>
                  <span>橫幅</span>
                  <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
                    <el-button  class="btn-setting view" @click="showToggle">
                    <i :class="{'iconfont icon-view': isView, 'iconfont icon-view_off': !isView}"></i>
                    </el-button>
                  </el-tooltip>
                  <el-button  class="btn-setting" @click="SettingBanner">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
                <li>
                  <span>輪播特效</span>
                  <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
                    <el-button  class="btn-setting view" @click="showToggle">
                    <i :class="{'iconfont icon-view': isView, 'iconfont icon-view_off': !isView}"></i>
                    </el-button>
                  </el-tooltip>
                  <el-button  class="btn-setting" @click="SettingSlider">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
                <li>
                  <span>跑馬燈</span>
                </li>
                <li>
                  <span>內容</span>
                  <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
                    <el-button  class="btn-setting view" @click="showToggle">
                    <i :class="{'iconfont icon-view': isView, 'iconfont icon-view_off': !isView}"></i>
                    </el-button>
                  </el-tooltip>
                  <el-button  class="btn-setting" @click="SettingContent">
                    <i class="el-icon-more"></i>
                  </el-button>
                </li>
                </draggable>
                <li>
                  <span>頁尾</span>
                  <el-button  class="btn-setting" @click="SettingFooter">
                    <i class="el-icon-more"></i>
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
  <!-- layer2 -->
    <transition name="fade">
    <div class="side-content setting" v-if="isLOGO">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack">
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
    <div class="side-content setting" v-if="isHeadNav">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>頁首導航列設定</span>
        </li>
        <draggable class="layer2-draglist">
          <li>
            <span>首頁</span>
            <el-tooltip class="item" effect="light" content="設定" placement="top">
              <el-button  class="btn-setting" @click="SettingHome">
                <i class="el-icon-more"></i>
              </el-button>
            </el-tooltip>
          </li>
          <li>
            <span>視訊直播</span>
            <el-button  class="btn-setting" @click="SettingLiveStream">
              <i class="el-icon-more"></i>
            </el-button>
            <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
              <el-button  class="btn-setting view" @click="showToggle">
              <i :class="{'iconfont icon-view': isView, 'iconfont icon-view_off': !isView}"></i>
              </el-button>
            </el-tooltip>
          </li>
          <li>
            <span>電子遊藝</span>
            <el-button  class="btn-setting" @click="SettingEPlay">
              <i class="el-icon-more"></i>
            </el-button>
            <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
              <el-button  class="btn-setting view" @click="showToggle">
              <i :class="{'iconfont icon-view': isView, 'iconfont icon-view_off': !isView}"></i>
              </el-button>
            </el-tooltip>
          </li>
          <li>
            <span>捕魚大廳</span>
            <el-button  class="btn-setting" @click="SettingFishing">
              <i class="el-icon-more"></i>
            </el-button>
            <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
              <el-button  class="btn-setting view" @click="showToggle">
              <i :class="{'iconfont icon-view': isView, 'iconfont icon-view_off': !isView}"></i>
              </el-button>
            </el-tooltip>
          </li>
          <li>
            <span>優惠活動</span>
            <el-tooltip class="item" effect="light" content="刪除" placement="top" @click="remove">
              <el-button  class="btn-setting delete">
                <i class="el-icon-delete"></i>
              </el-button>
            </el-tooltip>
            <el-button  class="btn-setting" @click="SettingPreferential">
              <i class="el-icon-more"></i>
            </el-button>
          </li>
        </draggable>
        <li>
          <span>新增頁面</span>
          <el-button  class="btn-setting" @click="add">
            <i class="el-icon-plus"></i>
          </el-button>
        </li>
      </ul>
    </div>
    </transition>

    <transition name="fade">
    <div class="side-content setting" v-if="isFooterNav">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>頁尾導航列設定</span>
        </li>
        <draggable
          :list="footerNavList"
          :disabled="!enabled"
          class="layer2-draglist"
          ghost-class="ghost"
          @start="dragging = true"
          @end="dragging = false"
        >
          <li
            class="list-group-item"
            v-for="(element, index) in footerNavList"
            :key="element.name">
            {{ element.name }}
             <el-tooltip class="item" effect="light" content="刪除" placement="top">
              <el-button  class="btn-setting delete" @click="remove(index)">
                <i class="el-icon-delete"></i>
              </el-button>
            </el-tooltip>
            <el-button  class="btn-setting" @click="SettingVip">
              <i class="el-icon-more"></i>
            </el-button>
          </li>
      </draggable>
      <li>
        <span>新增頁面</span>
        <el-button  class="btn-setting" @click="add2">
          <i class="el-icon-plus"></i>
        </el-button>
      </li>
      </ul>
    </div>
    </transition>

    <transition name="fade">
    <div class="side-content setting" v-if="isFooter">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>頁尾設定</span>
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
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          autosize
          placeholder="請輸入內容"
          v-model="textarea1">
        </el-input>
      </ul>
    </div>
    </transition>

    <transition name="fade">
    <div class="side-content setting" v-if="isBanner">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>橫幅設定</span>
        </li>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">點擊上傳</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上傳pg/png文件，且不超過500kb<br>
            檔案尺寸: 1920*400px</div>
        </el-upload>
      </ul>
    </div>
    </transition>
    <transition name="fade">
    <div class="side-content setting" v-if="isSlider">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>輪播特效設定</span>
        </li>
        <el-upload-sortable></el-upload-sortable>
        
      </ul>
    </div>
    </transition>
     <transition name="fade">
    <div class="side-content setting" v-if="isContent">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>內容設定</span>
        </li>
        <li>
          <span>新增區塊</span>
          <el-button  class="btn-setting" @click="add">
            <i class="el-icon-plus"></i>
          </el-button>
        </li>
        <li>
          <span>刪除區塊</span>
          <el-button  class="btn-setting" @click="add">
            <i class="el-icon-minus"></i>
          </el-button>
        </li>
        
      </ul>
    </div>
    </transition>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="100%"
      :before-close="handleClose">
      <span>編輯區塊</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  <!-- layer3 -->
    <transition name="fade">
    <div class="side-content setting" v-if="isHomeSetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>首頁設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input1" clearable></el-input>
      </ul>
    </div>
    </transition>
    <transition name="fade">
    <div class="side-content setting" v-if="isLiveStreamSetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>視訊直播設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input2" clearable></el-input>
      </ul>
    </div>
    </transition>
    <transition name="fade">
    <div class="side-content setting" v-if="isEPlaySetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>電子遊藝設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input3" clearable></el-input>
      </ul>
    </div>
    </transition>
    <transition name="fade">
    <div class="side-content setting" v-if="isFishingSetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>捕魚遊戲設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input4" clearable></el-input>
      </ul>
    </div>
    </transition>
    <transition name="fade">
    <div class="side-content setting" v-if="isPreferentialSetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>優惠活動設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input5" clearable></el-input>
      </ul>
    </div>
    </transition>
    <transition name="fade">
    <div class="side-content setting" v-if="isVipSetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>VIP設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input6" clearable></el-input>
      </ul>
    </div>
    </transition>
    <transition name="fade">
    <div class="side-content setting" v-if="isQASetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>常見問題設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input7" clearable></el-input>
      </ul>
    </div>
    </transition>
    <transition name="fade">
    <div class="side-content setting" v-if="isPayOptionSetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>支付選項設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input8" clearable></el-input>
      </ul>
    </div>
    </transition>
    <transition name="fade">
    <div class="side-content setting" v-if="isPartnerSetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>合作夥伴設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input9" clearable></el-input>
      </ul>
    </div>
    </transition>
     <transition name="fade">
    <div class="side-content setting" v-if="isAgentRegSetting">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack2">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>代理註冊設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input10" clearable></el-input>
      </ul>
    </div>
    </transition>
</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import draggable from "vuedraggable";
import ElUploadSortable from "./ElUploadSortable";
import PageSelect from "./common/pageSelect";
let id = 1;

export default {
  display: "Simple",
  order: 0,
  components: {
    PageSelect,
    draggable,
    ElUploadSortable
  },
  data() {
    return {
      activeName: 'first',
      page: '',
      //Edit content section
      dialogVisible: false, 
      //Footer Copyright
      textarea1: 'Copyright © NBB GLOBAL Reserved',
      //Preview Switch
      isPreview: true,
      //view/view-off
      isView: true,
      popoverContent: '顯示',
      //layer1
      isLayer1: true,
      //layer2
      isLOGO: false,
      isHeadNav: false,
      isFooterNav: false,
      isBanner: false,
      isSlider: false,
      isMarquee: false,
      isContent: false,
      isFooter: false,
      //layer3
      isBannerSetting: false,
      isHomeSetting: false,
      isLiveStreamSetting: false,
      isEPlaySetting: false,
      isFishingSetting: false,
      isPreferentialSetting: false,
      isVipSetting: false,
      isQASetting: false,
      isPayOptionSetting: false,
      isPartnerSetting: false,
      isAgentRegSetting: false,
      //drag
      enabled: true,
      dragging: false,
      //input
      input1: '首頁',
      input2: '視訊直播',
      input3: '電子遊藝',
      input4: '捕魚遊戲',
      input5: '優惠活動',
      input6: 'VIP',
      input7: '常見問題',
      input8: '支付選項',
      input9: '合作夥伴',
      input10: '代理註冊',
      //頁面管理draggable
      moveList: [
        { name: "橫幅", id: 0 },
        { name: "輪播特效", id: 1 },
        { name: "跑馬燈", id: 2 },
        { name: "內容", id: 3 }
      ],
      //頁尾導航列list
      footerNavList: [
        { name: "VIP", id: 0 },
        { name: "常見問題", id: 1 },
        { name: "支付選項", id: 2 },
        { name: "合作夥伴", id: 3 },
        { name: "代理註冊", id: 4 }
      ]
    }
  },
  computed: {
    ...mapState("main", ["locales", "setting", "tabList", "fileList"]),
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
    //view/view-off
    showToggle() {
			if(this.isView = !this.isView) {
          this.popoverContent = '顯示';
			} else {
          this.popoverContent = '隱藏';
			}
		},
    //layer2
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
    //layer3
    SettingHome() {
      if(this.isHomeSetting = !this.isHomeSetting) {
        this.isHeadNav = false;
      }
    },
    SettingLiveStream() {
      if(this.isLiveStreamSetting = !this.isLiveStreamSetting) {
       this.isHeadNav = false;
      }
    },
    SettingEPlay() {
      if(this.isEPlaySetting = !this.isEPlaySetting) {
        this.isHeadNav = false;
      }
    },
    SettingFishing() {
      if(this.isFishingSetting = !this.isFishingSetting) {
        this.isHeadNav = false;
      }
    },
    SettingPreferential() {
      if(this.isPreferentialSetting = !this.isPreferentialSetting) {
        this.isHeadNav = false;
      }
    },
    // FooterNavLayer() {
    //   if(this.isHomeSetting = !this.isHomeSetting) {
    //     this.isFooterNav = false;
    //   }
    //   else if(this.isQASetting = !this.isQASetting) {
    //     this.isFooterNav = false;
    //   }
    //   else if(this.isPayOptionSetting = !this.isPayOptionSetting) {
    //     this.isFooterNav = false;
    //   }
    //   else if(this.isPartnerSetting = !this.isPartnerSetting) {
    //     this.isFooterNav = false;
    //   }
    //   else if(this.isAgentRegSetting = !this.isAgentRegSetting) {
    //     this.isFooterNav = false;
    //   }
    // },
    SettingVip() {
      if(this.isHomeSetting = !this.isHomeSetting) {
        this.isFooterNav = false;
      }
    },
    SettingQA() {
      if(this.isQASetting = !this.isQASetting) {
        this.isFooterNav = false;
      }
    },
    SettingPayOption() {
      if(this.isPayOptionSetting = !this.isPayOptionSetting) {
        this.isFooterNav = false;
      }
    },
    SettingPartner() {
      if(this.isPartnerSetting = !this.isPartnerSetting) {
        this.isFooterNav = false;
      }
    },
    SettingAgentReg() {
      if(this.isAgentRegSetting = !this.isAgentRegSetting) {
        this.isFooterNav = false;
      }
    },
    //Back to layer1
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
    //Back to layer2
    goBack2() {
      if(this.isHeadNav = !this.isHeadNav) {
        this.isHomeSetting = false;
        this.isLiveStreamSetting = false;
        this.isEPlaySetting = false;
        this.isFishingSetting = false;
        this.isPreferentialSetting = false;
        this.isVipSetting = false;
        this.isQASetting = false;
        this.isPayOptionSetting = false;
        this.isPartnerSetting = false;
        this.isAgentRegSetting = false;
      }
    },
    mainSelect(val) {
      this.$store.commit("main/updateSelect", { value: val });
    },
    handleClick() {},
    //drag
    add() {
      this.moveList.push({ name: "新區塊" + id, id: id++ });
    },
    add2() {
      this.footerNavList.push({ name: "新頁面" + id, id: id++ });
    },
    replace: function() {
      this.moveList = [{ name: "移除區塊", id: id++ }];
    },
    remove(index) {
      this.$delete(this.footerNavList, index);
    },
    //Upload
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    //Edit content section
    handleClose(done) {
      this.$confirm('確認關閉?')
      .then(_ => {
        done();
      })
      .catch(_ => {});
    }
  }
}
</script>
 
 