/**
 * Created by ThinkPad-wzw on 2017/1/7.
 * DESC: 该文件是工程的入口文件，请无修改
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

import App from './App'

Vue.use(VueRouter)
Vue.use(ElementUI)

// 这里应该是大的功能模块
// import Product from './components/production/Product'
// import Customer from './components/customer/Customer'
// import Helps from './components/Helps'
// import Nonepage from './components/commons/404'

// 此配置内容可以独立成一个单独的配置文件 router.js
// const routes = [
//   { path: '/product', component: Product },
//   { path: '/customer', component: Customer },
//   { path: '/helps', component: Helps },
//   { path: '/', redirect: '/helps' },
//   { path: '/*', component: Nonepage }
// ]
import * as routes from './route.js'
// console.log('$$$$$$$$$$$$$$$$')
// console.log(routes.routeConf)
// console.log('$$$$$$$$$$$$$$$$')
// 引入路由
const router = new VueRouter({
  // routes // （缩写）相当于 routes: routes
  routes: routes.routeConf
})

// 引入状态管理

/*
    关于h => h(App) 的说明：

    首先需要了解这是 es 6 的语法，表示 Vue 实例选项对象的 render 方法作为一个函数，接受传入的参数 h 函数，返回 h(App) 的函数调用结果。
        render: h => h(App) 等同于下面的函数：
        render: function(h){
            return h(App);
        }
    其次，Vue 在创建 Vue 实例时，通过调用 render 方法来渲染实例的 DOM 树。

    最后，Vue 在调用 render 方法时，会传入一个 createElement 函数作为参数，也就是这里的 h 的实参是 createElement 函数，然后 createElement 会以 APP 为参数进行调用，关于 createElement 函数的参数说明参见：Element-Arguments
*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // router:router,的缩写
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
