<template>
  <div>
    <div class="title clearfix" @click="toSelect(1)">
      <span class="fl">请选择一个选择（单选）</span>
      <span class="fr">{{selectItem.name}}</span>
    </div>
    <div class="title-multi" @click="toSelect(2)">
      <div>请选择一个选择（多选）</div>
      <div>{{selectListString}}</div>
    </div>
    <k-actionSheet v-if="showSelectOne" :list="list" :multiple="multiple" :default-props="defaultProps"
                 :select-item="selectItem" title="这里是提示文本" text="这里是辅助提示文本"
                 @submitSelect="submitSelect" @cancelSelect="cancelSelect"></k-actionSheet>
    <k-actionSheet v-if="showSelectMulti" :list="list" :multiple="multiple" :default-props="defaultProps"
                 :select-list="selectList" text="这里是辅助提示文本"
                 @submitSelect="submitSelect" @cancelSelect="cancelSelect"></k-actionSheet>
  </div>
</template>

<script>
// import actionSheet from '../components/actionSheet'
import kActionSheet from '../components/actionSheet'

export default {
  name: 'actionSheet',
  data () {
    return {
      selectListString: '',
      selectItem: {},
      showSelectOne: false,
      showSelectMulti: false,
      multiple: false,
      selectList: [],
      defaultProps: {
        name: 'name',
        code: 'id'
      },
      list: [
        { id: 1, name: '下拉选择一' },
        { id: 2, name: '下拉选择二' },
        { id: 3, name: '下拉选择三' },
        { id: 4, name: '下拉选择四' },
        { id: 5, name: '下拉选择五' },
        { id: 6, name: '下拉选择六' },
        { id: 7, name: '下拉选择七' },
        { id: 8, name: '下拉选择八' },
        { id: 9, name: '下拉选择九' },
        { id: 10, name: '下拉选择十' },
        { id: 11, name: '下拉选择十一' },
        { id: 12, name: '下拉选择十二' }
      ]
    }
  },
  components: { kActionSheet },
  methods: {
    toSelect (num) {
      if (num === 1) {
        this.multiple = false
        this.showSelectOne = true
        this.showSelectMulti = false
      } else if (num === 2) {
        this.multiple = true
        this.showSelectOne = false
        this.showSelectMulti = true
      }
    },
    submitSelect (val) {
      if (!this.multiple) {
        this.selectItem = val
      } else {
        let s = ''
        this.selectList = val
        for (let i = 0; i < this.selectList.length; i++) {
          s = s + this.selectList[i].name
          if (i < this.selectList.length - 1) {
            s = s + ','
          }
        }
        this.selectListString = s
      }
      this.showSelectOne = false
      this.showSelectMulti = false
    },
    cancelSelect () {
      this.showSelectOne = false
      this.showSelectMulti = false
    }
  }
}
</script>

<style scoped>
.title,.title-multi{
  /* height: 1rem; */
  background-color: #fff;
  padding: 0.22rem 0.3rem;
  font-size: 0.32rem;
  line-height: 0.56rem;
  margin-bottom: 0.2rem;
}
  /* .title-multi{
    background-color: #fff;
    padding: 0.22rem 0.3rem;
    font-size: 0.32rem;
    line-height: 0.56rem;
  } */
</style>
