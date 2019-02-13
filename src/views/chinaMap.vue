<template>
  <div>
    <div id="map" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import option from '../JS/china' // 引入配置项
import 'echarts/map/js/china' // 引入china.js地图文件
import 'echarts/theme/shine.js'
export default {
  methods: {
    drawChinaMap () {
      var myChart = echarts.init(
        document.getElementById('map'),
        'shine'
      )
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChinaMap()
  }
}
</script>

<style scoped>

</style>
