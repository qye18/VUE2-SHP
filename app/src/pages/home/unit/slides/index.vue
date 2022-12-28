<template>
  <div class="container">
      <div class="show-area">
        <div class="small-slides">
          <img src="../images/floor-1-b01.png" alt="">
          <img src="../images/floor-1-b02.png" alt="">
          <img src="../images/floor-1-b03.png" alt="">
        </div>
      </div>
      <span class="arrow prev" @click="backSlide">&lt;</span>
      <span class="arrow next" @click="forwardSlide">&gt;</span>
      <div class="dots">
        
        <span @click="changeSlide(0)" class="dot-slide-change"></span>
        <span @click="changeSlide(-329)" class="dot-slide-change"></span>
        <span @click="changeSlide(-658)" class="dot-slide-change"></span>
      </div>
    </div>
</template>

<script>
export default {
  name:'smallSlides',
  data() {
    return {
      left: 0
    }
  },
  methods: {
    backSlide() {
      const smallSlides = document.querySelector('.small-slides');
      if (this.left === 0) {
        this.left += -329*2;
      } else {
        const temp = 329 + 'px';
        this.left += 329;
      }
      smallSlides.style.marginLeft = this.left + 'px';
    },
    forwardSlide() {
      const smallSlides = document.querySelector('.small-slides');
      if (this.left === -329*2) {
        this.left += 329*2;
      } else {
        const temp = 329 + 'px';
        this.left -= 329;
      }
      smallSlides.style.marginLeft = this.left + 'px';
    },
    changeSlide(val) {
      const smallSlides = document.querySelector('.small-slides');
      smallSlides.style.marginLeft = val + 'px';

    }
  }
}
</script>

<style scoped>
  .container {
    width: 323px;
    height: 353px;
    position: relative;
  }

  .container .show-area {
    width:100%;
    height:100%;
    overflow: hidden;
  }

  .small-slides {
    display: flex;
    transition: all 1s;
  }

  .small-slides img {
    width:329px;
  }

  .arrow {
    position: absolute;
    top: 45%;
    font-size: 50px;
    color: white;
    cursor: pointer;
  }

  .prev {
    left: 5%;
  }

  .next {
    left: 88%;
  }

  .dots {
    position: absolute;
    left: 45%;
    bottom: 10px;
  }
  .dots span{
    font-size: 0px;
    margin: 5px;
    border: 4px solid rgb(220, 220, 220);
    border-radius: 100%;
    cursor: pointer;
  }
</style>