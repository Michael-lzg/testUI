<template>
  <div v-show="showCalendar" style="height: 100%; opacity: 1;" :class="{'is-weekend-disabled': disableWeekend}">
    <transition name="picker">
      <div v-show="showCalendar" class="calendar">
        <div>

          <div class="inline-calendar">
            <div class="calendar-header">
              <div class="calendar-month">
                <span @click="prev">
                  <img src="../assets/img/topre.png" alt="" width="8" height="12">
                </span>
                <a class="calendar-month-txt calendar-title" href="javascript:">{{year}}年{{months[month]}}月</a>
                <span @click="next" class="calendar-header-right-arrow">
                  <img src="../assets/img/tonext.png" alt="" width="8" height="12">
                </span>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th v-for="(week, index) in _weeksList" :key="index" class="week tc">{{week}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(day,k1) in showDay" :key="k1">
                  <td v-for="(child,k2) in day" :key="k2" :data-date="formatDate(year, month, child)" :data-current="currentValue"  @click="select(k1,k2,child)" :class="{'current':(child.isCurrent || currentDay == child.formatedDate) && !child.disabled,'is-today': child.isToday, 'is-disabled': child.disabled}">
                    <div class="inner" :class="{'center':!child.zhou}">
                      <slot :year="year" :month="month" :child="child" :row="k1" :col="k2" :raw-date="formatDate(year, month, child)" :show-date="replaceText(child.day, formatDate(year, month, child))" :is-show="showChild(year, month, child)" name="each-day">
                        <div class="date"  v-show="showChild(year, month, child)">{{replaceText(child.day, formatDate(year, month, child))}}</div>
                        <!-- <div class="vux-calendar-each-work" v-if="child.zhou">{{child.zhou}}</div>
                        <div class="vux-calendar-each-work" v-if="!child.zhou"></div> -->
                        <div v-html="renderFunction(k1, k2, child)" v-show="showChild(year, month, child)"></div>
                      </slot>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import format from '../JS/format'
import { getDays, zero } from '../JS/date'

export default {
  name: 'Calendar',
  components: {},
  props: {
    showCalendar: {
      type: Boolean,
      default: false
    },
    target: {
      type: [Object, String, Array],
      default: () => {}
    },
    value: {
      type: [String, Array],
      default: ''
    },
    startDate: {
      type: String
    },
    endDate: {
      type: String
    },
    disableWeekend: {
      type: Boolean,
      default: false
    },
    showLastMonth: {
      type: Boolean,
      default: true
    },
    showNextMonth: {
      type: Boolean,
      default: true
    },
    renderMonth: {
      type: Array, // [2018, 8]
      default () {
        return [null, null]
      }
    },
    renderFunction: {
      type: Function,
      default: () => ''
    },
    returnSixRows: {
      type: Boolean,
      default: true
    },
    replaceTextList: {
      type: Object,
      default () {
        return {}
      }
    },
    disablePast: {
      type: Boolean,
      default: false
    },
    disableFuture: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      multi: false,
      year: 0,
      month: 0,
      days: [],
      today: format(new Date(), 'YYYY-MM-DD'),
      months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      currentValue: '',
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      selectDay: false,
      isShowWeek: false,
      showDay: '',
      calendarDate: '',
      scheduleList: '',
      scheduleUnitOrderList: '',
      currentDay: ''
    }
  },
  created () {
    this.currentDay = ''
    this.currentValue = this.value
    this.multi = Object.prototype.toString.call(this.currentValue) === '[object Array]'
  },
  mounted () {
    if (this.multi) {
      for (let i = 0; i < this.currentValue.length; i++) {
        this.$set(this.currentValue, i, this.convertDate(this.currentValue[i]))
      }
    } else {
      this.currentValue = this.convertDate(this.currentValue)
    }
    this.showDay = this.days
    this.render(this.renderMonth[0], this.renderMonth[1] - 1)
  },
  computed: {
    _weeksList () {
      // if (!this.weeksList || !this.weeksList.length) {
      return ['日', '一', '二', '三', '四', '五', '六']
      // } else {
      // return this.weeksList
      // }
    },
    _replaceTextList () {
      const rs = {}
      for (let i in this.replaceTextList) {
        rs[this.convertDate(i)] = this.replaceTextList[i]
      }
      return rs
    }
  },
  watch: {
    month (val) {
      this.calendarDate = String(this.year) + '-' + String(val + 1)
      // this.getInfo()
    },
    days (val) {
      this.showDay = val
    },
    value (val) {
      this.currentValue = this.multi ? val : this.convertDate(val)
    },
    currentValue (val) {
      const value = this.multi
        ? this.currentValue[this.currentValue.length - 1]
        : this.currentValue
      if (this.renderOnValueChange) {
        this.render(null, null, value)
      } else {
        this.render(this.year, this.month, value)
      }
      this.$emit('input', this.currentValue)
      this.$emit('on-change', this.currentValue)
    },
    renderFunction () {
      this.render(this.year, this.month, this.currentValue)
    },
    returnSixRows (val) {
      this.render(this.year, this.month, this.currentValue)
    },
    startDate (val) {
      this.render(this.year, this.month, this.currentValue)
    },
    endDate (val) {
      this.render(this.year, this.month, this.currentValue)
    },
    disablePast () {
      this.render(this.year, this.month, this.currentValue)
    },
    disableFuture () {
      this.render(this.year, this.month, this.currentValue)
    }
  },
  methods: {
    // getInfo () {
    //   this.axios({
    //     method: 'POST',
    //     url: this.API_URL.getCalendarInfo,
    //     data: {calendarDate: this.calendarDate}
    //   }).then(res => {
    //     if (res.data.resultCode === 20000) {
    //       this.scheduleList = res.data.resultData.scheduleList
    //       for (var k in this.scheduleList) {
    //         for (var i in this.days) {
    //           for (var j in this.days[i]) {
    //             if (this.scheduleList[k].orderTime === this.days[i][j].formatedDate) {
    //               this.$set(this.days[i][j], 'zhou', this.scheduleList[k].shortName)
    //             }
    //           }
    //         }
    //       }
    //     }
    //   })
    // },
    getDate () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      month = month < 10 ? '0' + month : month
      day = day < 10 ? '0' + day : day
      return year + '-' + month + '-' + day
    },
    showWeek () {
      this.isShowWeek = !this.isShowWeek
      var allDays = this.days
      var date = new Date()
      var weekday = date.getDay()
      date.setDate(date.getDate() - weekday)
      var day = date.getDate()
      console.log(this.days)
      var weekDays = allDays.filter(item => {
        return item[0].day === day
      })
      var monthDays = allDays
      if (this.isShowWeek) {
        this.showDay = weekDays
      } else {
        this.showDay = monthDays
      }
    },
    cancelCalendar () {
      this.$emit('cancelCalendar')
    },
    confirmCalendar () {
      console.log('currentVal', this.currentValue)
      console.log('currenttarget', this.$props.target)
      this.$emit('confirmCalendar', this.$props.target, this.currentValue)
    },
    switchViewToToday () {
      const today = new Date()
      this.render(today.getFullYear(), today.getMonth())
    },
    switchViewToCurrentValue () {
      if (!this.currentValue || (this.multi && !this.currentValue.length)) {
        return
      }

      let value
      let year
      let month
      if (typeof this.currentValue === 'string') {
        value = this.currentValue
      } else {
        value = this.currentValue[0]
      }
      const splitList = value.split('-')
      year = parseInt(splitList[0], 10)
      month = parseInt(splitList[1], 10)
      this.switchViewToMonth(year, month)
    },
    switchViewToMonth (year, month) {
      if (!year || !month) {
        return this.switchViewToToday()
      }
      this.render(year, month - 1)
    },
    getDates () {
      return this.days
    },
    replaceText (day, formatDay) {
      let text = this._replaceTextList[formatDay]
      if (!text && typeof text === 'undefined') {
        return day
      } else {
        return text
      }
    },
    convertDate (date) {
      return date === 'TODAY' ? this.today : date
    },
    buildClass (index, child) {
      let isCurrent = false
      if (!child.isLastMonth && !child.isNextMonth) {
        if (this.multi && this.currentValue.length > 0) {
          isCurrent =
            this.currentValue.indexOf(
              this.formatDate(this.year, this.month, child)
            ) > -1
        } else {
          isCurrent =
            this.currentValue === this.formatDate(this.year, this.month, child)
        }
      }
      const className = {
        current: child.current || isCurrent,
        'is-disabled': child.disabled,
        'is-today': child.isToday
      }
      className[`is-week-${index}`] = true
      return className
    },
    render (year, month) {
      let data = null
      const value = this.multi
        ? this.currentValue[this.currentValue.length - 1]
        : this.currentValue
      data = getDays({
        year: year,
        month: month,
        value,
        rangeBegin: this.convertDate(this.startDate),
        rangeEnd: this.convertDate(this.endDate),
        returnSixRows: this.returnSixRows,
        disablePast: this.disablePast,
        disableFuture: this.disableFuture
      })
      this.days = data.days
      this.year = data.year
      this.month = data.month
      console.log(this.year + 'render')
      console.log(this.month + 'month')
    },
    formatDate: (year, month, child) => {
      return [year, zero(child.month + 1), zero(child.day)].join('-')
    },
    prev () {
      if (this.month === 0) {
        this.month = 11
        this.year = this.year - 1
      } else {
        this.month = this.month - 1
      }
      this.render(this.year, this.month)
    },
    next () {
      if (this.month === 11) {
        this.month = 0
        this.year = this.year + 1
      } else {
        this.month = this.month + 1
      }
      this.render(this.year, this.month)
    },
    go (year, month) {
      this.render(year, month)
    },
    select (k1, k2, data) {
      for (var i in this.days) {
        for (var j in this.days[i]) {
          this.days[i][j].isCurrent = false
        }
      }
      data.isCurrent = true
      this.currentDay = data.formatedDate
      this.$emit('changeUnitInfo', data.formatedDate)
    },
    currentValueChange () {
      if (this.multi) {
        for (let i = 0; i < this.currentValue.length; i++) {
          this.$set(
            this.currentValue,
            i,
            this.convertDate(this.currentValue[i])
          )
        }
      } else {
        this.currentValue = this.convertDate(this.currentValue)
      }
      const value = this.multi
        ? this.currentValue[this.currentValue.length - 1]
        : this.currentValue
      if (this.renderOnValueChange) {
        this.render(null, null, value)
      } else {
        this.render(this.year, this.month, value)
      }
      this.$emit('input', this.currentValue)
    },
    showChild (year, month, child) {
      if (this.replaceText(child.day, this.formatDate(year, month, child))) {
        return (
          (!child.isLastMonth && !child.isNextMonth) ||
          (child.isLastMonth && this.showLastMonth) ||
          (child.isNextMonth && this.showNextMonth)
        )
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.calendar {
  top: 0;
}
.calendar-year > span,
.calendar-month > span {
  position: absolute;
  top: -10px;
  left: 25%;
  display: inline-block;
  padding: 0.16rem;
}
.week{
  font-size: 12px;
}
.calendar-year > span.calendar-header-right-arrow,
.calendar-month > span.calendar-header-right-arrow {
  left: auto;
  right: 25%;
}
.vux-prev-icon,
.vux-next-icon {
  position: absolute;
  left: 0;
  top: 0.3rem;
  display: inline-block;
  width: 0.28rem;
  height: 0.28rem;
  border: 0.01rem solid #ccc;
  border-radius: 0;
  border-top: none;
  border-right: none;
  transform: rotate(45deg);
  margin-left: 0.3rem;
  line-height: 0.8rem;
}
.vux-next-icon {
  transform: rotate(-135deg);
  left: auto;
  top: 0.28rem;
  right: 0.3rem;
}
.is-weekend-disabled td.is-week-list-0,
.is-weekend-disabled td.is-week-list-6,
.is-weekend-disabled td.is-week-0,
.is-weekend-disabled td.is-week-6 {
  color: #888 !important;
  pointer-events: none;
}
.inline-calendar a {
  color: black !important;
  text-decoration: none;
  tap-highlight-color: rgba(0, 0, 0, 0);
}
.calendar-year,
.calendar-month {
  position: relative;
}
.calendar-header {
  font-size: 1.2em;
  overflow: hidden;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
}
.calendar-header > div {
  float: left;
  width: 100%;
  text-align: center;
  overflow: hidden;
}
.calendar-header span:last-of-type {
  float: right;
  vertical-align: bottom;
}
.switch-btn,
.calendar-title {
  display: inline-block;
  border-radius: 0.08rem;
  line-height: 0.6rem;
}
.switch-btn {
  width: 0.6rem;
  margin: 0.1rem;
  color: #1890FF;
  font-family: 'SimSun';
}
.calendar-title {
  padding: 0 6%;
  color: #333;
}
.switch-btn:active,
.calendar-title:active,
.calendar-header a.active {
  background-color: #1890FF;
  color: #fff;
}
.calendar-week {
  overflow: hidden;
}
.calendar-week span {
  float: left;
  width: 14.28%;
  font-size: 0.32rem;
  line-height: 0.68rem;
  text-align: center;
}
.inline-calendar {
  width: 100%;
  background: #fff;
  border-radius: 0.04rem;
  transition: all 0.5s ease;
}
.inline-calendar td.is-today .inner,
.inline-calendar td.is-today.is-disabled {
  // color:#587df7;
  color: white;
  background-color: #1890FF;
  border-radius: 50%;
  opacity: 0.5;
}
.calendar-enter,
.calendar-leave-active {
  opacity: 0;
  transform: translate3d(0, -10px, 0);
}
.calendar:before {
  position: absolute;
  left: 0.6rem;
  top: -0.2rem;
  content: '';
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: #dedede;
}
.inline-calendar table {
  clear: both;
  width: 100%;
  border-collapse: collapse;
  color: #444444;
}
.inline-calendar th {
  color: #BBBBBB;
  font-weight: normal;
  line-height: 1.5;
}
.inline-calendar td {
  text-align: center;
  vertical-align: middle;
  font-size: 0.35rem;
  position: relative;
  border-radius: 50%;
  height: 42px !important;
  font-size: 0.28rem;
}
.inline-calendar td .inner {
  padding: 0.08rem 0;
  width: 36px;
  height: 36px;
  margin: 0 auto;
}
.center{
  display: flex;
  justify-content:center;
  align-items:Center;
}
.inline-calendar td.week {
  pointer-events: none !important;
  cursor: default !important;
}
.inline-calendar td.is-disabled {
  color: #bbb !important;
  pointer-events: none !important;
}
.inline-calendar td  div.date {
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  line-height: 17px;
  font-size: 12px;
}
.inline-calendar td.current .inner {
  background-color: #1890FF;
  color: #fff !important;
  border-radius: 50%;
}
.vux-calendar-each-work {
  font-size: 0.2rem;
}
.picker-enter-active {
  transition: all 0.3s ease;
}

.picker-leave-active {
  transition: all 0.3s ease;
}

.picker-enter,
.picker-leave-to {
  transform: translateY(100%);
}

.picker-leave,
.picker-enter-to {
  transform: translateY(0);
}

.dot{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  right: 30px;
  bottom: -15px;
  img{
    position: absolute;
    left: 7px;
    top: 10px;
  }
}
.kdui-actionsheet__menu {
  position: relative;
}
</style>
