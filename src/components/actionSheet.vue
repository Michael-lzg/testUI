<template>
  <div class="mask">
    <div class="box">
      <div class="title">{{title}}</div>
      <div class="selectList">
        <div class="listItem" :class="{'c1':selectIndex === index}" v-for="(item,index) in list" :key="index" @click="toSelect(item,index)">{{item.name}}</div>
      </div>
      <div class="cancel" @click="cancel">取消</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '请选择一个选项',
      selectIndex: '',
      selectItem: ''
    }
  },
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    toSelect (item, index) {
      this.selectIndex = index
      this.selectItem = item
      this.$emit('submitSelect', item)
    },
    cancel () {
      this.$emit('cancelSelect', false)
    }
  }
}
</script>

<style scoped lang='less'>
.box{
  background-color: #f6f6f6;
  z-index: 999;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.title,.cancel{
  background-color: #fff;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
}
.cancel{
  margin-top: 8px;
}
.selectList{
   background-color: #fff;
  .listItem{
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid #f6f6f6;
  }
}
.c1{
  color: #1890FF;
}
.box{
  animation: down 0.2s linear;
  overflow: hidden;
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
</style>
