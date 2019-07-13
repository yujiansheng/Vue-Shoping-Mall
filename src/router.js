import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotosList from './components/photos/PhotosList.vue'
import PhotosInfo from './components/photos/Photoinfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer,name: "home"},
        {path:'/member',component:MemberContainer,name: "member"},
        {path:'/shopcar',component:ShopcarContainer,name: "shopcar"},
        {path:'/search',component:SearchContainer,name: "search"},
        {path:'/home/newslist',component:NewsList,name: "newslist"},
        {path:'/home/newsinfo/:ID',component:NewsInfo, name: "newsinfo"},
        {path:'/home/photolist',component:PhotosList,name: "photolist"},
        {path:'/home/photoinfo/:ID',component:PhotosInfo,name: "photoinfo"},
        {path:'/home/goodslist',component:GoodsList,name: "goodslist"},
        {path:'/home/goodsinfo/:ID',component:GoodsInfo,name: "goodsinfo"},
        {path:'/home/goodsdesc/:ID',component:GoodsDesc,name: "goodsdesc"},
        {path:'/home/goodscomment/:ID',component:GoodsComment,name: "goodscomment"}
    ],
    linkActiveClass:'mui-active',//覆盖默认的路由高亮的类（router-link-active）
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

export default router;