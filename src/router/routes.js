/*
* 所有路由的数组
* */
import Msite from "@/pages/Msite/Msite";
import Order from "@/pages/Order/Order";
import Profile from "@/pages/Profile/Profile";
import Search from "@/pages/Search/Search";
import Login from "@/pages/Login/Login";

export default [
{
    path:'/msite',
        component: Msite,
    meta:{
        isShowFooter:true
    }
},
{
    path:'/order',
        component:Order,
    meta:{
        isShowFooter:true
    }
},
{
    path:'/search',
        component:Search,
    meta:{
        isShowFooter:true
    }
},
{
    path:'/profile',
        component:Profile,
    meta:{
        isShowFooter:true
    }
},
    {
        path:'/login',
        component:Login
    },
    {
        path: '/',
        redirect:'/msite'
    }
]