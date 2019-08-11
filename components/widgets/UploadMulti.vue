<template>
    <div class="upload-multi">
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
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
    data() {
        return {}
    },
    methods: {
        //Upload
        handleRemove(file, fileList) {},
        handlePreview(file) {
            console.log(file);
        }
    },
    computed: {
        ...mapState("main", ["fileList"])
    }
}
</script>
<style lang="scss" scoped>

</style>

