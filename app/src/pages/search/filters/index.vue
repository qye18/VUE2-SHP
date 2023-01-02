<template>
  <div class="filters">
    <div class="filter-results">
      <span><a href="">全部结果</a>/</span>
    </div>
    <div class="filter-table">
      <div class="filter-category">
        <h5 class="filter-title">品牌</h5>
        <ul class="filter-content">
          <li><a href="">苹果</a></li>
          <li><a href="">小米</a></li>
          <li><a href="">苹果</a></li>
          <li><a href="">小米</a></li>
          <li><a href="">苹果</a></li>
          <li><a href="">小米</a></li>
          <li><a href="">苹果</a></li>
          <li><a href="">小米</a></li>
          <li><a href="">苹果</a></li>
        </ul>
      </div>
      <div class="filter-category">
        <h5 class="filter-title">运行内存</h5>
        <ul class="filter-content">
          <li><a href="">4G</a></li>
          <li><a href="">8G</a></li>
          <li><a href="">6G</a></li>
          <li><a href="">12G</a></li>
          <li><a href="">3G</a></li>
        </ul>
      </div>
      <div class="filter-category">
        <h5 class="filter-title">机身内存</h5>
        <ul class="filter-content">
          <li><a href="">32G</a></li>
          <li><a href="">64G</a></li>
          <li><a href="">128G</a></li>
          <li><a href="">256G</a></li>
          <li><a href="">512G</a></li>
        </ul>
      </div>
      <div class="filter-category">
        <h5 class="filter-title">手机一级</h5>
        <ul class="filter-content">
          <li><a href="">安卓手机</a></li>
          <li><a href="">苹果手机</a></li>
        </ul>
      </div>
      <div class="filter-category">
        <h5 class="filter-title">运行内存</h5>
        <ul class="filter-content">
          <li><a href="">4G</a></li>
          <li><a href="">8G</a></li>
          <li><a href="">6G</a></li>
          <li><a href="">12G</a></li>
          <li><a href="">3G</a></li>
        </ul>
      </div>
      <div class="filter-category">
        <h5 class="filter-title">机身内存</h5>
        <ul class="filter-content">
          <li><a href="">32G</a></li>
          <li><a href="">64G</a></li>
          <li><a href="">128G</a></li>
          <li><a href="">256G</a></li>
          <li><a href="">512G</a></li>
        </ul>
      </div>
      <div class="filter-category">
        <h5 class="filter-title">手机一级</h5>
        <ul class="filter-content">
          <li><a href="">安卓手机</a></li>
          <li><a href="">苹果手机</a></li>
        </ul>
      </div>
      <div class="filter-category">
        <h5 class="filter-title">运行内存</h5>
        <ul class="filter-content">
          <li><a href="">4G</a></li>
          <li><a href="">8G</a></li>
          <li><a href="">6G</a></li>
          <li><a href="">12G</a></li>
          <li><a href="">3G</a></li>
        </ul>
      </div>
      <div class="filter-category">
        <h5 class="filter-title">机身内存</h5>
        <ul class="filter-content">
          <li><a href="">32G</a></li>
          <li><a href="">64G</a></li>
          <li><a href="">128G</a></li>
          <li><a href="">256G</a></li>
          <li><a href="">512G</a></li>
        </ul>
      </div>
      <div class="filter-category">
        <h5 class="filter-title">手机一级</h5>
        <ul class="filter-content">
          <li><a href="">安卓手机</a></li>
          <li><a href="">苹果手机</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Filters'
}
</script>

<style scoped>
  .filters {
    width: 90%;
    margin: 10px auto;
  }

  .filters .filter-results span {
    font-size: 12px; 
  }
  .filters .filter-results span a {
    padding-right: 5px;
  }
  .filter-table {
    margin: 10px 0;
    /* border: 1px solid rgb(230,230,230); */
  }
  .filter-table .filter-category, .filter-content {
    display: flex;
  }

  .filter-table .filter-category {
    /* border: 1px solid rgb(230,230,230); */
    height: 45px;
  }

  .filter-table .filter-category:first-child {
    height: 100px;
  }

  .filter-table .filter-category .filter-title {
    width: 150px;
    border: 1px solid rgb(230,230,230);
    padding-right: 10px;
    font-weight: 500;
    display: flex;
    justify-content: right;
    align-items: center;
    background-color: rgb(240,240,240);
  }

  .filter-table .filter-content {
    border: 1px solid rgb(230,230,230);
    width: 100%;
    font-size: 13px;
    display: flex;
    align-items: center;
  }
  
  .filter-table .filter-content li, 
  .filter-category:first-child .filter-content{
    padding-left: 30px;
  }

  .filter-category:first-child .filter-content li {
    border: 1px solid rgb(230,230,230);
    padding: 15px 25px;
    font-weight: 600;
  }


</style>