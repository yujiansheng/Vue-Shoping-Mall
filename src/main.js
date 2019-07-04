//入口
import Vue from 'vue'
//导入路由包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入 vue-resource 
import VueResource from 'vue-resource'
//安装 vue-resource //就可以通过 this.$http()发起请求
Vue.use(VueResource)

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入根组件
import app from './APP.vue'


//按需导入 Mint-ui
import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入路由
import router from './router.js'

var vm = new Vue({
    el:"#app",
    router,
    render:h=>h(app)   
})