import Vue from 'vue'
//导入 app 组件
import app from './APP.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css'

import './lib/mui/css/mui.css'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import {Button} from 'mint-ui'

Vue.component(Button.name,Button)

//导入 自定义路由模块
import router from './router'

var vm = new Vue({
  el: '#app',
  render: h => h(app),
  router
})