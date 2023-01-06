<template>
  <div class="header">
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
      },{},{})
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
    height: 70px;
  }

  .header-bot {
    width: 1155px;
    margin: 0 auto;
    height: 100px;
    padding: 0 0 10px 75px;
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
    vertical-align: middle;
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