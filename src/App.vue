<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
