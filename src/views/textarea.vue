<template>
  <div class="main">
    <h2>div模拟textarea实现高度自适应</h2>
    <div class="test_box" contenteditable="true"></div>
    <!-- <div class="footer">
      <div class="test_box plbtn" contenteditable="true"></div>
      <span>评论</span>
    </div> -->
    <div class="footer">
      <textarea id="text-adaption" class="test_box plbtn" rows="1"  @keyup="init"></textarea>
      <span>评论</span>
    </div>

    <h2>JS控制textarea高度自适应</h2>
    <textarea id="text-adaption" class="text-adaption" rows="1" @keyup="init"></textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: ''
    }
  },
  methods: {
    getId (id) {
      return document.getElementById(id)
    },
    init () {
      this.getId('text-adaption').style.height = 'auto'
      this.getId('text-adaption').style.height =
        this.getId('text-adaption').scrollHeight + 'px'
    },
    onFocus (e) {
      console.log(999)
      // setTimeout(function () {
      //   e.target.scrollIntoView(true)
      //   // true:元素的顶端将和其所在滚动区的可视区域的顶端对齐; false:底端对齐。
      // }, 200)
      var timer = setInterval(
        function () {
          document.body.scrollTop = document.body.scrollHeight
        }, 100)
      setTimeout(function () {
        clearInterval(timer)
      }, 500)
    }
  },
  mounted () {}
}
</script>

<style scoped lang="less">
.main {
  padding: 15px;
}
h2 {
  text-align: center;
  margin-bottom: 10px;
  margin-top: 15px;
}

.test_box {
  width: 100%;
  min-height: 20px; /*设置最小高度*/
  max-height: 1000px; /*设置最大高度超过300px时出现滚动条*/
  _height: 120px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  outline: 0;
  border: 1px solid #bbb;
  font-size: 16px;
  line-height: 24px;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px 15px;
  padding-right: 50px;
  > span {
    position: absolute;
    right: 15px;
    bottom: 22px;
    color: #597EF7;
  }
}
.plbtn {
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
}

.text-adaption {
  width: 100%;
  height: 34px;
  overflow: hidden;
  padding: 5px 10px;
  resize: none;
  line-height: 24px;
  font-size: 12px;
  color: #666;
  border: 1px solid #ccc;
  outline: 0 none;
  border-radius: 3px;
  box-sizing: border-box;
}
</style>
