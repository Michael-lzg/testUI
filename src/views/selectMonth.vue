<template>
  <div>
    <div class="calendar-month">
      <img src="../assets/img/topre.png" alt="" width="8" height="12" class="toLeft" @click="toLeft()">
      <span class="calendar-month-txt calendar-title" href="javascript:" @click="toSelectMonth">{{year}}年{{month}}月</span>
      <img src="../assets/img/tonext.png" alt="" width="8" height="12" class="toRight" @click="toRight()">
    </div>
    <selectMonth v-if="maskFlag" :year="year" :month="month" @changeDay="changeDay" @hideMask="hideMask"></selectMonth>
  </div>
</template>

<script>
import selectMonth from '../components/selectMonth'
export default {
  data () {
    return {
      year: '',
      month: '',
      maskFlag: false
    }
  },
  components: {selectMonth},
  methods: {
    toSelectMonth () {
      this.maskFlag = true
    },
    toLeft () {
      this.month--
      if (this.month === 0) {
        this.month = 12
        this.year--
        this.activeYear = this.year
      }
    },
    toRight () {
      this.month++
      if (this.month === 13) {
        this.month = 1
        this.year++
        this.activeYear = this.year
      }
    },
    changeDay (val) {
      this.year = val.year
      this.month = val.month
      this.maskFlag = false
    },
    hideMask () {
      this.maskFlag = false
    }
  },
  created () {
    var date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
  }
}
</script>

<style scoped lang="less">
.calendar-month {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
  position: relative;
}
.toLeft {
  position: absolute;
  left: 30%;
  top: 17px;
}
.toRight {
  position: absolute;
  right: 30%;
  top: 17px;
}
</style>
