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
        component: Msite
},
{
    path:'/order',
        component:Order
},
{
    path:'/search',
        component:Search
},
{
    path:'/profile',
        component:Profile
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