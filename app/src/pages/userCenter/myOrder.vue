<template>
  <div class="my-order">
      <h4>我的订单</h4>
      <ul>
        <h5>商品</h5>
        <h5>商品详情</h5>
        <h5>收货人</h5>
        <h5>金额</h5>
        <h5>状态</h5>
        <h5>操作</h5>
      </ul>
      <div class="order-list">
        <div class="order">
          <div class="order-row-1">
            <p>2017-02-11 11:59 <span>订单编号: 7867473872</span></p>
            <a>删除图标</a>
          </div>
          <div class="order-row-2">
            <div class="row-2-col-1">
              <div class="item">
                <img height="70px" width="70px" src="../images/icons.png" alt="" />
                <p>包邮 正品压缩面膜无纺纸布纸膜100粒 <span>x1</span> <span>售后申请</span></p>
              </div>
              <div class="item">
                <img height="70px" width="70px" src="../images/icons.png" alt="" />
                <p>包邮 正品压缩面膜无纺纸布纸膜100粒 <span>x1</span> <span>售后申请</span></p>
              </div>
            </div>
            <div class="row-2-col-2">
              <p>小丽</p>
            </div>
            <div class="row-2-col-3">
              <p>总金额</p>
            </div>
            <div class="row-2-col-4">
              <p>已完成</p>
            </div>
            <div class="row-2-col-5">
              <p>评价/晒单</p>
            </div>
          </div>
        </div>
        <div class="order">
          <div class="order-row-1">
            <p>2017-02-11 11:59 <span>订单编号: 7867473872</span></p>
            <a>删除图标</a>
          </div>
          <div class="order-row-2">
            <div class="row-2-col-1 item-list">
              <div class="item">
                <img height="50px" width="50px" src="../images/icons.png" alt="" />
                <p>包邮 正品压缩面膜无纺纸布纸膜100粒 x1 售后申请</p>
              </div>
              <div class="item">
                <img height="50px" width="50px" src="../images/icons.png" alt="" />
                <p>包邮 正品压缩面膜无纺纸布纸膜100粒 x1 售后申请</p>
              </div>
            </div>
            <div class="row-2-col-2">
              <p>小丽</p>
            </div>
            <div class="row-2-col-3">
              <p>总金额</p>
            </div>
            <div class="row-2-col-4">
              <p>已完成</p>
            </div>
            <div class="row-2-col-5">
              <p>评价/晒单</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'myOrder'
}
</script>

<style>
  .my-order {
    padding: 10px;
  }

  .my-order > h4, .my-order > ul {
    background-color: rgb(245,245,245);
    border: 1px solid rgb(220,220,220);
    color: rgb(100,100,100);
  }

  .my-order > h4 {
    padding: 10px 10px;
    margin-bottom: 20px;
  }

  .my-order > ul {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    margin-bottom: 15px;
  }

  .my-order > ul h5:first-child, .my-order > ul h5:nth-child(2) {
    width: 20%;
  }

  .my-order .order-list .order {
    border: 1px solid rgb(225,225,225);
    font-size: 12px;
    margin-bottom: 20px;
  }

  .my-order .order-list .order .order-row-1 {
    background-color: rgb(245,245,245);
    border-bottom: 1px solid rgb(225,225,225);
    display: flex;
    justify-content: space-between;
    padding: 4px 10px;
  }

  .my-order .order-list .order .order-row-2 {
    display: flex;
    /* justify-content: space-between; */
  }

  .my-order .order-list .order .order-row-2 .row-2-col-1 {
    width: 55%;
    border-right: 1px solid rgb(225,225,225);
    border-bottom: 1px solid rgb(225,225,225);
  }

  .my-order .order-list .order .order-row-2 .row-2-col-2,
  .my-order .order-list .order .order-row-2 .row-2-col-3,
  .my-order .order-list .order .order-row-2 .row-2-col-4
   {
    border-right: 1px solid rgb(225,225,225);
    border-bottom: 1px solid rgb(225,225,225);
    width: 11.25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-order .order-list .order .order-row-2 .row-2-col-5 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-order .order-list .order .order-row-2 .row-2-col-1 .item {
    display: flex;
    border-bottom: 1px solid rgb(220,220,220);
    padding: 8px;
    margin-bottom: -1px;
  }

  .my-order .order-list .order .order-row-2 .row-2-col-1 .item > p span {
    padding-left: 20px;
  }


  .my-order .order-list .order .order-row-2 .row-2-col-1 .item img {
    border: 1px solid rgb(220,220,220);
    margin-right: 10px;
  }

</style>