import Vue from 'vue'
import Main from './main.vue'

let ShowTipConstructor = Vue.extend(Main)

let instance
const showTip = function (options) {
  options = options || {}
  instance = new ShowTipConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default showTip
