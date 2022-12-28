<template>
  <div class="todays-recommend">
    <div class="item-first">
      <div class="clock">
        <h4>今日推荐</h4>
      </div>
    </div>
    <li><img src="./images/today01.png" alt="today's recommendation"></li>
    <li><img src="./images/today02.png" alt="today's recommendation"></li>
    <li><img src="./images/today03.png" alt="today's recommendation"></li>
    <li><img src="./images/today04.png" alt="today's recommendation"></li>
  </div>
</template>

<script>
export default {
  name:'TodaysRecommend'
}
</script>

<style>
  .todays-recommend {
    width: 1155px;
    height: 163px;
    display: flex;
    flex-direction: row;
    background: red;
  }

  .todays-recommend .item-first {
    width: 16%;
    display: flex;
    justify-content: center;
    background-color: rgb(100, 86, 86);
  }

  .todays-recommend .item-first .clock {
    background: url('./images/clock.png') no-repeat top;
    margin-top: 15%;
  }
  .todays-recommend .item-first h4 {
    margin-top: 110%;
    color: white;
  }
  .todays-recommend li {
    width: 21%;
  }
</style>