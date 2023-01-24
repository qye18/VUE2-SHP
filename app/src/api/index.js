// API进行统一管理

import requests from './request'
import mockRequests from './mockRequest'

// 三级联动接口
export const reqCategoryList = () => {
  return requests({
    url: './product/getBaseCategoryList',
    method: 'get'
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
    url: '/list',
    method: 'post',
    data: params
  })
}

// 产品详情接口
export const reqItemDetail = (skuid) => {
  return requests({
    url: `/item/${skuid}`,
    method: 'get',
  })
}

// 添加产品到购物车
export const reqAddCart = (skuId, skuNum) => {
  return requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })
}

export const reqShoppingCartList = ()=> {
  return requests({
    url:'/cart/cartList',
    method:'get'
  })
}

export const reqDeleteCartItem = (skuId) => {
  return requests({
    url: `/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}

export const reqCartItemChecked = (skuID,isChecked) => {
  return requests({
    url:`/cart/checkCart/${skuID}/${isChecked}`,
    method:'get'
  })
}

export const reqVerificationCode = (phone) => {
  return requests({
    url:`/user/passport/sendCode/${phone}`,
    method:'get'
  })
}

export const reqRegisterAccount = (data) => {
  return requests({
    url:'/user/passport/register',
    method:'post',
    data
  })
}

export const reqUserLogin = (data) => requests({
  url:'/user/passport/login',
  method:'post',
  data
})

export const reqUserInfo = () => requests({
  url:'/user/passport/auth/getUserInfo',
  method:'get'
})

export const reqUserLogout = () => requests({
  url:'/user/passport/logout',
  method:'get'
})

export const reqUserAddress = () => requests({
  url:'/user/userAddress/auth/findUserAddressList',
  method:'get'
})

export const reqOrderInfo = () => requests({
  url:'/order/auth/trade',
  method:'get'
})

export const reqMakeOrder = (tradeNo, data) => requests({
  url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
  method:'post',
  data
})

export const reqPayInfo = (orderId) => requests({
  url:`/payment/weixin/createNative/${orderId}`,
  method:'get'
})

export const reqPayStatus = (orderId) => requests({
  url: `/payment/weixin/queryPayStatus/${orderId}`,
  method:'get'
})

export const reqOrderList = (page, limit) => requests({
  url:`/order/auth/${page}/${limit}`,
  method:'get'
})