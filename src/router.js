import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcaeContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/NewsList/NewsList.vue'
import NewsInfo from './components/NewsList/NewsInfo.vue'
import PhotosList from './components/photos/PhotosList.vue'

var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:ID',component:NewsInfo},
        {path:'/home/photolist',component:PhotosList}
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮的类（router-link-active）
})

export default router;