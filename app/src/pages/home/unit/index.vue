<template>
  <div class="unit">
    <div class="title">
      <h3>{{unitTitle}}</h3>
      <ul>
        <li><a href="">热门</a></li>
        <li><a href="">大家电</a></li>
        <li><a href="">生活电器</a></li>
        <li><a href="">厨房电器</a></li>
        <li><a href="">空气/净水</a></li>
        <li><a href="">高端电器</a></li>
      </ul>
    </div>
    <div class="content">
      <!-- 左边 -->
      <div class="left">
        <ul class="item-list">
          <li><a href="">节能补贴</a></li>
          <li><a href="">4K电视</a></li>
          <li><a href="">空气净化器</a></li>
          <li><a href="">IH电饭煲</a></li>
          <li><a href="">滚筒洗衣机</a></li>
          <li><a href="">电热水器</a></li>
        </ul>
        <img src="./images/floor-1-1.png" alt="">
      </div>
      <!-- 轮播图 -->
      <div class="middle">
        <Slides></Slides>
      </div>
      <!-- 右边内容 -->
      <div class="right">
        <div class="col-one">
          <img src="./images/floor-1-2.png" alt="">
          <img src="./images/floor-1-3.png" alt="">
        </div>
        <div class="col-two">
          <img src="./images/floor-1-4.png" alt="">
        </div>
        <div class="col-three">
          <img src="./images/floor-1-5.png" alt="">
          <img src="./images/floor-1-6.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Slides from './slides'
export default {
  name:'Unit',
  components: {Slides},
  props:['unitTitle']
}
</script>

<style>
  .unit {
    width: 1155px;
    height: 390px;
  }

  .unit .title {
    border-bottom: 2px solid red;
    padding-bottom: 10px;
  }

  .unit .title li {
    display: inline;
    padding: 0 5px;
    border-right: 1px solid #000;
    font-size: 12px;
  }

  .unit .title li:last-child {
    border-right: none;
  }


  .unit .title li a:hover {
    color: rgb(0, 150, 199);
    text-decoration: underline;
  }

  .unit .content {
    display: flex;
    height: 353px;
    background-color: rgb(248, 247, 247);
  }

  .unit .content .left {
    width: 18%;
    font-size: 12px;
  }

  .unit .content .left .item-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding: 15px 0;
  }

  .unit .content .left .item-list li {
    width: 50%;
    padding: 5px 0;
  }

  .unit .content .left .item-list li a {
    padding: 5px 0;
    border-bottom: 1px solid rgb(210,210,210);
  }

  .unit .content .left .item-list li a:hover {
    text-decoration: underline;
    color: rgb(3, 153, 203);
  }

  .unit .content .middle {
    width: 28%;
    height: 100%;
    /* overflow: hidden; */
    background-color: antiquewhite;
  }


  .unit .content .right {
    width: 54%;
    display: flex;
  }

  .unit .content .right img {
    width: 207.9px;
  }
</style>