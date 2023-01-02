<template>
  <div>
    <TypeNav class="type-nav"></TypeNav>
    <Filters></Filters>
    <div class="sort">
      <li><a href="">综合↑</a></li>
      <li><a href="">价格</a></li>
      <li><a href="">新品</a></li>
      <li><a href="">评价</a></li>
    </div>
    <div class="shop">
      <ShoppingItem></ShoppingItem>
      <ShoppingItem></ShoppingItem>
      <ShoppingItem></ShoppingItem>
      <ShoppingItem></ShoppingItem>
      <ShoppingItem></ShoppingItem>
    </div>
    <div class="shop">
      <ShoppingItem></ShoppingItem>
      <ShoppingItem></ShoppingItem>
      <ShoppingItem></ShoppingItem>
      <ShoppingItem></ShoppingItem>
      <ShoppingItem></ShoppingItem>
    </div>
    <Pagination></Pagination>
    <Hot></Hot>
  </div>
</template>

<script>
import Filters from './filters'
import ShoppingItem from './shoppingItem'
import Pagination from './pagination'
import Hot from './hot'
export default {
  name:'Search',
  components:{Filters,ShoppingItem, Pagination, Hot}
}
</script>

<style scoped>
  .type-nav {
    padding: 0 50px;
  }

  .sort {
    width: 1155px;
    height: 40px;
    margin: 0 auto;
    border: 1px solid rgb(230,230,230);
    box-shadow: 0 0 4px 1px rgb(230,230,230);
    font-size: 12px;
    margin-bottom: 20px;
    display: flex;
  }
  .sort li{
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .sort li:first-child{
    background-color: rgb(227,1,1);
  }

  .sort li a {
    color: rgb(100,100,100)
  }
  .sort li a:hover {
    color: black;
  }

  .sort li:first-child a {
    color: white;
  }

  .shop {
    display: flex;
    width: 1155px;
    margin: 0 auto;
  }

</style>