<template>
  <nav>
    <div class="nav-left">
      <li>尚品汇欢迎您</li>
      <li>请<router-link to="./login">登录</router-link></li>
      <li><router-link to="./register">免费注册</router-link></li>
    </div>
    <div class="nav-right">
      <li><a href="#">我的订单</a></li>
      <li><router-link :to="{name:'shoppingCart'}">我的购物车</router-link></li>
      <li><a href="#">我的尚品汇</a></li>
      <li><a href="#">尚品汇会员</a></li>
      <li><a href="#">企业采购</a></li>
      <li><a href="#">关注尚品汇</a></li>
      <li><a href="#">合作招商</a></li>
      <li><a href="#">商家后台</a></li>
    </div>
  </nav>
</template>

<script>
export default {
  name:'topNav'
}
</script>

<style>
nav {
    background-color: #eaeaea;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
  }

  .nav-left li, .nav-right li{
    display: inline;
    padding: 5px;
  }

  .nav-left {
    margin-left: 50px;
  }
  
  .nav-right {
    margin-right: 50px;
  }

  .nav-left li:nth-child(2) a, .nav-right li a {
    border-right: 1px solid #000;
    padding-right: 5px;
  }

  .nav-right li:last-child a{
    padding: 0;
    border-right: none;
  }
</style>