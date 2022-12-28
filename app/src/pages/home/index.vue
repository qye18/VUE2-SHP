<template>
  <div>
    <TypeNav class="type-nav"></TypeNav>
    <SlideShow class="slide-show"></SlideShow>
    <TodaysRecommend class="recommend"></TodaysRecommend>
    <HotSale class="hot-sale"></HotSale>
    <Likes class="likes"></Likes>
    <Unit class="unit" unitTitle="家用电器"></Unit>
    <Unit class="unit" unitTitle="手机通讯"></Unit>
    <Brand class="brand"></Brand>
  </div>
</template>

<script>
import TodaysRecommend from './todaysRecommend'
import HotSale from './hotSale'
import Likes from './likes'
import Unit from './unit'
import Brand from './brand'
export default {
  name:'Home',
  components:{
    TodaysRecommend, HotSale, Likes, Unit, Brand
  }
}
</script>

<style scoped>
  .type-nav {
    margin-left: 50px;
  }
  .slide-show {
    position: absolute;
    left: 250px;
    top: 165px;
  }

  .type-nav, .recommend, .likes, .unit, .brand{
    margin-top: 5px;
    margin-left: 50px;
  }

  .hot-sale {
    margin: 15px auto 0;
  }

  .likes, .unit {
    margin-top: 40px;
  }

  .brand {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>