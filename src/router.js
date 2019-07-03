import account from './main/Account.vue'
import goodslist from './main/GoodslList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
//手动安装 vuerouter
Vue.use(VueRouter);

var router = new VueRouter({
    routes: [{
            path: '/account',
            component: account,
            children: [{
                    path: 'login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                },
            ]
        },
        {
            path: '/goodslist',
            component: goodslist
        }
    ]
})

export default router;