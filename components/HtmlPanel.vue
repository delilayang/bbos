<template>
  <div>
    <mu-circular-progress :size="40" v-if="loading"/>
    <div v-html="html"></div>
  </div>
</template>
<style>

</style>
<script>
  import axios from 'axios';  
  export default{
    // 使用时请使用 :url.sync=""传值
    props: {
      url: {
        required: true
      }
    },
    data () {
      return {
        loading: false,
        html: ''
      }
    },
    watch: {
      url (value) {
        this.load(value)
      }
    },
    mounted () {
      this.load(this.url)
    },
    methods: {
      load (url) {
        if (url && url.length > 0) {
          // 加载中
          this.loading = true
          let param = {
            accept: 'text/html, text/plain'
          }
            this.html = (args) => {
                args.headers['Content-Type'] = 'application/html';
                args.method = 'GET';
                return args;
            }          
        }
      }
    }
  }
</script>