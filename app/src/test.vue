<template>
  
    <div class="block">
      <el-carousel trigger="click" height="450px">
        <el-carousel-item v-for="item in $store.state.home.bannerList" :key="item.id">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name:'test',
}
</script>

<style scoped>
.block {
  width: 700px;
  background-color: red;
}
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
</style>