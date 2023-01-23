<template>
  <div class="userCenter">
    <div class="left">
      <ul>
        <li>
          <h5>订单中心</h5>
          <ol>
            <li><router-link :to="{name:'myOrder'}">我的订单</router-link></li>
            <li><router-link to="/userCenter/groupOrder">团购订单</router-link></li>
            <li><router-link to="/">本地生活订单</router-link></li>
            <li><router-link to="/">我的预售</router-link></li>
            <li><router-link to="/">评价晒单</router-link></li>
            <li><router-link to="/">取消订单记录</router-link></li>
          </ol>
        </li>
        <li>
          <h5>关注中心</h5>
          <ol>
            <li><a>关注的商品</a></li>
            <li><a>关注的店铺</a></li>
            <li><a>关注的专辑</a></li>
            <li><a>关注的品牌</a></li>
            <li><a>关注的活动</a></li>
            <li><a>浏览历史</a></li>
          </ol>
        </li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:'userCenter'
}
</script>

<style>
  .userCenter {
    width: 1155px;
    margin: 30px auto;
    display: flex;
  }
  .userCenter .left {
    width: 20%;
    padding: 15px;
  }
  .userCenter .right {
    width: 80%;
    height: 50px;

  }

  .userCenter .left ul > li{
    list-style-type: disc;
  }

  .userCenter .left ul ol{
    padding: 20px 0 15px 0 ;
    font-size: 12px;
    text-align: center;
  }

  .userCenter .left ul ol li {
    padding-bottom: 8px;
    margin: 0 20px 8px;
    border-bottom: 1px solid rgb(230,230,230);
  }

</style>