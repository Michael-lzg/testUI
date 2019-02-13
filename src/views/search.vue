<template>
  <div>
    <div>
      <p>灰色底搜索框</p>
      <searchBar></searchBar>
    </div>
    <div>
      <p>白色底搜索框</p>
      <searchBar :whiteBackGound="whiteBackGound"></searchBar>
    </div>

  </div>
</template>

<script>
import searchBar from '../components/searchBar'
export default {
  name: 'search',
  components: {searchBar},
  data () {
    return {
      whiteBackGound: true
    }
  }
}
</script>

<style scoped>
p{
  font-size: 0.32rem;
  padding-left: 0.3rem;
  line-height: 0.5rem;
  padding-top: 0.2rem;
}
</style>
