// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 这里就是引入了App.vue 这个文件 vue省略  
//其他的如果找不到就说明是从下载的哪里?
import router from './router'

import 'reset-css'
// 像这个不需要怎么操作 而是直接使用的 那么就直接引用就好了 
// import HelloWorld from '@/components/HelloWorld'

import axios from 'axios'
Vue.prototype.$http = axios
// 这里就是给Vue 添加一个原型

// Vue.config.productionTip = false


// 引入 字体图标 
//./ 表示的就是从src 这里开始引入
import "./api/font/iconfont.css"


import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



// 这个就是单页面咯  然后指向的就是App.vue 这个组件