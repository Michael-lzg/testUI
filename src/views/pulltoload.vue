<template>
  <div>
    <div class="list" id="list">
      <div class="listItem" v-for="(item,index) in list" :key="index">下拉加载更多{{item.num}}</div>
    </div>
  </div>
</template>

<script>
import cm from '../JS/plugin'
export default {
  data () {
    return {
      list: []
      // scrollTop: document.documentElement.scrollTop
    }
  },
  methods: {
    loadMore () {
      for (var i = 0; i < 10; i++) {
        this.list.push({
          id: i,
          num: i + 1
        })
      }
    }
  },
  computed: {
    scrollTop () {
      return document.documentElement.scrollTop
    }
  },
  watch: {
    scrollTop () {
      cm.scrollTop()
    }
  },
  created () {
    for (var i = 0; i < 20; i++) {
      this.list.push({
        id: i,
        num: i + 1
      })
    }
    var list = document.getElementById('list')
    cm.loadMore(list, this.loadMore)
  }
}
</script>

<style scoped lang='less'>
.list{
  padding: 0 15px;
  background-color: #fff;
  .listItem{
    height: 45px;
    line-height: 45px;
  }
}
</style>
