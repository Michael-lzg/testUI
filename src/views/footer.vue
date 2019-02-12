<template>
  <div class="mainPage">
    <div v-for="(item,index) in buttonList" :key="index">
      <Kbutton txt="提交" :isBottom="item.isBottom" :loading="item.loading" :round="item.round" :simple="item.simple" @onSubmit="onSubmit(index)"></Kbutton>
    </div>
    <Kbutton txt="提交" :count="count" :isBottom="isBottom" leftTxt="取消" rightTxt="确定" @onLeft="onLeft" @onRight="onRight"></Kbutton>
  </div>
</template>

<script>
import Kbutton from '../components/button'
export default {
  name: 'kButton',
  components: { Kbutton },
  data () {
    return {
      loading: false,
      isBottom: false,
      count: 2,
      buttonList: [
        { isBottom: false, loading: false, round: false },
        { isBottom: false, loading: false, round: true },
        { isBottom: false, loading: false, round: false, simple: true },
        { isBottom: false, loading: false, round: true, simple: true }
      ]
    }
  },
  methods: {
    onSubmit (index) {
      this.buttonList[index].loading = true
      setTimeout(() => {
        this.buttonList[index].loading = false
        alert('执行逻辑')
      }, 2000)
    },
    onLeft () {
      alert('取消')
    },
    onRight () {
      alert('确定')
    }
  }
}
</script>

<style scoped>
.mainPage {
  height: 100%;
  background-color: #fff;
  padding-top: 0.3rem;
}
</style>
