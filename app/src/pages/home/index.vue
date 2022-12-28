<template>
  <div>
    <TypeNav class="type-nav"></TypeNav>
    <SlideShow class="slide-show"></SlideShow>
    <TodaysRecommend></TodaysRecommend>
  </div>
</template>

<script>
import TodaysRecommend from './todaysRecommend'
export default {
  name:'Home',
  components:{
    TodaysRecommend
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
</style>