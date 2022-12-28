<template>
  <ul class="brand">
    <li><img src="./images/brand_03.png" alt=""></li>
    <li><img src="./images/brand_05.png" alt=""></li>
    <li><img src="./images/brand_07.png" alt=""></li>
    <li><img src="./images/brand_09.png" alt=""></li>
    <li><img src="./images/brand_11.png" alt=""></li>
    <li><img src="./images/brand_13.png" alt=""></li>
    <li><img src="./images/brand_15.png" alt=""></li>
    <li><img src="./images/brand_17.png" alt=""></li>
    <li><img src="./images/brand_19.png" alt=""></li>
    <li><img src="./images/brand_21.png" alt=""></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>
  .brand {
    width: 1155px;
    display: flex;
    background-color: rgb(248, 247, 247);
    padding: 15px 0;
    justify-content: space-between;
    align-items: center;
  }

  .brand li {
    padding-right: 10px;
    border-right: 1px solid rgb(208, 207, 207);
  }

  .brand li:last-child {
    border-right: none;
  }
  .brand li img {
    height: 35px;
  }
</style>