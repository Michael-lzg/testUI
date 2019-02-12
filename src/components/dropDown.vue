<template>
  <div :class="{'mask':showList}">
    <div class="title" @click="showSelectList">
      <span class="fl">{{title}} {{selectItem}}</span>
      <img src="../assets/img/down-icon.png" alt="" width="13" class="fr" v-if="!showList">
      <img src="../assets/img/up-icon.png" alt="" width="13" class="fr" v-if="showList">
    </div>
    <div class="selectList dropDown" v-if="showList">
      <div class="listItem" v-for="(item,index) in list" :key="index" @click="toSelect(item,index)">
        <span class="fl" :class="{'c1':selectIndex === index}">{{item.name}}</span>
        <i class="iconfont icon-i c1 fr" v-if="selectIndex === index"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      selectIndex: '',
      selectItem: '',
      showList: false
    }
  },
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    showSelectList () {
      this.showList = !this.showList
    },
    toSelect (item, index) {
      this.selectIndex = index
      this.selectItem = item.name
      this.showList = false
      this.$emit('selectChange', item)
    }
  },
  created () {
    if (!this.title) {
      this.selectItem = this.list[0].name
    }
  }
}
</script>

<style scoped lang="less">
.title{
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  background-color: #fff;
  >img{
    margin-top: 18px;
  }
}
.selectList{
  padding: 0 15px;
  background-color: #fff;
  .listItem{
    height: 45px;
    line-height: 45px;
    font-size: 16px;
  }
}
.c1{
  color: #1890FF;
}
.dropDowm{
  animation: down 0.3s linear;
  overflow: hidden;
}

@keyframes down{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
