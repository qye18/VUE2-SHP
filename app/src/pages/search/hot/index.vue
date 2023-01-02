<template>
  <div class="hot">
    <h4>热卖商品</h4>
    <ul>
      <li>
        <div><img src="@/pages/home/likes/images/like_01.png" alt=""></div>
        <a href="">Apple苹果iPhone 6s (A1699)</a>
        <h3>￥4088.00</h3>
        <p>已有<span>700</span>人评价</p>
      </li>
      <li>
        <div><img src="@/pages/home/likes/images/like_02.png" alt=""></div>
        <a href="">Apple苹果iPhone 6s (A1699)</a>
        <h3>￥4088.00</h3>
        <p>已有<span>700</span>人评价</p>
      </li>
      <li>
        <div><img src="@/pages/home/likes/images/like_03.png" alt=""></div>
        <a href="">Apple苹果iPhone 6s (A1699)</a>
        <h3>￥4088.00</h3>
        <p>已有<span>700</span>人评价</p>
      </li>
      <li>
        <div><img src="@/pages/home/likes/images/like_01.png" alt=""></div>
        <a href="">Apple苹果iPhone 6s (A1699)</a>
        <h3>￥4088.00</h3>
        <p>已有<span>700</span>人评价</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'hot',
}
</script>

<style>
  .hot {
    width: 1155px;
    margin: 0 auto;
    border: 1px solid rgb(230,230,230);
    margin-bottom: 20px;
  }

  .hot h4 {
    background-color:rgb(240,240,235);
    padding: 10px;
  }

  .hot ul {
    display: flex;
  }

  .hot ul li{
    width: 25%;
    height: 250px;
    padding: 10px;
    margin: 0 2px; /* 可能需要删 */
    font-size: 14px;
  }

  .hot ul li h3 {
    font-size: 20px;
    color: rgb(227,1,1);
    margin: 15px 0 0;
  }

  .hot ul li p {
    font-size: 12px;
    color: rgb(150,150,150);
  }

  .hot ul li p span{
    font-size: 14px;
    color: rgb(1, 142, 189);
  }
</style>