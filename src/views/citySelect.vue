<template>
  <div>
    <div class="listItem clearfix" @click="show1 = true">
      <div class="fl">所在地区：</div>
      <div class="fr">{{model1}}</div>
    </div>
    <div class="listItem clearfix" @click="show2 = true">
      <div class="fl">所在地区：</div>
      <div class="fr">{{model2}}</div>
    </div>
    <citySelect v-model="show1" :callback="result1" :items="district"></citySelect>
    <citySelect v-model="show2" :callback="result2" :items="district" provance="广东" city="广州市" area="天河区"></citySelect>
  </div>
</template>

<script>
import citySelect from '../components/citySelect'
import District from 'ydui-district/dist/jd_province_city_area_id'
export default {
  components: { citySelect },
  data () {
    return {
      show1: false,
      show2: false,
      model1: '请选择地区',
      model2: '广东 广州市 天河区',
      district: District
    }
  },
  methods: {
    result1 (ret) {
      console.log(ret)
      this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
    },
    result2 (ret) {
      console.log(ret)
      this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
    }
  }
}
</script>

<style scoped lang="less">
.listItem{
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  padding: 0 15px;
  margin-bottom: 10px;
}

</style>
