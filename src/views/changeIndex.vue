<template>
  <div class="mainPage">
    <!-- <div class="header"></div> -->
    <div class="container">
      <div class="left fl">
        <div class="item" :class="{'active':activeIndex===index}" v-for="(item,index) in list" :key="index" @click="changeIndex(index)">{{item.name}}</div>
      </div>
      <div class="right fl">
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="title" :id="'a'+index">{{item.name}}</div>
          <div class="list">
            <div class="list-item" v-for="(v, i) in item.foods" :key="i">{{v.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../JS/eleDate'
export default {
  data () {
    return {
      list: [],
      activeIndex: 0,
      isScroll: false
    }
  },
  methods: {
    changeIndex (index) {
      this.activeIndex = index
      this.animateScroll('#a' + index, '.right', 30)
    },
    // 平滑滚动方法
    animateScroll (element, container, speed) {
      console.log(element)
      this.isScroll = true
      let rect =
        document.querySelector(element).getBoundingClientRect().top -
        document.querySelector(container).getBoundingClientRect().top
      // 获取元素相对窗口的top值，此处应加上窗口本身的偏移
      let top = rect + document.querySelector(container).scrollTop
      let currentTop = 0
      let requestId
      // 采用requestAnimationFrame，平滑动画
      const step = timestamp => {
        if (currentTop <= top) {
          document.querySelector(container).scrollTo(0, currentTop)
          requestId = window.requestAnimationFrame(step)
        } else {
          window.cancelAnimationFrame(requestId)
          this.isScroll = false
        }
        currentTop += speed
      }
      window.requestAnimationFrame(step)
    },
    // 函数防抖
    throttle (method, delay) {
      var timer = null
      return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
          method.apply(this, arguments)
        }, delay)
      }
    }
  },
  mounted () {
    this.list = data.data
    // 菜品滚动选择类目
    document.querySelector('.right').addEventListener('scroll',
      this.throttle(() => {
        // 防止手动选择的时候误操作
        if (this.isScroll) {
          return
        }
        this.list.map((item, index) => {
          const rectTop = document.querySelector('#a' + index).getBoundingClientRect().top
          const containerTop = document.querySelector('.right').getBoundingClientRect().top
          if (rectTop - containerTop < 50 && rectTop - containerTop > -50) {
            this.activeIndex = index
          }
        })
      }, 50)
    )
  }
}
</script>

<style lang="less" scoped>
.mainPage {
  height: 100%;
  position: relative;
}
.header {
  height: 100px;
  background-color: #fff;
}
.container {
  // height: calc(100% - 100px) !important;
  height: 100%;
  overflow: hidden;
  .left {
    width: 25%;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #eee;
    font-size: 14px;
    .item {
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    .active{
      color: red !important;
    }
  }
  .right {
    width: 75%;
    height: 100%;
    background-color: #fff;
    overflow: auto;
    padding-left: 15px;
    .title {
      font-size: 20px;
      line-height: 40px;
      color: red;
    }
    .list-item {
      height: 80px;
    }
  }
}
</style>
