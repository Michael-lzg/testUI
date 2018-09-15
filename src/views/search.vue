<template>
  <div>
    <search @toSearch="toSearch"></search>
  </div>
</template>

<script>
import search from '../components/search'
export default {
  components: { search },
  methods: {
    toSearch (val) {
      alert('搜索' + val)
    }
  }
}
</script>

<style scoped>

</style>
