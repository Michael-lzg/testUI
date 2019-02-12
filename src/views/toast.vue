<template>
  <div class="list">
    <div class="item" @click="successTip">成功提示</div>
    <div class="item" @click="failTip">失败提示</div>
    <div class="item" @click="warningTip">警告提示</div>
    <div class="item" @click="commonTip">普通提示</div>
    <div class="item" @click="loadingTip">加载转圈</div>
  </div>
</template>

<script>
export default {
  methods: {
    successTip () {
      this.$showTip({
        littleTipMessage: '成功提示',
        type: 'success'
      })
    },
    failTip () {
      this.$showTip({
        littleTipMessage: '失败提示',
        type: 'fail'
      })
    },
    warningTip () {
      this.$showTip({
        littleTipMessage: '警告提示',
        type: 'warning'
      })
    },
    commonTip () {
      this.$showTip({
        littleTipMessage: '这是一条普通提示',
        type: 'common'
      })
    },
    loadingTip () {
      this.$showTip({
        littleTipMessage: '正在加载',
        type: 'loading'
      })
    }
  }
}
</script>

<style scoped>
.list{
  padding: 0 15px;
}
.item{
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #597EF7 !important;
  margin-top: 10px;
  border: 1px solid #597EF7 !important;
  border-radius: 4px;
}
</style>
