<template>
  <div class="container">
    <div class="slide-show">
      <div class="show-area">
        <div class="slides">
          <img src="./images/banner1.jpg" alt="">
          <img src="./images/banner2.jpg" alt="">
          <img src="./images/banner3.jpg" alt="">
          <!-- <img src="./images/banner4.jpg" alt=""> -->
          <!-- <img src="./images/banner1.jpg" alt=""> -->
        </div>
      </div>
      <span class="arrow prev" @click="backSlide">&lt;</span>
      <span class="arrow next" @click="forwardSlide">&gt;</span>
      <div class="dots">
        
        <span @click="changeSlide(0)" class="dot-slide-change"></span>
        <span @click="changeSlide(-721)" class="dot-slide-change"></span>
        <span @click="changeSlide(-1442)" class="dot-slide-change"></span>
      </div>
    </div>
    <div class="newsflash">
      <div class="top">
        <h5>尚品汇快报</h5>
        <span>更多 &gt;</span>
      </div>
      <ul class="middle">
        <li><span class="em">[特惠]</span>备战开学季 全民半价购数码</li>
        <li><span class="em">[公告]</span>备战开学季 全民半价购数码</li>
        <li><span class="em">[特惠]</span>备战开学季 全民半价购数码</li>
        <li><span class="em">[公告]</span>备战开学季 全民半价购数码</li>
        <li><span class="em">[特惠]</span>备战开学季 全民半价购数码</li>
      </ul>
      <div class="services">
        <div class="service-list">
          <li>话费</li>
          <li>机票</li>
          <li>电影票</li>
          <li>游戏</li>
          <li>彩票</li>
          <li>加油站</li>
          <li>酒店</li>
          <li>火车票</li>
          <li>众筹</li>
          <li>理财</li>
          <li>礼品卡</li>
          <li>白条</li>
        </div>
      </div>
      <div class="adv">
        <a href=""><img src="./images/ad1.png" alt="" /></a>
      </div>
  </div>
  
  </div>
</template>

<script>
export default {
  name:'SlideShow',
  data() {
    return {
      left:0
    }
  },
  methods: {
    backSlide() {
      const slides = document.querySelector('.slides');
      if (this.left === 0) {
        this.left += -721*2;
      } else {
        const temp = 721 + 'px';
        this.left += 721;
      }
      slides.style.marginLeft = this.left + 'px';
    },
    forwardSlide() {
      const slides = document.querySelector('.slides');
      if (this.left === -721*2) {
        this.left += 721*3;
      } else {
        const temp = 721 + 'px';
        this.left -= 721;
      }
      slides.style.marginLeft = this.left + 'px';
    },
    changeSlide(val) {
      const slides = document.querySelector('.slides');
      slides.style.marginLeft = val + 'px';

    }
  }
}
</script>

<style scoped>
  .container {
    width:1000px;
    height: 440px;
    margin: 5px;
  }

  /* 轮播图 */
  .container .slide-show {
    width: 700px;
    height: 440px;
  }

  .slide-show .show-area {
    width:100%;
    height:100%;
    overflow: hidden;
  }

  .slides {
    display: flex;
    transition: all 1s;
  }
  .slides img {
    width:721px;
  }

  .arrow {
    position: absolute;
    top: 45%;
    font-size: 50px;
    color: white;
    cursor: pointer;
  }

  .prev {
    left: 30px;
  }

  .next {
    left: 670px;
  }

  .dots {
    position: absolute;
    left: 35%;
    bottom: 10px;
  }
  .dots span{
    font-size: 0px;
    margin: 5px;
    border: 4px solid rgba(200, 200, 200, 0.7);
    border-radius: 100%;
    cursor: pointer;
  }


  /* 尚品汇快报 */
  .newsflash {
    width: 250px;
    height: 100%;
    background-color: ghostwhite;
    position: absolute;
    right: 40px;
    top: 0;
    border: 1px solid rgb(234, 230, 230);
    overflow: hidden;
  }

  .newsflash .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px 10px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgb(214, 210, 210);
    align-items: center;
  }

  .newsflash .top span, .newsflash .middle li {
    font-size: 12px;
  }

  .newsflash .middle li {
    padding-bottom: 8px;
    padding-left: 10px;
    color: #333;
  }

  .newsflash .middle li .em {
    font-weight: 600;
  }

  .newsflash .services {
    font-size: 12px;
    width: 250px;
    height: 200px;
    background-color: antiquewhite;
    background-image: url('./images/icons.png');
  }

  .newsflash .services .service-list {
    display: flex;
    flex-wrap: wrap;
  }

  .newsflash .services .service-list > * {
    width: 25%;
    padding: 44px 0 5px;
    border: 1px solid rgb(234, 230, 230);
    text-align: center;
  }

  .newsflash .adv {
    margin-top: 5px;
  }
</style>