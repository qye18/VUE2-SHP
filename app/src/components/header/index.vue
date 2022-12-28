<template>
  <div class="header">
    <nav>
      <div class="nav-left">
        <li>尚品汇欢迎您</li>
        <li>请<router-link to="./login">登录</router-link></li>
        <li><router-link to="./register">免费注册</router-link></li>
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
      <router-link to="/home">
        <img class="logo" src="./images/logo.png" alt="logo" />
      </router-link>
      <div class="search-box">
        <input type="text" v-model="searchResult">
        <button @click="searchPush(searchResult)">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  data() {
    return {
      searchResult:''||undefined
    }
  },
  methods:{
    searchPush(searchResult) {
      this.$router.push({
        name:'search',
        params:{
          result:searchResult
        }
      })
      this.searchResult = '';
    },
  }
}
</script>

<style scoped>
  * {
    font-size: 12px;
    text-decoration: none;
  }
  button, img {
    cursor: pointer;
  }
  a {
    color: #000;
    /* text-decoration: none; */
  }
  
  .header {
    width: 100%;
    height: 110px;
  }

  nav {
    background-color: #eaeaea;
    width: 100%;
    height: 35px;
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

  .header-bot {
    height: 100px;
    padding: 0px 40px 10px 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-bot .logo {
    margin-left: -50px;
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
    padding-left: 5px;
    height: 100%;
    border: 1px solid red;
    outline: none;
    font-size: large;
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