<template>
  <Fragment>
  <div class="el-upload-sortable">
  <div slot="tip" class="el-upload__tip">
      <h6>只能上傳jpg/png文件，且不超過2M</h6>
      <h6>檔案尺寸: 1920*400px</h6>
  </div>
  <div class="upload-queue" @change="updateList(imgList)">
    <draggable v-model="imgList" @start="drag=true" @end="drag=false" 
      class="el-upload-list el-upload-list--picture-card">
      <div class="el-upload-list__item" v-for="(item, index) in imgList" :key="index">
        <img :src="item" class="el-upload-list__item-thumbnail">

        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePreview(item)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span class="el-upload-list__item-delete" @click="handleRemove(item, index)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </draggable>
    <el-upload
      :multiple="multiple"
      v-if="imgList.length < max"
      class="el-upload el-upload--picture-card"
      list-type="picture"
      :action="action"
      :show-file-list="false"
      :on-success="handleSuccess"
      :on-error="handleError"
      :before-upload="beforeUpload">
      <i class="el-icon-plus"></i>
    </el-upload>
    
    <!-- <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl">
    </el-dialog> -->


<!-- Vesper 新增 URL 輸入框 20190805 -->
<el-button type="primary" @click="dialogFormVisible = true" style="margin-top:8px;margin-left:2px;"> 網址輸入</el-button>

<el-dialog title="圖片網址" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
  <el-row v-for="(item) in this.urlImages" :key="item.id">
    <el-col :span="24">
      <div style="margin-bottom:5px">
        <el-input placeholder="请输入内容" size="medium" v-model="item.urlPath">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
    </el-col>
  </el-row>

  <div slot="footer" class="dialog-footer" >
    <el-button type="primary" round @click="addImage">新 增</el-button> 
    <el-button type="warning" round @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="success" round  @click="dialogFormVisible = false;saveImages()">儲 存</el-button>
  </div>
</el-dialog>
<!-- Vesper 新增 URL 輸入框 20190805 -->

    </div>
  </div>
  </Fragment>
</template>

<script>
import draggable from "vuedraggable";
import { Fragment } from "vue-fragment";

//vesper 新增 20190805
import { urlImage } from "~/utils/model.js";

export default {
  name: 'ElUploadSortable',
  components: { 
    draggable, Fragment 
  },
  props: {
    max: {
      type: Number,
      default: 15
    },
    action: {
      type: String,
      default: 'https://jsonplaceholder.typicode.com/posts/'
    },
    list: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    param: {
      type: String,
      default: ''
    }
  },
  computed:{
    imgList: {
      get() {
        return this.list
      },
      set(val) {
        this.updateList(val)
      }
    }
  },
  data () {
    return {
      // Vesper 新增 URL 輸入框 20190805
        dialogFormVisible: false,
        formLabelWidth: '220px',
        urlImages:[],
      // Vesper 新增 URL 輸入框 20190805

      drag: false,
      dragOptions: {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      },
      dialogImageUrl: "",
      dialogVisible: false,
    }
  },
  created(){
    this.initData();
  },
  methods: {
    initData(){
      //初始化 一筆資料(urlImage) 至 urlImages 集合中
      if(this.urlImages.length == 0){
        this.addImage()
      }
    },
    addImage(){
      if (this.urlImages.length >= 5){
        return;
      }else{
        var id = this.urlImages.length + 1;

        var Image = urlImage.create()
        Image.id = id
        Image.urlPath = ''
        this.urlImages.push(Image);
      }
    },
    saveImages(){
      //還不知回存到哪 
      console.log("save images")
    },
    updateList(list){
      this.$emit('change', list)
    },
    beforeUpload(file) {
      const isValidFormat = ["image/jpeg", "image/png"].indexOf(file.type) > -1;
      const isLt2M = file.size / 1024 / 1024 < 2; // 2M
      if (!isValidFormat) {
        this.$message.error("图片只能是 JPG或PNG 格式!");
      } else if (!isLt2M) {
        this.$message.error("图片大小不能超过 2MB!");
      }
      const maxLt = this.max === 1 && this.imgList.length > 0;
      if(maxLt){
        this.$message.error("只能上传一张图片，请删除后再上传!");
      }
      return isValidFormat && isLt2M && !maxLt;
    },
    handleSuccess(res, file) {
      const params = this.param.split('.');
      let url = res;
      params.forEach(item => {
        url = url[item];
      });
      this.imgList.push(url ? url: URL.createObjectURL(file.raw));
      this.$emit('change', this.imgList)
    },
    handleError(err) {
      this.$message.error("上传失败!");
    },
    handleRemove(file, index) {
      this.imgList.splice(index, 1);
      this.$emit('change', this.imgList)
    },
    handlePreview(url) {
      this.dialogImageUrl = url;
      this.dialogVisible = true;
    }
  }
}
</script>