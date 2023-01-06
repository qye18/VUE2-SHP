// API进行统一管理

import requests from './request'
import mockRequests from './mockRequest'

// 三级联动接口
export const reqCategoryList = () => {
  return requests({
    url:'./product/getBaseCategoryList',
    method:'get'
  })
}

// 轮播图接口，模拟数据非真实请求
export const reqBannerList = () => {
  return mockRequests.get('/banner')
}

// unit接口，home最下面的
export const reqUnitList = () => {
  return mockRequests.get('/unit')
}

// search接口
export const reqSearchInfo = (params) => {
  return requests({
    url:'/list',
    method:'post',
    data:params
    
  })
}