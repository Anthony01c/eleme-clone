/*
向外暴露路由器模块
*/
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";

//声明使用
Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    //项目中的路由
    routes
})