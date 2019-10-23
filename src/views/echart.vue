<template>
  <div class="mainPage">
    <div id="bar" :style="{width: '100%', height: '300px'}"></div>
    <div id="pie" :style="{width: '100%', height: '300px'}"></div>
    <!-- <div id="map" :style="{width: '100%', height: '300px'}"></div> -->
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
    this.drawPie()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('bar'))
      // 绘制图表
      myChart.setOption({
        title: { text: '柱状图' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    drawPie () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('pie'))
      // 绘制图表
      myChart.setOption({
        title: { text: '饼图' },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   type: 'scroll',
        //   orient: 'vertical',
        //   right: 10,
        //   top: 20,
        //   bottom: 20
        // },
        // xAxis: {
        //   data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        // },
        // yAxis: {},
        series: [{
          name: '销量',
          type: 'pie',
          data: [{ value: 335, name: '直接访问' },
            { value: 210, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 548, name: '搜索引擎' }]
        }]
      })
    }
  }
}
</script>
<style scoped>
.mainPage{
  height: 100%;
  background-color: #fff;
}
</style>
