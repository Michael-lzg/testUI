<template>
  <div class="list">
    <div class="item" @click="comfirm1">确定框(不带标题)</div>
    <div class="item" @click="comfirm2">确定框(带有标题)</div>
    <div class="item" @click="feedback">填写反馈</div>
    <div class="item" @click="toSelect">弹窗选择</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {id: 1, val: '排班单元1'},
        {id: 2, val: '排班单元2'},
        {id: 3, val: '排班单元3'}
      ]
    }
  },
  methods: {
    comfirm1 () {
      this.$dialog({
        type: 'text',
        title: '是否确定删除此标签？',
        content: '',
        cancelText: '取消',
        confirmText: '确定',
        theme: '#40A9FF',
        confirm (content) {
          alert('是的')
        }
      })
    },
    comfirm2 () {
      this.$dialog({
        type: 'text',
        title: '删除标签？',
        content: '是否确定删除此标签？',
        cancelText: '取消',
        confirmText: '确定',
        theme: '#40A9FF',
        confirm (content) {
          alert('是的')
        }
      })
    },
    feedback () {
      this.$dialog({
        type: 'textarea',
        title: '请填写反馈',
        cancelText: '取消',
        confirmText: '确定',
        theme: '#40A9FF',
        confirm (content) {
          alert(content)
        }
      })
    },
    toSelect () {
      this.$dialog({
        type: 'select',
        title: '请选择排班单元',
        list: this.list,
        cancelText: '取消',
        confirmText: '确定',
        theme: '#40A9FF',
        confirm (content) {
          alert(content.val)
        }
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
  color: #597EF7;
  margin-top: 10px;
  border: 1px solid #597EF7;
  border-radius: 4px;
}
</style>
