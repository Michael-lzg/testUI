<template>
  <div class="mainPage">
    <daterange v-model="date" placeholder="请输入日期区间"/>
  </div>
</template>

<script>
import 'vx-ui/lib/style/theme/index.css'
import { Daterange } from 'vx-ui' // or import Button from 'vx-ui/lib/button'

export default {
  components: { Daterange },
  data () {
    return {
      date: []
    }
  }
}
</script>

<style scoped>
</style>
