import banner from './banner.json'
import unit from './unit.json'
import Mock from 'mockjs'

// mock 参数一：请求地址 参数二：请求数据
Mock.mock('/mock/banner',{code:200,data:banner});
Mock.mock('/mock/unit',{code:200,data:unit});