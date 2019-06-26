// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import  BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import VueRouter from 'vue-router' // 引进路由,创建单页面的应用
import Home from './components/home'
import Main from './components/main'
import AboutMe from './components/more/More'
import photoRegion from './components/Photo'
import searchPage from './components/search'
import aboutUsPage from './components/more/aboutUs'
import joinUsPage from './components/more/joinUs'
import contactUsPage from './components/more/contactUs'
import usagePage from './components/more/usage'
import feedBackPage from './components/more/feedBack'
import helpCenterPage from './components/more/helpCenter'
import login from './components/interface/login'
import register from './components/interface/register'
import axios from 'axios'
Vue.use(VueRouter) // 定义使用
Vue.prototype.$http = axios; // 使用axios请求数据

Vue.use(BaiduMap, {
  ak: '8uBTK6kGFB8AHMkpB7HlN1MSGPmKrna1'  //这个地方是官方提供的ak密钥
})

Vue.use(ElementUI)
Vue.config.productionTip = false

let router = new VueRouter(
  {
    mode: 'history',
    routes: [
       {
         path: '/',
         name: 'Home',
         component: Home,
         redirect: 'main',
         children:[
           {
             path:'/main',
             component: Main,
           },
           {
             path:'more',
             component: AboutMe,
             redirect: 'aboutUs',
             children:[
               {
                 path: '/aboutUs',
                 component: aboutUsPage
             },
               {
                 path: '/joinUs',
                 component: joinUsPage
               }, {
                 path: '/contactUs',
                 component: contactUsPage
               }, {
                 path: '/usage',
                 component: usagePage
               },{
                 path: '/feedBack',
                 component: feedBackPage
               },{
                 path: '/helpCenter',
                 component: helpCenterPage
               }
             ]
           },
           {
             path:'/photo',
             component:photoRegion,
           },{
             path:'/search',
             component:searchPage,
           },

         ]
       },
       {
         path:'/login',
         component: login,
       },
      {
        path:'/register',
        component: register,
      }
    ]
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
