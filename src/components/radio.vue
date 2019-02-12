<template>
  <div>
    <div class="title">
      <span class="fl">{{title}}</span>
      <span class="fr">{{selectItem}}</span>
    </div>
    <div class="selectList">
      <div class="listItem" v-for="(item,index) in list" :key="index" @click="toSelect(item,index)">
        <span class="fl" :class="{'c1':selectIndex === index}">{{item.name}}</span>
        <!-- <img src="../assets/img/gou.png" alt="" class="fr" v-if="selectIndex === index"> -->
        <i class="iconfont icon-i c1 fr" v-if="selectIndex === index"></i>
      </div>
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
      this.selectItem = item.name
      this.$emit('selectChange', item)
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
}
.selectList{
  padding: 0 15px;
  background-color: #fff;
  .listItem{
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    >img{
      margin-top: 16px;
    }
  }
}
.c1{
  color: #1890FF;
}

</style>
