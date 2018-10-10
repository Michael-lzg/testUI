<template>
  <div>
    <div class="item">
      <dropdown :list="list" @selectChange="selectChange"></dropdown>
    </div>
    <div class="item">
      <radio :list="list" @selectChange="selectChange"></radio>
    </div>
    <div class="title" @click="toSelect">弹窗选择</div>
    <selectBox :list="list" @submitSelect="submitSelect" @cancelSelect="cancelSelect" v-if="showSelect"></selectBox>
  </div>
</template>

<script>
import radio from '../components/radio'
import dropdown from '../components/dropdown'
import selectBox from '../components/selectBox'
export default {
  data () {
    return {
      showSelect: false,
      list: [
        { id: 1, name: '下拉选择一' },
        { id: 2, name: '下拉选择二' },
        { id: 3, name: '下拉选择三' }
      ]
    }
  },
  components: { radio, dropdown, selectBox },
  methods: {
    selectChange (val) {
      alert(val.name)
    },
    toSelect () {
      this.showSelect = true
    },
    submitSelect (val) {
      alert(val.id)
      this.showSelect = false
    },
    cancelSelect () {
      this.showSelect = false
    }
  }
}
</script>

<style scoped lang="less">
.item{
  margin-bottom: 10px;
  background-color: #fff;
}
.title{
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  background-color: #fff;
}
</style>
