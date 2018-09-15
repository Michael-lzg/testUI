<template>
  <div>
    <region-picker :province="province" :city="city" :district="district" @onchange="change">
    </region-picker>
  </div>
</template>

<script>
import { RegionPicker } from 'vue-region-picker'
import REGION_DATA from 'china-area-data'
RegionPicker.region = REGION_DATA
export default {
  data () {
    return {
      province: '',
      city: '',
      district: ''
    }
  },
  components: { RegionPicker },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
