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

                <!-- Yi 新增TopBar 20190809 -->
                <li>
                  <span>TOP BAR</span>
                  <el-tooltip class="item" effect="light" content="設定" placement="top">
                    <el-button  class="btn-setting" @click="SettingTopBar">
                      <i class="el-icon-more"></i>
                    </el-button>
                  </el-tooltip>
                </li>
                <!-- Yi 新增TopBar 20190809 -->
                
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

                <li v-for="(item) in this.indexBlockList" :key="item.id">
                  <span>{{item.name}}</span>

                  <div v-if="item.visableSwitch === true">
                    <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
                      <el-button  class="btn-setting view" @click="showToggle(item)">
                      <i :class="{'iconfont icon-view': item.visableStatus, 'iconfont icon-view_off': !item.visableStatus}"></i>                      
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
        <upload-single></upload-single>
      </ul>
    </div>
    </transition>

    <!-- Yi 新增TopBar設定頁 20190809 -->
    <transition name="fade">
    <div class="side-content setting" v-if="isTopBar">
      <ul>
        <li>
          <el-button  class="btn-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>TOP BAR設定</span>
        </li>
        <strong><h4>輸入框導角</h4></strong>
        <set-border></set-border>
        <br>
        <strong><h4>輸入框背景顏色</h4></strong>
        <set-color></set-color>
      </ul>
    </div>
    </transition>
    <!-- Yi 新增TopBar設定頁 20190809 -->
    
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
          <li v-for="(item) in this.navItemList" :key="item.id">
            <span>{{item.name}}</span>

            <div v-if="item.visableSwitch === true">
              <el-tooltip class="item" effect="light" :content="popoverContent" placement="top">
                <el-button  class="btn-setting view" @click="showToggle(item)">
                <i :class="{'iconfont icon-view': item.visableStatus, 'iconfont icon-view_off': !item.visableStatus}"></i>                      
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

        <!--↓ Vesper 這段目前不確定 顯示的方式 先保留 20190807 -->
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
            <span> {{ element.name }} </span>

            <div v-if="element.deleteSwitch === true">
              <el-tooltip class="item" effect="light" content="刪除" placement="top">
                <el-button  class="btn-setting delete" @click="remove(index)">
                  <i class="el-icon-delete"></i>
                </el-button>
              </el-tooltip>
            </div>
            <div v-if="element.settingSwitch === true">
              <el-button  class="btn-setting" @click="SettingSwitch(element.setPanel)">
                <i class="el-icon-more"></i>
              </el-button>
            </div>
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
      <p style="margin-bottom:10px;font-size:16px;">檔案⼤小: ⼤於500KB, ⼩於2MB</p>

      <div style="margin-bottom:10px;">
      <el-row :gutter="10">
        <el-col :span="4">
          <div class="grid-content bg-purple-dark">
            <upload-single></upload-single> 
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
          <el-button  class="btn-back" @click="goBack3">
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
          <el-button  class="btn-back" @click="goBack3">
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
          <el-button  class="btn-back" @click="goBack3">
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
          <el-button  class="btn-back" @click="goBack3">
            <i class="el-icon-arrow-left"></i>
          </el-button>
          <span>合作夥伴設定</span>
        </li>
        <strong><h4>標題</h4></strong>
        <el-input v-model="input9" clearable></el-input>
      </ul>
    </div>
    </transition>
</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import draggable from "vuedraggable";
import ElUploadSortable from "./ElUploadSortable";
import SetBorder from "~/components/widgets/SetBorder";
import SetColor from "~/components/widgets/SetColor";
import UploadSingle from "~/components/widgets/UploadSingle";
import PageSelect from "~/components/common/PageSelect";
//Vesper 新增 20190805
import { navItem } from "~/utils/model.js";
import menuData from '~/data/menu.json'

let id = 1;

export default {
  display: "Simple",
  order: 0,
  components: {
    PageSelect,
    draggable,
    ElUploadSortable,
    SetBorder,
    SetColor,
    UploadSingle
  },
  data() {
    return {
      dialogVisible_navItemEdit: false, //Vesper 新增/刪除 導航列功能 20190805
      navItemForm:navItem.create(), //Vesper 新增/刪除 導航列功能 20190805
      dialogNavItemFormVisible:false, //Vesper 新增/刪除 導航列功能 20190805
      activeName: 'first',
      page: '',
      //Edit content section pop-up
      dialogVisible: false, 
      //Footer Copyright
      textarea1: 'Copyright © NBB GLOBAL Reserved',
      //Preview Switch
      isPreview: true,
      //view/view-off
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
      isNavEdit: false,  //Vesper 新增/刪除 導航列功能 20190805
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
      //宜 已刪除 moveList[] 20190808
      navItemList:[],//Vesper 新增/刪除 導航列功能 20190805 看起來 跟 moveList 是一樣的東西 但在程式上 moveList 沒用到 但不確定能不能刪
      indexBlockList:[], //Vesper 修正首頁上 可視與否 按鈕連動問題 20190807
      //頁尾導航列list
      footerNavList: [], //Vesper 改為由外部檔案 footerNavItemList.json 餵資料
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
        this.navItemList = menuData["navItemList"]
      }
      if(this.indexBlockList.length == 0){
        this.indexBlockList = menuData["indexBlockList"]
      }  
      if(this.footerNavList.length == 0){
        this.footerNavList = menuData["footerNavItemList"]
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
    //view/view-off
    showToggle(item) {

      if(typeof(item) === "object"){

        item.visableStatus = ! item.visableStatus

        //Vesper hotcode Emma:橫幅 與 輪播特效 只能選擇一個顯示 20190807
        //如果還有類似的狀況 再拉出去 看規則怎設計
        if(item.name == "橫幅"){
          this.indexBlockList.forEach(function(item, index, object) {
            if (item.name === "輪播特效") {
              item.visableStatus = ! item.visableStatus
            }
          });
        }
        if(item.name == "輪播特效"){
          this.indexBlockList.forEach(function(item, index, object) {
            if (item.name === "橫幅") {
              item.visableStatus = ! item.visableStatus
            }
          });
        }
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
          //頁首導覽列
          case "SettingHome": //首頁  
              this.SettingHome()
              break
          case "SettingLiveStream": //視訊直播 
              this.SettingLiveStream()
              break
          case "SettingEPlay": //電子遊藝 
              this.SettingEPlay()
              break
          case "SettingFishing": //捕魚大廳
              this.SettingFishing()
              break    
          case "SettingPreferential": //優惠活動
              this.SettingPreferential()
              break   
          //首頁Draggable區塊             
          case "SettingBanner": //橫幅
              this.SettingBanner()
              break
          case "SettingSlider": //輪播特效
              this.SettingSlider()
              break
          case "SettingContent": //內容  
              this.SettingContent()
              break
          //頁尾導覽列
          case "SettingVip": //VIP
              this.SettingVip()
              break    
          case "SettingQA": //常見問題
              this.SettingQA()
              break                 
          case "SettingPayOption": //支付選項
              this.SettingPayOption()
              break
          case "SettingPartner": //合作夥伴
              this.SettingPartner()
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
    SettingVip() {
      if(this.isVipSetting = !this.isVipSetting) {
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
    goBack3() {
      if(this.isFooterNav = !this.isFooterNav) {
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
 
<style lang="scss"> 
/* Vesper 圖文編輯功能 layout 暫留  layout 判斷區域大小用 */
.bg-purple-dark {
  background: #99a9bf;
}
</style>
 