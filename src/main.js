// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import THREE from 'three'
import axios from 'axios'
import './common/index.css'
import '../config/fine.css.js'
Vue.prototype.$http = axios
console.log(devicePixelRatio)
import Vuex from 'vuex'

Vue.use(Vuex)
var {store} = require('@/../vuex-store/store.js')
import {
  Autocomplete,
  Input,
  Button,
  Icon,
  Row,
  Col,
  Carousel,
  CarouselItem,
  Loading
  } from 'element-ui'
   Vue.prototype.$loading = Loading

Vue.use(Autocomplete)
Vue.use(Input)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Loading)


Vue.use(VueRouter)
Vue.use(VueResource)


var songs =  resolve => require(['./components/songs/Song.vue'], resolve)
var popularList = resolve => require(['./components/body/PopularList.vue'], resolve)
var classic = resolve => require(['./components/body/Classic.vue'],resolve)
var pure = resolve => require(['./components/body/Pure.vue'],resolve)
var radio = resolve => require([ './components/body/Radio.vue'], resolve)
var ranking = resolve => require(['@/allPs/Ranking.vue'], resolve)
//var search = resolve => require(['@/allPs/Search.vue'],resolve)
var home = require('@/allPs/Home.vue')
//var search = resolve => require([ '@/allPs/Search.vue'], resolve)
var search = require( '@/allPs/Search.vue')
var personal = resolve => require(['@/allPs/Personal.vue'],resolve)

const routes = [
  {path: '/', name: 'home', component: home,
        children: [{
          path: 'popular',
          name: 'popular',
          component: popularList,
          props: true
        },
        {
          path: 'radio',
          name: 'radio',
          component: radio,
          props: true
        },
          {
            path: 'pure',
            name: 'pure',
            component: pure,
            props: true
          },
          {
            path: 'classic',
            name: 'classic',
            component: classic,
          }]
  },
  {path: '/ranking', name: 'ranking', component: ranking},
  {path: '/search', name: 'search', component: search},
  {path: '/personal', name: 'personal', component: personal}
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  let loadingInstance1 = Loading.service({fullscreen: true});
  store._modules.root.state.loading = loadingInstance1
  if(to.name == 'search'){
    setTimeout(()=>{
      loadingInstance1.close()
  },6000)
  }else{
    setTimeout(()=>{
      loadingInstance1.close()
    },500)
  }
  next()
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
