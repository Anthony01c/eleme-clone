/*
* 对axios进行封装
* */
import axios from "axios";
import qs from 'qs'

const instance = axios.create({
    BASE_URL:'/api',//让代理服务器转发请求4000
    timeout:20000 //4.配置请求超时时间

})

//请求拦截器
instance.interceptors.request.use((config)=>{
    console.log('请求拦截器interceptors')
    //3.对请求体参数进行urlencode处理，而不使用json方式
    const data = config.data
    if (data instanceof Object){
        config.data = qs.stringify(data)
    }
    return config
})

//添加响应拦截器
instance.interceptors.response.use(
    response =>{
        console.log('响应拦截器interceptors')
        //return response
        //2.异步请求成功的数据不是response，而是response.data
        return response.data
    },
    error => {
        //return Promise.reject(error)
        //1.统一处理异常
        alert('请求出错',error.message)
        return new Promise(()=>{})//返回一个空的Promise，中断Promise链
    }
)

export default instance


