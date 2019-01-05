<template>
  <div id="imgList">
    <img class="img" src="http://attach.bbs.miui.com/forum/201303/16/173716jzszx8vbbb0z9o4k.jpg" alt="">
    <div id="downLoad" @click="down()">保存下载</div>
    <div class="word">哈哈好好或或或或或或或</div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  data () {
    return {}
  },
  methods: {
    base64ToBlob (code) {
      let parts = code.split(';base64,')
      let contentType = parts[0].split(':')[1]
      let raw = window.atob(parts[1])
      let rawLength = raw.length
      let uInt8Array = new Uint8Array(rawLength)
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }
      return new Blob([uInt8Array], {type: contentType})
    },
    /* 分享 */
    down () {
      html2canvas(document.querySelector('#imgList')).then(canvas => {
        let saveUrl = canvas.toDataURL('image/png')
        let aLink = document.createElement('a')
        let blob = this.base64ToBlob(saveUrl)
        console.log(blob)
        let evt = document.createEvent('HTMLEvents')
        evt.initEvent('click', true, true)
        aLink.download = '标题.jpg'
        aLink.href = 'http://attach.bbs.miui.com/forum/201303/16/173716jzszx8vbbb0z9o4k.jpg'
        // aLink.href = URL.createObjectURL(blob)
        aLink.click()
      })
    }
  }
}
</script>

<style scoped>
#img {
  text-align: center;
}
</style>
