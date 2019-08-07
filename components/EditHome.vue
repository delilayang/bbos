 <template>
 <div class="edit-home">
   <!-- layer1 -->
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
                    <el-button  class="btn-setting" @click="SettingLogo">
                      <i class="el-icon-more"></i>
                    </el-button>
                  </el-tooltip>
                </li>

                <li>
                  <span>TOP_Bar</span>
                  <el-tooltip class="item" effect="light" content="設定" placement="top">
                    <el-button  class="btn-setting">
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

                <!-- Vesper 新增/刪除 導航列功能 20190805 -->
                <draggable class="list-group" :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false">

                <li v-for="(item) in this.navItemList" :key="item.id">
                  <span>{{item.name}}</span>

                  <div v-if="item.visableSwitch === true">
                    <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
                      <el-button  class="btn-setting view" @click="showToggle">
                      <i :class="{'iconfont icon-view': isView, 'iconfont icon-view_off': !isView}"></i>
                      </el-button>
                    </el-tooltip>
                  </div>
                  <div v-if="item.settingSwitch === true">
                    <el-button  class="btn-setting" @click="SettingSwitch(item.setPanel)">
                      <i class="el-icon-more"></i>
                    </el-button>
                  </div>                  
                </li>

                </draggable>
                <!-- Vesper 新增/刪除 導航列功能 20190805 -->

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
    <div class="side-content setting" v-if="isTopBar">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>TOP BAR設定</span>
        </li>
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
        <!-- li>
          <span>新增頁面</span>
          <el-button  class="btn-setting" @click="add">
            <i class="el-icon-plus"></i>
          </el-button>
        </li -->

        <li>
          <span>新增/刪除 導航列功能</span>
          <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
          </el-tooltip>
          <el-button  class="btn-setting" @click="dialogNavItemFormVisible = true">
            <i class="el-icon-edit"></i>
          </el-button>
        </li>        
      </ul>

    <!-- Vesper 新增/刪除 導航列功能 20190805 -->
      <div style = "margin-top:8px;margin-left:8px;">        
        <el-dialog title="新增/刪除 導航列功能" :visible.sync="dialogNavItemFormVisible" :modal-append-to-body="false">

          <ul>
            <li style="text-align:left; ">
              <span>刪除 導航列功能</span>
            </li>

            <li v-for="(item) in this.navItemList" :key="item.id">
              <span>{{item.name}}</span>

              <div v-if="item.isDefine === false">
                <el-button  class="btn-setting" @click="navItemRemove(item.id)">
                  <i class="el-icon-delete"></i>
                </el-button>          
              </div>               
            </li>
          </ul>

          <!-- Vesper 處理不了 上面 li 的 style 問題 暫時做一個一樣的 -->
          <div style=" height:40px;background:#CDDDF3; text-align:center;padding-top: 10px;margin:10px 0px 10px 0px;">
            新增 導航列功能
          </div>

          <el-form :model="navItemForm" label-width="80px">
            <el-form-item  label="是否預設">
              <el-switch v-model="navItemForm.isDefine"></el-switch>
            </el-form-item>         
            <el-form-item label="功能名稱">
              <el-input v-model="navItemForm.name"></el-input>
            </el-form-item>
            <el-form-item label="可視按鈕">
              <el-switch v-model="navItemForm.visableSwitch"></el-switch>
            </el-form-item> 
            <el-form-item label="設定按鈕">
              <el-switch v-model="navItemForm.settingSwitch"></el-switch>
            </el-form-item> 
            <el-form-item label="設置面板">
              <el-input v-model="navItemForm.setPanel"></el-input>
            </el-form-item>                
          </el-form> 

          <div slot="footer" class="dialog-footer" >
            <el-button size="small" type="primary" @click="navItemAdd();">新增</el-button>
            <el-button size="small" type="warning" @click="navItemCancel();dialogNavItemFormVisible = false">取消</el-button>
            <el-button size="small" type="success" @click="navItemListSave();dialogNavItemFormVisible = false">儲存</el-button>            
          </div>
        </el-dialog>
      </div>    
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
        <li>
          <span>編輯區塊</span>
          <el-button  class="btn-setting" @click="dialogVisible = true">
            <i class="el-icon-edit-outline"></i>
          </el-button>
        </li>
      </ul>
    </div>  
    </transition>

    <!-- ↓ Vesper 圖文編輯功能 layout 20190806 -->
    <el-dialog
      title="編輯區塊"
      :visible.sync="dialogVisible"
      width="100%"
      :before-close="handleClose">
      
      <h3 style="margin-bottom:10px;font-size:16px;">圖片上傳說明</h3>
      <p style="margin-bottom:10px;font-size:16px;">檔案⼤大⼩小: ⼤大於500KB, ⼩小於2MB</p>

      <div style="margin-bottom:10px;">
      <el-row :gutter="10">
        <el-col :span="4">
          <div class="grid-content bg-purple-dark">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>          
          </div>
        </el-col>

        <el-col :span="20">
          <el-row><el-input placeholder="標題" style="margin-bottom:2px;"></el-input> </el-row>
          <el-row>
            <el-input
              type="textarea"
              :rows="6"
              placeholder="選擇與您風格和品牌故事相關的圖像和⽂文字。運⽤用⽂文字疊加讓客⼾戶更更加瞭解您的品牌。">
            </el-input>
          </el-row>
        </el-col>
      </el-row>      
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">確 定</el-button>
      </span>
    </el-dialog>
    <!-- ↑ Vesper 圖文編輯功能 layout 20190806 -->

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

//Vesper 新增 20190805
import { navItem } from "~/model.js";
import navItemList from '~/data/navItemList.json'

let id = 1;

export default {
  display: "Simple",
  order: 0,
  components: {
    draggable,
    ElUploadSortable,
  },
  data() {
    return {
      dialogVisible_navItemEdit: false, //Vesper 新增/刪除 導航列功能 20190805
      navItemForm:navItem.create(), //Vesper 新增/刪除 導航列功能 20190805
      dialogNavItemFormVisible:false, //Vesper 新增/刪除 導航列功能 20190805
      imageUrl: '', //Vesper 圖文編輯功能 layout 20190806
      activeName: 'first',
      page: '',
      //Edit content section pop-up
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
      isTopBar: false,
      isHeadNav: false,
      isFooterNav: false,
      isBanner: false,
      isSlider: false,
      isMarquee: false,
      isContent: false,
      isNavEdit:false,  //Vesper 新增/刪除 導航列功能 20190805
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
      navItemList:[],//Vesper 新增/刪除 導航列功能 20190805 看起來 跟 moveList 是一樣的東西 但在程式上 moveList 沒用到 但不確定能不能刪
      //頁尾導航列list
      footerNavList: [
        { name: "VIP", id: 0 },
        { name: "常見問題", id: 1 },
        { name: "支付選項", id: 2 },
        { name: "合作夥伴", id: 3 },
        { name: "代理註冊", id: 4 }
      ],
      parentmsg:''
    }
  },
  computed: {
    ...mapState("main", ["locales", "options", "setting", "tabList", "fileList"]),
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
  created(){
    this.initData(); //Vesper 新增/刪除 導航列功能 20190805
  },  
  methods: {
    initData(){
      if(this.navItemList.length == 0){
        this.navItemList = navItemList
        //console.log(this.navItemList)
      }
    },  
    navItemAdd(){
      //setp1:正式取得id
      var id = this.navItemList.length + 1;
      this.navItemForm.id = id

      //setp2:將 item push 到 navItemList 中
      this.navItemList.push(this.navItemForm)

      //setp3:將 navItemForm 初始化
      this.navItemForm = navItem.create()

      console.log(this.navItemList);
    },
    navItemCancel(){
      //將 navItemForm 初始化
      this.navItemForm = navItem.create()      
    },    
    navItemRemove(id){ //Vesper 新增/刪除 導航列功能 20190805
      this.navItemList.forEach(function(item, index, object) {
        if (item.id === id) {
          object.splice(index, 1);
        }
      });
      //console.log("remove id is " + id.toString())
      //console.log(this.navItemList)
    },  
    navItemListSave(){ //Vesper 新增/刪除 導航列功能 20190805
      //setp1 this.navItemList 存到 navItemList.json

      //setp2 this.navItemList call api 存到後台 如果需要存到後台 要注意失敗後的資料回滾
      console.log("navItemListSave")
    },
    
    handleAvatarSuccess(res, file) { //Vesper 圖文編輯功能 layout 20190806 upload
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) { //Vesper 圖文編輯功能 layout 20190806 upload
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    },

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
    SettingTopBar() {
      if(this.isTopBar = !this.isTopBar) {
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
    SettingSwitch(option){
      switch(option) {
          case "SettingBanner":
              this.SettingBanner()
              break
          case "SettingSlider":
              this.SettingSlider()
              break
          case "SettingContent":  
              this.SettingContent()
              break
          default:
              break
      } 
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
    SettingNavEdit() { //Vesper 新增/刪除 導航列功能 20190805
      if(this.isNavEdit = !this.isNavEdit) {
        this.isLayer1 = false;

        //var navItemForm = navItem.create()
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
        this.isTopBar = false;
        this.isHeadNav = false;
        this.isFooterNav = false;
        this.isBanner = false;
        this.isSlider = false;
        this.isMarquee = false;
        this.isContent = false; 
        this.isNavEdit = false; //Vesper 新增/刪除 導航列功能 20190805
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
    //Edit content section pop-up
    handleClose(done) {
      // this.$confirm('確認關閉')
      // .then(_ => {
      //   done();
      // })
      // .catch(_ => {});
    }
  }
}
</script>
 
<style> 
/* Vesper 圖文編輯功能 layout 暫留  layout 判斷區域大小用 */
.bg-purple-dark {
  background: #99a9bf;
}
 
</style>
 