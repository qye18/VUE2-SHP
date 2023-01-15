// 对于axios进行二次封装

import axios from "axios";
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
import store from '@/store/detail'
const requests = axios.create({
  baseURL:'/api',
  // 请求5s后没有响应，就失败
  timeout:5000,
})

// 请求拦截器
requests.interceptors.request.use((config) => {
  nprogress.start();
  if (store.state.uuid_token) {
    config.headers.userTempId = store.state.uuid_token;
  }
  return config;
})

requests.interceptors.response.use((res)=>{
  // console.log('成功的响应',res.data);
  nprogress.done();
  return res.data;
},(err)=>{
  // console.log('失败的响应');
})
export default requests;