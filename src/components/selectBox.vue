<template>
  <div class="mask" v-if="showMask">
    <div class="box">
      <div class="title">{{title}}</div>
      <div class="selectList">
        <div class="listItem" v-for="(item,index) in list" :key="index" @click="toSelect(item,index)">
          <span :class="{'c1':selectIndex === index}">{{item.name}}</span>
          <img src="../assets/img/gou.png" alt="" v-if="selectIndex === index">
        </div>
      </div>
      <div class="footer tc">
        <span class="cancel" @click="onCancel">取消</span>
        <span class="submit" @click="onSubmit">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '请选择一个选择',
      selectIndex: '',
      selectItem: '',
      showMask: true
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
    },
    onCancel () {
      this.$emit('cancelSelect', false)
    },
    onSubmit () {
      this.$emit('submitSelect', this.selectItem)
    }
  }
}
</script>

<style scoped lang="less">
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
.box {
  width: 240px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #fff;
  z-index: 999;
  border-radius: 10px;
}
.title {
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.selectList {
  padding: 0 15px;
  background-color: #fff;
  .listItem {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    text-align: center;
    position: relative;
    > img {
      position: absolute;
      top: 16px;
      right: 10px;
    }
  }
}
.footer {
  border-top: 1px solid #e9ecf1;
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  >span{
    width: 50%;
    text-align: center;
    float: left;
  }
  .cancel{
    font-size: 15px;
    width: 50%;
    color: #222222;
    border-right: 1px solid #e9ecf1;
    height: 50px;
    border-radius: 0 0 0 10px;
  }
  .submit{
    font-size: 15px;
    width: 50%;
    height: 50px;
    border-radius: 0 0 10px 0;
    color: #1890FF;
  }
}
.c1{
  color: #1890FF;
}
</style>
