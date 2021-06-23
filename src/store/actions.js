/*
* 包含n个间接更改状态值的方法/对象*/

import {
    reqAddress,
    reqCategorys,
    reqShops
} from "@/api";

import {RECEIVE_ADDRESS,RECEIVE_CATEGORY,RECEIVE_SHOPS} from './mutation-type'

export default {
    /*
    * 获取当前地址信息*/
    async getAddress({commit, state}) {
        const {geohash} = state
        //发异步请求
        const result = await reqAddress(geohash)
        //请求成功后，提交给mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS,address)
        }
    },
    /*
    * 获取商品分类类别*/
    async getCategorys({commit}) {
        //发异步请求
        const result = await reqCategorys()
        //请求成功后，提交给mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORY,categorys)
        }
    },
    /*
    * 获取商家列表*/
    async getShops({commit, state}) {
        const {geohash} = state
        //发异步请求
        const result = await reqShops({geohash})
        //请求成功后，提交给mutation
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS,shops)
        }
    }
}