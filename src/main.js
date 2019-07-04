//入口
import Vue from 'vue'

//按需导入 Mint-ui
import {Header} from 'mint-ui'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入根组件
import app from './APP.vue'

Vue.component(Header.name,Header)

var vm = new Vue({
    el:"#app",
    render:h=>h(app)   
})