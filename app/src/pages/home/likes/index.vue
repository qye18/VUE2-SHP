<template>
  <div class="likes">
    <div class="title">
      <h3>猜你喜欢</h3>
      <a href="">换一换<span></span></a>
    </div>
    <ul class="item-list">
      <li class="item">
        <a href=""><img src="./images/like_01.png" alt=""></a>
        <p>捷波朗（jabra）BOOSI劲步物</p>
        <h3>￥116.00</h3>
      </li>
      <li class="item">
        <a href=""><img src="./images/like_02.png" alt=""></a>
        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
        <h3>￥116.00</h3>
      </li>
      <li class="item">
        <a href=""><img src="./images/like_03.png" alt=""></a>
        <p>爱仕达 30CM炒锅不粘锅NWG8330E电磁炉炒</p>
        <h3>￥116.00</h3>
      </li>
      <li class="item">
        <a href=""><img src="./images/like_01.png" alt=""></a>
        <p>捷波朗（jabra）BOOSI劲步物</p>
        <h3>￥116.00</h3>
      </li>
      <li class="item">
        <a href=""><img src="./images/like_02.png" alt=""></a>
        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
        <h3>￥116.00</h3>
      </li>
      <li class="item">
        <a href=""><img src="./images/like_03.png" alt=""></a>
        <p>爱仕达 30CM炒锅不粘锅NWG8330E电磁炉炒</p>
        <h3>￥116.00</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Likes'
}
</script>

<style scoped>
  .likes {
    width: 1150px;
  }

  .likes .title a {
    color: black;
    text-decoration: none;
    font-size: 12px;
  }

  .likes .title a:hover {
    color: rgb(4, 159, 211);
    text-decoration: underline;
  }
  .likes .title span {
    font-size: 0;
    width: 10px;
    height: 10px;
    border: 12px solid transparent;
    background: url('./images/icons.png') no-repeat -430px -120px;
  }

  /* 图片列表 */
  .likes .item-list {
    display: flex;
    margin-top: 10px;
    border: 1px solid rgb(234, 230, 230);
  }

  .likes .item-list .item {
    width: 190px;
    height: 240px;
    margin: 2px;
    padding: 10px;
    text-align: left;
  }

  .likes .item-list .item p{
    margin-top: 5px;
    font-size: 13px;
    border-right: 1px solid rgb(234, 230, 230);
  }

  .likes .item-list .item h3 {
    padding-top: 15px;
    color: red;
    border-right: 1px solid rgb(234, 230, 230);
  } 
</style>