<template>
  <div>
    <img src="./wx_cz.jpg" alt="">
    <span>扫码关注尚硅谷！</span>
  </div>
</template>

<script>
export default {
  name:'QrcodeLogin'
}
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  div img {
    position: absolute;
    width: 220px;
    height: 220px;
    margin-top: 30px;
    clip: rect(0 210px 158px 11px);
  }
  
  div span {
    margin-top: 220px;
    color: rgb(227,1,1);
  }
</style>