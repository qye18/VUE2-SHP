<template>
  <div class="cartPage">
    <div class="content">
      <h4>商品已成功加入购物车！</h4>
      <div class="row-1">
        <div class="col-1">
          <img src="../images/icons.png" alt="" />
          <div>
            <p>iPhone 13</p>
            <p class="para">数量：<span>1</span></p>
            <p class="para">颜色：<span>粉色</span></p>
          </div>
        </div>
        <div class="col-2">
          <a href="">查看商品详情</a>
          <a href="">去购物车结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addToCartSuccess",
};
</script>

<style scoped>
.cartPage {
  height: 150px;
  margin: 20px 0 0;
}
.cartPage .content {
  /* border:1px solid rgb(227, 1, 1); */
  background-color: rgb(240,240,240);
  width: 1155px;
  height: 120px;
  padding: 10px 20px;
  margin: 0 auto;
}
.cartPage img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.cartPage h4 {
  font-weight: 500;
  margin-bottom: 20px;
}

.cartPage .row-1 {
  display: flex;
  font-size: 13px;
  justify-content: space-between;
}
.cartPage .row-1 .col-1 {
  display: flex;
}

.cartPage .row-1 .col-1 p.para{
  color: rgb(150,150,150);
  font-size: 11px;
}


.cartPage .row-1 .col-2 {
  margin-right: 50px;
}

.cartPage .row-1 .col-2 a{
  padding: 10px 20px;
  border: 1px solid rgb(220,220,220);
  margin: 0 5px;
  font-size: 14px;
}

.cartPage .row-1 .col-2 a:hover{
  background-color: rgb(220,220,220);
}


</style>
