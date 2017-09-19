// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**
 * 仅仅支持vue版本2.4以上
 */
Vue.config.errorHandler = function (err, vm, info) {
  console.error(`error message ==> ${err}, error component ==> ${vm}, info ==> ${info}`)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
