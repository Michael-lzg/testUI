<template>
    <ul>
      <li v-for="(item,i) in items" :key='i' class="w2" @click="toUrl(i)">
        <svg class="icon" aria-hidden="true" v-if="$route.path==item.url">
          <use :xlink:href="item.icon1"></use>
        </svg>
         <svg class="icon" aria-hidden="true" v-if="$route.path!==item.url">
          <use :xlink:href="item.icon2"></use>
        </svg>
        <div class="name" :class="{'kduiThemeColor':$route.path==item.url}">{{item.name}}</div>
      </li>
      <div class="bt1"></div>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: '组件',
          url: '/',
          icon1: '#icon-index1',
          icon2: '#icon-index0'
        },
        {
          name: '插件',
          url: '/plugin',
          icon1: '#icon-mine1',
          icon2: '#icon-mine0'
        }
      ]
    }
  },
  methods: {
    toUrl (i) {
      this.$router.replace({
        path: this.items[i].url
      })
    }
  }
}
</script>

<style scoped lang='less'>
ul {
  width: 100%;
  height: 1.1rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  li {
    float: left;
    text-align: center;
    font-size: 0.24rem;
    height: 1.1rem;
    width: 50%;
    padding-top: 0.18rem;
    .img {
      width: 0.48rem;
      height: 0.48rem;
      margin: 0 auto;
      margin-top: 0.18rem;
    }
    .name {
      text-align: center;
      color: #888888;
      line-height: 0.44rem;
    }
  }
}
svg{
  width: 0.44rem !important;
  height: 0.44rem !important;
}
</style>
