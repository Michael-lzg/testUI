<template>
  <div class="mask" @click.self="hideMask">
    <div class="selectMonth">
      <div class="calendar-month">
        <img src="../assets/img/topre.png" alt="" width="8" height="12" class="toLeft" @click="preYear">
        <span>{{activeYear}}年</span>
        <img src="../assets/img/tonext.png" alt="" width="8" height="12" class="toRight" @click="nextYear">
      </div>
      <div class="monthsItem" :class="{'c1':month == index+1 && year == activeYear}" v-for="(item,index) in months" :key="index" @click="selectMonth(index)">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeYear: '',
      // month: '',
      months: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ]
    }
  },
  props: ['year', 'month'],
  methods: {
    hideMask () {
      this.$emit('hideMask', false)
    },
    preYear () {
      this.activeYear--
      // this.year--
    },
    nextYear () {
      this.activeYear++
      this.year++
    },
    selectMonth (index) {
      this.$emit('changeDay', {year: this.activeYear, month: index + 1})
    }
  },
  created () {
    this.activeYear = this.year
    // var date = new Date()
    // this.activeYear = date.getFullYear()
    // this.month = date.getMonth() + 1
  }
}
</script>

<style scoped lang="less">
.selectMonth {
  background-color: #fff;
  z-index: 9999;
  opacity: 1;
  position: absolute;
  width: 100%;
  bottom: -200px;
  left: 0;
  transform: translateY(-200px);
  transition: 0.8s;
  animation: move 0.2s linear;
  .monthsItem {
    display: inline-block;
    width: 25%;
    text-align: center;
    line-height: 50px;
    color: black;
  }
}
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
@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(-200px);
  }
}
</style>
