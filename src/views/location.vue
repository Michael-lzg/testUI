<template>
  <div>
    <div class="location">打卡地点：{{location}}</div>
    <div class="sign" @click="getLocation">签到</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location: ''
    }
  },
  methods: {
    getLocation () {
      var vm = this
      window.XuntongJSBridge.call('getLocation', {}, function (res) {
        if (res.success === true || res.success === 'true') {
          // alert(res.data.name)
          alert(res.data.address)
          vm.getMore(res.data.latitude, res.data.latitude)
        }
      })
    },
    getMore (la, lo) {
      var vm = this
      window.XuntongJSBridge.call('selectLocation', {
        latitude: la,
        longitude: lo,
        isLocation: true,
        isFullMap: false
      },
      function (res) {
        if (res.success === true || res.success === 'true') {
          alert(res.data.addressdetail)
          vm.location = res.data.addressdetail
        }
      }
      )
    }
  }
}
</script>

<style scoped lang="less">
  .sign{
    width: 70px;
    height: 70px;
    background-color: #1890FF;
    border-radius: 70px;
    color: white;
    line-height: 70px;
    text-align: center;
    margin: 100px auto;
  }
</style>
