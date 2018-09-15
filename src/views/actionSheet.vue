<template>
  <div>
    <div class="title" @click="toSelect">
      <span class="fl">请选择一个选择</span>
      <span class="fr">{{selectItem}}</span>
    </div>
    <actionSheet v-show="showSelect" :list="list" @submitSelect="submitSelect" @cancelSelect="cancelSelect"></actionSheet>
  </div>
</template>

<script>
import actionSheet from '../components/actionSheet'
export default {
  data () {
    return {
      selectItem: '',
      showSelect: false,
      list: [
        { id: 1, name: '下拉选择一' },
        { id: 2, name: '下拉选择二' },
        { id: 3, name: '下拉选择三' }
      ]
    }
  },
  components: {actionSheet},
  methods: {
    toSelect () {
      this.showSelect = true
    },
    submitSelect (val) {
      this.selectItem = val.name
      this.showSelect = false
    },
    cancelSelect () {
      this.showSelect = false
    }
  }
}
</script>

<style scoped>
.title{
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  padding: 0 15px;
}
</style>
