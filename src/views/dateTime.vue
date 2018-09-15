<template>
  <div class="list">
    <div class="listItem">
      <div class="fl">Time</div>
      <dateTime type="time" v-model="datetime1" slot="right" class="fr selectTime"></dateTime>
    </div>
    <div class="listItem">
      <div class="fl">Day</div>
      <dateTime type="day" v-model="datetime2" slot="right" class="fr selectTime"></dateTime>
    </div>
    <div class="listItem">
      <div class="fl">Month</div>
      <dateTime type="month" v-model="datetime3" slot="right" class="fr selectTime"></dateTime>
    </div>
    <div class="listItem">
      <div class="fl">Date</div>
      <dateTime type="date" v-model="datetime4" slot="right" class="fr selectTime"></dateTime>
    </div>
    <div class="listItem">
      <div class="fl">DateTime</div>
      <dateTime type="datetime" v-model="datetime5" slot="right" class="fr selectTime"></dateTime>
    </div>
    <div class="listItem">
      <div class="fl">开始/结束年份</div>
      <dateTime startYear="1990" endYear="2020" type="date" v-model="datetime7" slot="right" class="fr selectTime"></dateTime>
    </div>
    <div class="listItem">
      <div class="fl">开始/结束小时</div>
      <dateTime startHour="9" endHour="18" type="time" v-model="datetime8" slot="right" class="fr selectTime"></dateTime>
    </div>
    <div class="listItem">
      <div class="fl">时间段范围</div>
      <dateTime ref="datetime" startDate="2012-03-16 15:13" endDate="2019-10-21 22:21" v-model="datetime9" slot="right" class="fr selectTime"></dateTime>
    </div>
  </div>
</template>

<script type="text/babel">
import dateTime from '../components/datetime/src/datetime'
export default {
  components: {dateTime},
  data () {
    return {
      datetime1: '12:18',
      datetime2: '2018-03-29',
      datetime3: '2018-03-29',
      datetime4: '2018-03-29',
      datetime5: '2016-06-06 06:06',
      datetime6: '2017-05-11',
      datetime7: '',
      datetime8: '10:20',
      datetime9: ''
    }
  },
  methods: {
    open () {
      this.$refs.datetime.open()
    }
  }
}
</script>
<style scoped lang="less">
.list{
  .listItem{
    padding:  0 15px;
    height: 40px;
    line-height: 45px;
    background-color: #fff;
    margin-bottom: 8px;
    .selectTime{
      width: auto !important;
    }
  }
}
</style>
