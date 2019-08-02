<template>
    <Fragment>
        <div class="edit-section">
            <li>
             <span>編輯區塊</span>
                <el-button  class="btn-setting" @click="dialogVisible = true">
                    <i class="el-icon-edit-outline"></i>
                </el-button>
            </li>
            <el-dialog
            title="編輯區塊"
            :visible.sync="dialogVisible"
            width="100%"
            :before-close="handleClose">
            
            <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogImgVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">確 定</el-button>
            </span>
            </el-dialog>
        </div>
    </Fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
export default {
    components: {
        Fragment
    },
    data() {
        return {
            dialogImageUrl: '',
            dialogImgVisible: false,
            dialogVisible: false
        }
    },
    methods: {
        handleClose(done) {
        // this.$confirm('確認關閉')
        // .then(_ => {
        //   done();
        // })
        // .catch(_ => {});
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
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
