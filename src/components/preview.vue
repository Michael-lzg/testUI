<template>
  <div>
    <div class="imgList">
      <img v-for="src in imgList" :src="src" :key="src" preview="1" preview-text="描述文字" width="50%" height="100">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)
export default {
  data () {
    return {
      imgList: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg'
      ]
    }
  },
  mounted () {
    this.$previewRefresh()
  }
}
</script>

<style scoped>
.imgList{
  margin-top: 20px;
}
</style>
