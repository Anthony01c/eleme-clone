/*
* 包含n个直接用于更新状态数据的方法对象*/
import {RECEIVE_ADDRESS,RECEIVE_CATEGORY,RECEIVE_SHOPS} from './mutation-type'

export default {
    [RECEIVE_ADDRESS](state,address){
        state.address = address
    },
    [RECEIVE_CATEGORY](state,categorys){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,shops){
        state.shops = shops
    }
}