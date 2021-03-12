// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
// 引入路由
import router from './router'

Vue.config.productionTip = false
// 声明插件使用
Vue.use(VueResource) //内部会给vm对象添加一个$http 它与两个方法一个叫get（） 一个叫post（）
/* eslint-disable no-new */
new Vue({//配置对象的属性名都是一些确定的属性名
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
