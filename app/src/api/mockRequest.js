// 对于axios进行二次封装

import axios from "axios";
import nprogress from 'nprogress';
import "nprogress/nprogress.css"
const mockRequests = axios.create({
  baseURL:'/mock',
  // 请求5s后没有响应，就失败
  timeout:5000,
})

// 请求拦截器
mockRequests.interceptors.request.use((config) => {
  nprogress.start();
  return config;
})

mockRequests.interceptors.response.use((res)=>{
  // console.log('成功的响应',res.data);
  nprogress.done();
  return res.data;
},(err)=>{
  // console.log('失败的响应');
})
export default mockRequests;