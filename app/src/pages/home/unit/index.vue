<template>
  <div class="unit">
    <div class="title">
      <h3>{{unit.name}}</h3>
      <ul>
        <li v-for="(nav,index) in unit.navList" :key="index"><a :href="nav.url">{{nav.text}}</a></li>
      </ul>
    </div>
    <div class="content">
      <!-- 左边 -->
      <div class="left">
        <ul class="item-list">
          <li v-for="(k,index) in unit.keywords" :key="index"><a href="">{{k}}</a></li>
        </ul>
        <img :src="unit.imgUrl" alt="">
      </div>
      <!-- 中间轮播图 -->
      <div class="middle">
        <Slides></Slides>
      </div>
      <!-- 右边内容 -->
      <div class="right">
        <div class="col-one">
          <img :src="unit.recommendList[0]" alt="">
          <img :src="unit.recommendList[1]" alt="">
        </div>
        <div class="col-two">
          <img :src="unit.bigImg" alt="">
        </div>
        <div class="col-three">
          <img :src="unit.recommendList[2]" alt="">
          <img :src="unit.recommendList[3]" alt="">
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
  props:['unit']
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