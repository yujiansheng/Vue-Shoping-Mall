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
// import {Header,Swipe,SwipeItem,Toast,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import {Toast} from 'mint-ui'
window.Toast = Toast;

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import Vuex from 'vuex'
Vue.use(Vuex)

var car_num = JSON.parse(localStorage.getItem('car')||'[]');

var store = new Vuex.Store({//将vuex创建的vuex实列挂载到vm上任何组件都能通过$store的方式访问到
    state:{
        //相当于组件的data
        //如果在组建中想要访问store中的数据，只能通过$store.state.***访问
        car: car_num //保存购物车里面的商品数据 {id:商品的id，count：购买的数量，price：商品的单价，selected：是否已选中}
    },
    mutations:{//通过this.$store.commit(方法名称，‘唯一参数’)//如果要操作store中的state值，只能通过调用mutations 提供的方法，才能操作对应的数据，不推荐直接操作state中的数据，因为如果数据紊乱，不能快速的定位到错误的原因
        addToCar(state,goodsinfo){
            var bool=false;
            state.car.some(item=>{
                if (item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count);
                    bool = true;
                    return true;
                }
            })
            if(!bool){
                state.car.push(goodsinfo);
            }

            //当更新car后 将car数组保存到localStorage中
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        updateGoodsInfo(state,goodsinfo){
            state.car.some(item=>{
                if (item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count);
                    return true;
                }
            })
             //当修改完商品数量，把最新的保存到 本地存储中
             localStorage.setItem('car', JSON.stringify(state.car));
        },
        removeFromCar(state,id){
              state.car.some((item,i)=>{
                  if(item.id==id){
                      state.car.splice(i,1);
                      return true;
                  }
              })
              //将删除完成后的最新的数据保存到 本地存储中
              localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters:{
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count;
            })
            return c;
        },
        getGoodsCount(state){
            var o={};
            state.car.forEach(item=>o[item.id]=item.count);
            return o;
        }
    }
})
 

//导入路由
import router from './router.js'

var vm = new Vue({
    el:"#app",
    router,
    store,
    render:h=>h(app)   
})