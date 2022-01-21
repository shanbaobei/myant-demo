import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'

import axios from 'axios';
Vue.prototype.$http=axios;//将axios改写到vue原型属性,调用方式例如this.$http.post(xxx)


Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
