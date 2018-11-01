<template>
  <uploader
    :files=[]
    url="jsonplaceholder.typicode.com/posts/"
    title="请选择图片上传"
    @onChange="onChange"
    @onCancel="onCancel"
    @onPreview="onPreview"
    @onDelete="onDelete"
    @onSuccess="onSuccess"
    @onError="onError"
  >
  </uploader>
</template>

<script>
import Uploader from 'vux-uploader-component'
export default {
  components: {
    Uploader
  },
  methods: {
    onChange (file) {
      console.log('onChange: ', file)
    },
    onCancel () {
      console.log('onCancel: Sucess')
    },
    onPreview (e, idx) {
      console.log('onPreview: ', e, idx)
    },
    onDelete (idx) {
      console.log('onDelete: ', idx)
    },
    onSuccess (res) {
      console.log('onSuccess: ', res)
    },
    onError (res) {
      console.log('onError: ', res)
    }
  }
}
</script>

<style scoped>

</style>
