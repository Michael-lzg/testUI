<template>
  <div class="list">
    <div class="listItem" v-for="(item,index) in list" :key="index" @click="toUrl(item)">{{item.name}}
      <div class="bb1"></div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../components/footerBar'
export default {
  components: { footerBar },
  data () {
    return {
      list: [
        // {name: '单选框', url: '/radio'},
        // {name: '下拉选择', url: '/radio'},
        // {name: '底部弹出', url: '/actionSheet'},
        // {name: '底部按钮', url: '/footer'},
        // {name: 'toast提示', url: '/toast'},
        // {name: 'dialog选择', url: '/dialog'},
        // {name: 'textarea', url: '/textarea'},
        // {name: '无数据缺省页', url: '/noData'},
        // {name: '搜索框', url: '/search'},
        // {name: '倒计时', url: '/djs'},
        {name: '拖拽移动', url: '/Draggable'},
        // {name: '三级联动', url: '/region-picker'},
        {name: '选择城市', url: '/citySelect'},
        {name: '图片上传预览', url: '/uploadImg'},
        // {name: '图片上传裁剪', url: '/imgCut'},
        // {name: '获取位置并搜索周边', url: '/location'},
        {name: '柱状图/饼图', url: '/echart'},
        {name: '中国地图', url: '/chinaMap'},
        {name: '视频播放', url: '/video'}
        // {name: '时间选择器', url: '/dateTime'},
        // {name: '选择时间范围', url: '/dateTimeRang'},
        // {name: '选择年月', url: '/selectMonth'},
        // {name: '日历及日期选择器', url: '/calendar'}
        // {name: '下拉加载更多', url: '/pulltoload'}
      ]
    }
  },
  methods: {
    toUrl (item) {
      this.$router.push({
        path: item.url
      })
    }
  }
}
</script>

<style scoped lang="less">
.list{
  height: 100%;
  width: 100%;
  .listItem{
    width: 100%;
    padding: 0 15px;
    height: 45px;
    line-height: 45px;
    position: relative;
    background-color: #fff;
    // border-bottom: 1px solid #ccc;
  }
}
</style>
