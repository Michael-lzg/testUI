<template>
  <div class="add-img-wrapper">
    <label for="img-upload">
      <i class="add-img"></i>
    </label>
    <input type="file" style="display: none;" id="img-upload" multiple accept="image/*" @change="uploadImg($event)" />
  </div>
</template>

<script>
import EXIF from 'exif-js'
export default {
  name: 'image_html5_upload',
  props: {
    imgArr: {
      type: Array
    },
    // 一次最多可以上传多少张照片
    imgNumLimit: {
      type: Number,
      default: 10
    }
  },
  methods: {
    uploadImg (e) {
      console.log(e)
      let tag = e.target
      let fileList = tag.files
      let imgNum = fileList.length
      let _this = this
      if (this.imgArr.length + imgNum > this.imgNumLimit) {
        alert('一次最多上传' + this.imgNumLimit + '张图片！')
        return
      }
      var Orientation
      for (let i = 0; i < imgNum; i++) {
        EXIF.getData(fileList[i], function () {
          Orientation = EXIF.getTag(fileList[i], 'Orientation')
        })
        let reader = new FileReader()
        reader.readAsDataURL(fileList[i])
        reader.onload = function () {
          var oReader = new FileReader()
          oReader.onload = function (e) {
            var image = new Image()
            image.src = e.target.result
            image.onload = function () {
              var expectWidth = this.naturalWidth
              var expectHeight = this.naturalHeight
              if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
                expectWidth = 800
                expectHeight = expectWidth * this.naturalHeight / this.naturalWidth
              } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
                expectHeight = 1200
                expectWidth = expectHeight * this.naturalWidth / this.naturalHeight
              }
              var canvas = document.createElement('canvas')
              var ctx = canvas.getContext('2d')
              canvas.width = expectWidth
              canvas.height = expectHeight
              ctx.drawImage(this, 0, 0, expectWidth, expectHeight)
              var base64 = null
              // 修复ios上传图片的时候 被旋转的问题
              if (Orientation !== '' && Orientation !== 1) {
                switch (Orientation) {
                  case 6:// 需要顺时针（向左）90度旋转
                    _this.rotateImg(this, 'left', canvas)
                    break
                  case 8:// 需要逆时针（向右）90度旋转
                    _this.rotateImg(this, 'right', canvas)
                    break
                  case 3:// 需要180度旋转
                    _this.rotateImg(this, 'right', canvas)
                    _this.rotateImg(this, 'right', canvas)
                    break
                }
              }
              base64 = canvas.toDataURL('image/jpeg', 0.8)
              if (fileList[i].size / 1024000 > 1) {
                _this.imgScale(base64, 4, i)
              } else {
                _this.imgArr.push({ 'src': base64, 'name': 'img' + Date.parse(new Date()) / 1000 + i + '.jpeg' })
              }
            }
          }
          oReader.readAsDataURL(fileList[i])
        }
      }
      this.$emit('add', this.imgArr)
    },
    // 图片缩放
    imgScale (imgUrl, quality, index) {
      let img = new Image()
      let _this = this
      let canvas = document.createElement('canvas')
      let cxt = canvas.getContext('2d')
      img.src = imgUrl
      img.onload = function () {
        // 缩放后图片的宽高
        let width = img.naturalWidth / quality
        let height = img.naturalHeight / quality
        canvas.width = width
        canvas.height = height
        cxt.drawImage(this, 0, 0, width, height)
        _this.imgArr.push({ 'src': canvas.toDataURL('image/jpeg'), 'name': 'img' + Date.parse(new Date()) / 1000 + index + '.jpeg' })
      }
    },
    // 图片旋转
    rotateImg (img, direction, canvas) {
      var minStep = 0
      var maxStep = 3
      if (img == null) return
      var height = img.height
      var width = img.width
      var step = 2
      if (step == null) {
        step = minStep
      }
      if (direction === 'right') {
        step++
        step > maxStep && (step = minStep)
      } else {
        step--
        step < minStep && (step = maxStep)
      }
      var degree = step * 90 * Math.PI / 180
      var ctx = canvas.getContext('2d')
      switch (step) {
        case 0:
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0)
          break
        case 1:
          canvas.width = height
          canvas.height = width
          ctx.rotate(degree)
          ctx.drawImage(img, 0, -height)
          break
        case 2:
          canvas.width = width
          canvas.height = height
          ctx.rotate(degree)
          ctx.drawImage(img, -width, -height)
          break
        case 3:
          canvas.width = height
          canvas.height = width
          ctx.rotate(degree)
          ctx.drawImage(img, -width, 0)
          break
      }
    }
  }
}
</script>

<style lang="less">
.add-img-wrapper {
  font-size: 0;
  .add-img {
    display: inline-block;
    width: 75px;
    height:  75px;
    background: url('./../assets/img/addimg.png') no-repeat center;
    background-size:  75px  75px;
  }
}
</style>
