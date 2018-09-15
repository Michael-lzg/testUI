<template>
  <div class="search">
    <div class="initSearch" v-if="!isSearch" @click="toFocus">
      <img src="../assets/img/search.png" alt="" width="16">
      <span>请输入搜索内容</span>
    </div>
    <div class="input" v-if="isSearch">
      <input type="text" id="search" placeholder="请输入搜索内容" v-model.trim="keyword" @change="toSearch">
      <img src="../assets/img/search.png" alt="" width="16" class="icon-search">
      <!-- <img src="../assets/img/del_img.png" alt="" width="16" class="del"> -->
      <span class="cancel fr" @click="cancel">取消</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSearch: false,
      keyword: ''
    }
  },
  methods: {
    toFocus () {
      this.isSearch = true
      this.$nextTick(() => {
        document.getElementById('search').focus()
      })
    },
    cancel () {
      this.isSearch = false
    },
    toSearch () {
      if (this.keyword && this.isSearch) {
        this.$emit('toSearch', this.keyword)
      }
    }
  }
}
</script>

<style scoped lang="less">
.search {
  padding: 10px 15px;
}
.initSearch {
  width: 100%;
  height: 30px;
  background-color: #fff;
  line-height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-size: 14px;
  color: #bbb;
  >span{
    text-indent: 6px;
  }
}
.input{
   width: 100%;
   height: 30px;
   line-height: 30px;
   position: relative;
   .icon-search{
     position: absolute;
     left: 14px;
     top: 8px;
   }
   .del{
     position: absolute;
     right: 14px !important;
     top: 8px;
   }
   >input{
     width: 87%;
     height: 30px;
     border-radius: 30px;
     background-color: #fff;
     font-size: 14px;
     text-indent: 32px;
   }
   .cancel{
     color: #1890ff;
   }
}
</style>
