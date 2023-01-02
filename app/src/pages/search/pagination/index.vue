<template>
  <div class="pagination">
    <ul class="pagination-list">
      <li class="prev"><a href="">上一页</a></li>
      <ul class="page-number-list">
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
      </ul>
      <li class="next"><a href="">下一页</a></li>
    </ul>
    <p class="total-pages">共<span>3</span>页</p>
  </div>
</template>

<script>
export default {
  name:'pagination',
}
</script>

<style scoped>
  .pagination {
    width: 1155px;
    height: 40px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    position: relative;
    margin: 30px 0;
    font-size: 13px;
  }

  .pagination .pagination-list,
  .pagination .pagination-list .page-number-list {
    display: flex;
    height: 100%;
  }

  .pagination .pagination-list li{
    border: 1px solid rgb(220,220,220);
    /* display: flex; */
    /* align-items: center; */
    width: 100px;
    height: 100%;
    margin: 0 2px;
  }

  .pagination .pagination-list li a{
    width: 100%;
    height: 100%;
  }

  .pagination .pagination-list .page-number-list li{
    width: 50px;
  }
  .pagination .pagination-list .page-number-list li a,

  .pagination .pagination-list li a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination .pagination-list li {
    background-color: rgb(250,250,250);
  }

  .pagination .prev a,
  .pagination .next a {
    color: rgb(100,100,100);
  }

  .pagination .pagination-list li:hover{
    background-color: rgb(220,220,220);
  }

  .pagination .pagination-list li:hover a{
    color: white;
  }

  .pagination .total-pages {
    position: absolute;
    top: 5px;
    right: 150px;
  }
</style>