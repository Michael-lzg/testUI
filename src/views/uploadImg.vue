<template>
  <div class="wrapper">
    <div v-for="(img, index) in imgList" :key="index" class="img-wrapper">
      <img class="img-list" :src="img.src" width="75" height="75" @click="show(index)">
      <img src="../assets/img/del_img.png" class="del-img-icon" width="18" @click="delPhoto(index)">
    </div>
    <div class="img-wrapper">
      <image-html5-upload :imgArr="imgList" @add="load"></image-html5-upload>
    </div>
    <div v-transfer-dom>
      <previewer :list="imgList" ref="previewer" v-if="flag"></previewer>
    </div>
  </div>
</template>

<script>
import imageHtml5Upload from './../components/image-html5-upload'
import { Previewer, TransferDom } from 'vux'
export default {
  data () {
    return {
      imgList: [],
      flag: false
    }
  },
  methods: {
    load (val) {
      this.imgList = val
    },
    show (index) {
      this.flag = true
      setTimeout(() => {
        this.$refs.previewer.show(index)
      }, 10)
    },
    delPhoto (index) {
      this.imgList.splice(index, 1)
    }
  },
  components: { imageHtml5Upload, Previewer },
  directives: { TransferDom }
}
</script>

<style scoped lang="less">
.wrapper{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.img-wrapper {
  display: inline-block;
  position: relative;
}
.del-img-icon{
  position: absolute;
  top: 0;
  right: 0;
}
</style>
