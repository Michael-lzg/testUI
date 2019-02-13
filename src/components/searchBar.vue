<template>
  <div class="search" :class="{'bgf':whiteBackGound}">
    <form action="javascript:;" class="search-form">
      <input type="search" class="search-input" :class="{'bg8':whiteBackGound}" @focus="onFocus" :placeholder="isFocus ? defaultText: ''" v-model.trim="keyword" @keydown.enter="enter">
      <span class="cancel-btn" @click="cancel">取消</span>
      <i class="iconfont icon-sousuo2 c8 iconSearch"></i>
      <i class="iconfont icon-iconnormalsousuokuangquxiao c8 del"  @click="del" v-if="keyword"></i>
      <div class="placeholder" :class="{'bg8':whiteBackGound}" @click="placeholderClick" v-if="!isFocus">
        <i class="iconfont icon-sousuo2 c8 icon-search"></i>
        <span class="vm" v-show="!keyword && !isFocus" v-text="defaultText"></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isFocus: false,
      keyword: ''
    }
  },
  props: {
    defaultText: {
      type: String,
      default: '搜索'
    },
    whiteBackGound: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onFocus () {
      this.isFocus = true
    },
    cancel () {
      this.isFocus = false
      this.keyword = ''
      this.$emit('cancelSearch', '')
    },
    enter () {
      if (!this.keyword) return
      this.$emit('toSearch', this.keyword)
      this.$el.querySelector('.search-input').blur()
    },
    placeholderClick () {
      this.$el.querySelector('.search-input').focus()
    },
    del () {
      this.keyword = ''
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/custom.less';
  .search{
    width: 100%;
    padding: 0.2rem 0.3rem;
  }
  .search-form {
    position: relative;
    height: 0.6rem;
  }

  .search-input {
    height: 0.6rem;
    width: 87%;
    border-radius: 0.6rem;
    font-size: 0.28rem;
    text-indent: 0.6rem;
    background-color: #fff;
    position: absolute;
    top: 0;
  }

  .placeholder {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    position: absolute;
    color: #888888;
    top: 0px;
    background-color: #fff;
    border-radius: 0.6rem;
    text-align: center;
    font-size: 0.28rem;
    >img{
      width: 0.32rem;
      vertical-align: middle;
    }
  }

  .cancel-btn {
    position: absolute;
    right: 0;
    height: 0.6rem;
    line-height:  0.6rem;
    transition: .5s ease-in;
    font-size: 0.32rem;
    color: @kduiThemeColor;
  }
  .iconSearch{
    position: absolute;
    left: 0.2rem;
    top: 0.14rem;
    width: 0.32rem;
  }
  .del{
    position: absolute;
    right: 1.1rem;
    top: 0.14rem;
    width: 0.32rem;
  }
  .bgf{
    background-color: #fff !important;
  }
  .bg8{
    background-color: #F1F2F5 !important;
  }
</style>
