export default {
  // title: {
  //   text: 'iphone销量',
  //   x: 'center',
  //   textStyle: {
  //     color: 'black',
  //     fontSize: 20
  //   }
  // },
  title: { text: '中国地图' },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['iphoneX']
  },
  dataRange: {
    min: 0,
    max: 1000,
    x: 'left',
    y: 'bottom',
    text: ['高', '低'],
    calculable: true
    // inRange:{
    //   color: ['lightBlue', 'red'] // 蓝绿
    // }
  },
  geo: {
    show: true,
    map: 'china',
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#031525',
        borderColor: '#3B5077'
      },
      emphasis: {
        areaColor: '#2B91B7'
      }
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    x: 'right',
    y: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  roamController: {
    show: true,
    x: 'right',
    mapTypeControl: {
      china: true
    }
  },
  series: [
    {
      name: '销售量',
      type: 'map',
      mapType: 'china',
      roam: false,
      itemStyle: {
        normal: { label: { show: true } },
        emphasis: { label: { show: true } }
      },
      label: {
        // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
        normal: {
          show: true, // 是否在普通状态下显示标签。
          textStyle: {
            color: 'black'
          } // 普通状态下的标签文本样式。
        },
        emphasis: {
          show: true, // 是否在高亮状态下显示标签。
          textStyle: {
            color: '#333'
          } // 高亮状态下的标签文本样式。
        }
      },
      data: [
        { name: '北京', value: Math.round(Math.random() * 1000) },
        { name: '天津', value: Math.round(Math.random() * 1000) },
        { name: '上海', value: Math.round(Math.random() * 1000) },
        { name: '重庆', value: Math.round(Math.random() * 1000) },
        { name: '河北', value: Math.round(Math.random() * 1000) },
        { name: '河南', value: Math.round(Math.random() * 1000) },
        { name: '云南', value: Math.round(Math.random() * 1000) },
        { name: '辽宁', value: Math.round(Math.random() * 1000) },
        { name: '黑龙江', value: Math.round(Math.random() * 1000) },
        { name: '湖南', value: Math.round(Math.random() * 1000) },
        { name: '安徽', value: Math.round(Math.random() * 1000) },
        { name: '山东', value: Math.round(Math.random() * 1000) },
        { name: '新疆', value: Math.round(Math.random() * 1000) },
        { name: '江苏', value: Math.round(Math.random() * 1000) },
        { name: '浙江', value: Math.round(Math.random() * 1000) },
        { name: '江西', value: Math.round(Math.random() * 1000) },
        { name: '湖北', value: Math.round(Math.random() * 1000) },
        { name: '广西', value: Math.round(Math.random() * 1000) },
        { name: '甘肃', value: Math.round(Math.random() * 1000) },
        { name: '山西', value: Math.round(Math.random() * 1000) },
        { name: '内蒙古', value: Math.round(Math.random() * 1000) },
        { name: '陕西', value: Math.round(Math.random() * 1000) },
        { name: '吉林', value: Math.round(Math.random() * 1000) },
        { name: '福建', value: Math.round(Math.random() * 1000) },
        { name: '贵州', value: Math.round(Math.random() * 1000) },
        { name: '广东', value: Math.round(Math.random() * 1000) },
        { name: '青海', value: Math.round(Math.random() * 1000) },
        { name: '西藏', value: Math.round(Math.random() * 1000) },
        { name: '四川', value: Math.round(Math.random() * 1000) },
        { name: '宁夏', value: Math.round(Math.random() * 1000) },
        { name: '海南', value: Math.round(Math.random() * 1000) },
        { name: '台湾', value: Math.round(Math.random() * 1000) },
        { name: '香港', value: Math.round(Math.random() * 1000) },
        { name: '澳门', value: Math.round(Math.random() * 1000) }
      ]
    }
  ]
}
