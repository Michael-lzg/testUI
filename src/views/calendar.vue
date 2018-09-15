<template>
  <div>
    <calendar
      ref="calendar"
      id="calendar"
      :showCalendar="calendarObj.flag"
      :disableWeekend="calendarObj.disableWeekend"
      :target="calendarObj.target"
      v-model="calendarObj.value"
      :start-date="calendarObj.startDate"
      :end-date="calendarObj.endDate"
      :show-last-month="calendarObj.showLastMonth"
      :show-next-month="calendarObj.showNextMonth"
      :return-six-rows="calendarObj.return6Rows"
      :disable-past="calendarObj.disablePast"
      :disable-future="calendarObj.disableFuture"
      @changeUnitInfo="changeUnitInfo"
      :renderMonth="calendarObj.renderMonth">
    </calendar>
  </div>
</template>

<script>
import calendar from '../components/calendar'
export default {
  components: { calendar },
  data () {
    return {
      calendarObj: {
        target: {},
        flag: true,
        showLastMonth: true,
        showNextMonth: true,
        disableWeekend: true,
        return6Rows: true,
        // replaceTextList: {'TODAY': '今'}, // 替换列表，可以将默认的日期换成文字，比如今天的日期替换成今，{'TODAY':'今'}
        disablePast: false,
        disableFuture: false,
        renderMonth: [], // 指定渲染月份，如[2008,2]
        startDate: '',
        endDate: ''
      }
    }
  },
  methods: {
    changeUnitInfo (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
