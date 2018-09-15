<template>
  <div>
    <footerBtn :txt="btnTxt" @onSubmit="onSubmit" :loading="loading"></footerBtn>
    <!-- <footerBtn :leftTxt="leftTxt" :rightTxt="rightTxt" :count="2" @onLeft="onLeft" @onRight="onRight"></footerBtn> -->
  </div>
</template>

<script>
import footerBtn from '../components/footer'
export default {
  data () {
    return {
      btnTxt: '提交',
      leftTxt: '取消',
      rightTxt: '确定',
      loading: false
    }
  },
  components: { footerBtn },
  methods: {
    onSubmit () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
      alert('执行逻辑')
      // this.$router.push({
      //   path: '/'
      // })
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

</style>
