<template>
  <div class="mask" @click.self="cancel">
    <div class="box">
      <div class="top">
        <div class="title" v-text="title" v-if="title"></div>
        <div class="text" v-text="text" v-if="text"></div>
      </div>
      <div class="selectList">
        <div class="listItem" v-for="(item,index) in list" :key="index" @click="toSelect(item,index)">
          {{item[defaultProps.name]}}
          <i class="iconfont icon-i c1" v-if="item.selected === 'true'"></i>
        </div>
      </div>
      <div class="cancel" @click="cancel" v-if="!multiple">取消</div>
      <div class="multiple-button-block" v-if="multiple">
        <button class="multiple-btn" @click="cancel">取消</button>
        <button class="multiple-btn c1" @click="submit">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectIndex: -1,
      tempList: []
    }
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    text: {
      type: String,
      default: '副标题'
    },
    list: {
      type: Array
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectItem: {
      type: Object
    },
    defaultProps: {
      type: Object,
      default () {
        return {
          name: 'name',
          /* 唯一标识 */
          code: 'id'
        }
      }
    },
    selectList: {
      type: Array
    }
  },
  methods: {
    toSelect (item, index) {
      if (!this.multiple) {
        /* 单选 */
        if (this.selectIndex >= 0) {
          this.$set(this.list[this.selectIndex], 'selected', 'false')
        }
        this.$set(item, 'selected', 'true')
        this.selectIndex = index
        this.$emit('submitSelect', item)
      } else {
        /* 多选 */
        if (item.selected === 'true') {
          for (let x = 0; x < this.tempList.length; x++) {
            if (item[this.defaultProps.code] === this.tempList[x][this.defaultProps.code]) {
              this.tempList.splice(x, 1)
            }
          }
          this.$set(item, 'selected', 'false')
        } else {
          this.$set(item, 'selected', 'true')
          this.tempList.push(item)
        }
      }
    },
    cancel () {
      this.$emit('cancelSelect', false)
    },
    submit () {
      this.$emit('submitSelect', this.tempList)
    }
  },
  mounted () {
    if (!this.multiple) {
      /* 单选 */
      this.list.forEach((item) => {
        this.$set(item, 'selected', 'false')
      })
      for (let i = 0; i < this.list.length; i++) {
        if (this.selectItem[this.defaultProps.code] === this.list[i][this.defaultProps.code]) {
          this.selectIndex = i
          this.$set(this.list[i], 'selected', 'true')
          break
        }
      }
    } else {
      /* 多选 */
      this.tempList = JSON.parse(JSON.stringify(this.selectList))
      this.tempList.forEach((item) => {
        this.$set(item, 'selected', 'true')
      })
      this.list.forEach((item) => {
        this.$set(item, 'selected', 'false')
      })
      for (let x = 0; x < this.tempList.length; x++) {
        for (let y = 0; y < this.list.length; y++) {
          if (this.tempList[x][this.defaultProps.code] === this.list[y][this.defaultProps.code]) {
            this.$set(this.list[y], 'selected', 'true')
            break
          }
        }
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .mask{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    .box{
      background-color: #f6f6f6;
      z-index: 999;
      position: fixed;
      bottom: 0;
      width: 100%;
      .top{
        width: 100%;
        padding: 0.24rem 0.3rem;
        background-color: #fff;
        border-bottom: 0.01rem solid #EEEEEE;
        .title{
          text-align: center;
          color: #000000;
          font-size: 0.36rem;
          line-height: 0.56rem;
        }
        .text{
          text-align: center;
          color: #555555;
          font-size: 0.28rem;
          line-height: 0.48rem;
        }
      }
      .selectList{
        background-color: #fff;
        max-height: 4rem;
        overflow-y: auto;
        .listItem{
          position: relative;
          padding: 0 0.3rem;
          height: 1rem;
          line-height: 1rem;
          font-size: 0.32rem;
          color: #555555;
          text-align: center;
          /*text-overflow: ellipsis;*/
          /*overflow: hidden;*/
          /*white-space: nowrap;*/
          border-bottom: 0.01rem solid #EEEEEE;
          .iconfont{
            position: absolute;
            right: 0.3rem;
            top: 0;
            // color: @kduiThemeColor;
          }
        }
      }
      .cancel{
        margin-top: 0.2rem;
        background-color: #fff;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.32rem;
        color: #000000;
        text-align: center;
      }
      .multiple-button-block{
        margin-top: 0.2rem;
        width: 100%;
        height: 1rem;
        display: inline-block;
        background-color: #fff;
        font-size: 0;
        .multiple-btn{
          background-color: #fff;
          width: 50%;
          height: 1rem;
          line-height: 1rem;
          font-size: 0.32rem;
          color: #000000;
          text-align: center;
          border-right: 0.01rem solid #EEEEEE;
        }
      }
    }
    .box{
      animation: down 0.2s linear;
    }

    @keyframes down{
      0% {
        // opacity: 0;
        transform: translateY(100%)
      }
      100% {
        // opacity: 1;
        transform: translateY(0)
      }
    }
  }
</style>
