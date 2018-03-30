// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import router from './router'

//swiper
import '../node_modules/swiper/dist/css/swiper.min.css'

//element-ui
// import '../node_modules/element-ui/lib/theme-chalk/index.css'
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)

//mint-ui

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//my-ui
import MyUI from './my-ui'
Vue.use(MyUI)

//config
import config from './modules/config'

//filters
import './modules/filters'

//directives
import './modules/directives'


//store
import store from  './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',  
  router,//在根实例里配置router可以使里面的任意组件都能用得到router的功能
  data:{config},
  store,
  components: { App },
  template: '<App/>'
})
