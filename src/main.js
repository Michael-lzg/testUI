// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import showTip from './components/showTip'
import Dialog from './components/dialog'
// import vConsole from './JS/vconsole'
// Vue.use(vConsole)
Vue.prototype.$showTip = showTip
Vue.prototype.$dialog = Dialog

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
