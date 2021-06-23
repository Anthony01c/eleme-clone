import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import Header from "@components/Header/Header";


Vue.config.productionTip = false
//注册全局组件
Vue.component('Header',Header)
new Vue({
  render: h => h(App),
  router//所有组件都可以读取到$router和$route
}).$mount('#app')
