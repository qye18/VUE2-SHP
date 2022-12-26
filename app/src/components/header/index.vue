<template>
  <div class="header">
    <nav>
      <div class="nav-left">
        <li>尚品汇欢迎您</li>
        <li>请<a href="#">登录</a></li>
        <li><a href="#">免费注册</a></li>
      </div>
      <div class="nav-right">
        <li><a href="#">我的订单</a></li>
        <li><a href="#">我的购物车</a></li>
        <li><a href="#">我的尚品汇</a></li>
        <li><a href="#">尚品汇会员</a></li>
        <li><a href="#">企业采购</a></li>
        <li><a href="#">关注尚品汇</a></li>
        <li><a href="#">合作招商</a></li>
        <li><a href="#">商家后台</a></li>
      </div>
    </nav>
    <div class="header-bot">
      <img src="./images/logo.png" alt="logo" />
      <div class="search-box">
        <input type="text">
        <button>搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
}
</script>

<style scoped>
  * {
    font-size: 12px;
    text-decoration: none;
  }
  a {
    color: #000;
    /* text-decoration: none; */
  }
  
  .header {
    width: 100%;
    height: 130px;
  }

  nav {
    background-color: #eaeaea;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .search-box {
    border: 2px solid rgb(227, 1, 1);
  }
  .header-bot {
    height: 100px;
    padding: 10px 40px 10px 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-bot .search-box {
    width: 570px;
    height: 30px;
  }

  .header-bot .search-box > * {
    height: 100%;
  }

  .header-bot .search-box input {
    width: 87%;
    border: none;
  }

  .header-bot .search-box button {
    width: 13%;
    border: none;
    background-color: rgb(227, 1, 1);
    color: white;
  }
  
  a:hover {
    text-decoration: underline;
    color: rgb(4, 175, 249);
  }
  a:active {
    color: rgb(0, 147, 210);
  }
</style>