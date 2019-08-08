<template>
    <el-main>
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in imgTxt" :key="item.title">
            <div class="grid-content">
                <div class="block" >
                    <el-image :src="item.url"></el-image>
                    <strong><h4>{{item.title}}</h4></strong>
                    <p>{{item.content}}</p>
                </div>
            </div>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
export default {
    data() {
        return {
            imgTxt: [{
                title: '標題1', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題2', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題3', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題4', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題5', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題6', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題7', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }, {
                title: '標題8', 
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
}
.el-image {
    width: 100%; 
    height: 100%;
} 
</style>
