<template>
  <div class="hot-sale">
    <div class="sale-type">
      <div class="type-hot">
        <img src="./images/hot2.jpg" alt="">
        <h5>热卖排行</h5>
      </div>
      <div class="type-special">
        <img src="./images/hot1.jpg" alt="">
        <h5>特价排行</h5>
      </div>
      <div class="type-new">
        <img src="./images/hot1.jpg" alt="">
        <h5>新品排行</h5>
      </div>
    </div>
    <div class="item-list">
      <div
       class="item">
        <a href="#">
          <img src="./images/1.jpg" alt="">
          <p>【官方价直降1100】 Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
        </a>
        <span>定金： ￥100.00</span>
      </div>
      <div
       class="item">
        <a href="#">
          <img src="./images/1.jpg" alt="">
          <p>【官方价直降1100】 Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
        </a>
        <span>定金： ￥100.00</span>
      </div>
      <div
       class="item">
        <a href="#">
          <img src="./images/1.jpg" alt="">
          <p>【官方价直降1100】 Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
        </a>
        <span>定金： ￥100.00</span>
      </div>
      <div
       class="item">
        <a href="#">
          <img src="./images/1.jpg" alt="">
          <p>【官方价直降1100】 Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
        </a>
        <span>定金： ￥100.00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'HotSale'
}
</script>

<style scoped>
  .hot-sale {
    /* width: 1155px; */
    width: 1120px;
    text-align: center;

  }

  /* 排行 */
  .hot-sale .sale-type {
    width: 300px;
    margin: 0 auto;
    display: flex;
  }

  .hot-sale .sale-type > * {
    margin-right: 40px;
  }

  .hot-sale .sale-type img {
    width: 40px;
    height: 35px;
    margin-bottom: 5px;
  }

  .hot-sale .sale-type h5 {
    font-size: 15px;
    font-weight: 500;
  }

  /* 商品图片 */
  .hot-sale .item-list {
    display: flex;
    margin-top: 10px;
    /* background-color: red; */
  }

  .hot-sale .item-list .item {
    width: 270px;
    height: 320px;
    border: 1px solid salmon;
    margin-right: 20px;
    text-align: left;
    padding: 10px 10px 10px 20px;
  }

  .hot-sale .item-list .item a {
    text-decoration: none;
    color: black;
    text-align: left;
  }

  .hot-sale .item-list .item p {
    font-size: 13px;
    width: 230px;
    margin-bottom: 10px;
  }

  .hot-sale .item-list .item img {
    width: 200px;
    margin-bottom: 10px;
  } 

  .hot-sale .item-list .item span {
    color: red;
    font-size: 20px;
  }
  
</style>