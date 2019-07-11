//入口
import Vue from 'vue'
//导入路由包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入格式化时间的插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern);
})

//导入 vue-resource 
import VueResource from 'vue-resource'
//安装 vue-resource 
//就可以通过 this.$http()发起请求
Vue.use(VueResource)
//设置请求的根路径
//Vue.http.options.root = 'http://vue.studyit.io';
//全局设置 post 时候表单数据格式组织形式  application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;


import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入根组件
import app from './APP.vue'


//按需导入 Mint-ui
import {Header,Swipe,SwipeItem,Toast,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
window.Toast = Toast;

//导入路由
import router from './router.js'

var vm = new Vue({
    el:"#app",
    router,
    render:h=>h(app)   
})