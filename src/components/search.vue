<style lang="less">
  .search{
    width: 100%;
    padding: 10px 15px;
    background-color: #fff;
  }
  .search-form {
    position: relative;
  }

  .search-input {
    height: 30px;
    width: 100%;
    border-radius: 30px;
    font-size: 14px;
    text-indent: 15px;
    background-color: rgba(3, 3, 3, .1);
  }

  .placeholder {
    width: 100%;
    height: 30px;
    line-height: 30px;
    position: absolute;
    color: #8e8e93;
    top: 0px;
    background-color: #EEEEEE;
    border-radius: 30px;
    text-align: center;
    font-size: 14px;
  }

  .cancel-btn {
    position: absolute;
    right: 0;
    color: #01d386;
    height: 30px;
    line-height: 30px;
    transition: .5s ease-in;
  }

  .focus {
    width: 100%;
    .search-form {
      background-color: #FFFFFF;
    }
    .search-input {
      background-color: rgba(3, 3, 3, .1);
      width: 300px;
    }
    .cancel-btn {
      right: 0px;
      top: 0px;
    }
  }
</style>
<template>
  <div class="search">
    <form action="javascript:;" class="search-form">
      <input type="search" class="search-input" @focus="onFocus" :placeholder="isFocus ? '搜索': ''" v-model.trim="keyword" @keydown.enter="enter">
      <div class="placeholder" @click="placeholderClick" v-if="!isFocus">
        <img src="../assets/img/search.png" alt="" width="16" class="icon-search">
        <span class="vm" v-show="!keyword && !isFocus" v-text="'搜索关键词'"></span>
      </div>
      <!-- <span class="cancel-btn fs-18" @click="cancel" v-if="isFocus">取消</span> -->
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isFocus: false,
      keyword: '',
      labelList: [],
      selectedLabel: {},
      isEnter: false
    }
  },
  props: {
    isCategory: {
      type: Boolean,
      default: false
    },
    label: {
      type: Array
    },
    cancelText: {
      type: String
    }
  },
  methods: {
    onFocus () {
      this.isFocus = true
      this.$emit('focus')
      this.label && setTimeout(() => {
        this.labelList = this.label
        this.label.forEach(i => {
          if (i.selected) {
            this.selectedLabel = i
          }
        })
      }, 200)
    },
    clear () {
      this.isEnter = false
      this.keyword = ''
      this.$el.querySelector('.search-input').focus()
    },
    cancel () {
      this.isEnter = false
      this.isFocus = false
      this.keyword = ''
      this.selectedLabel = {}
      this.$emit('cancel')
    },
    selectLabel (item) {
      this.selectedLabel = item
      this.labelList.forEach(i => {
        this.$set(i, 'selected', false)
      })
      this.$set(item, 'selected', true)
      this.$el.querySelector('.search-input').focus()
    },
    enter () {
      this.isEnter = true
      if (!this.keyword) return
      this.$emit('enter', {
        ...this.selectedLabel,
        keyword: this.keyword
      })
      this.$el.querySelector('.search-input').blur()
    },
    placeholderClick () {
      this.$el.querySelector('.search-input').focus()
    }
  }
}
</script>
