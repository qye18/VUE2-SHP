<template>
  <div class="type-nav">
    <div class="top-bar">
      <h4>全部商品分类</h4>
      <nav>
        <a href="#">服装城</a>
        <a href="#">美妆馆</a>
        <a href="#">尚品</a>
        <a href="#">全球购</a>
        <a href="#">闪购</a>
        <a href="#">团购</a>
        <a href="#">有趣</a>
        <a href="#">秒杀</a>
      </nav>
    </div>
    <div class="bottom-nav">
      <div class="item" 
        v-for="category in $store.state.categoryList" 
        :key="category.categoryId">
        <h5><a href="">{{ category.categoryName }}</a></h5>
        <div class="item-list test">
          <dl class="sub-item-list" 
            v-for="category2 in category.categoryChild" 
            :key="category2.categoryId">
            <dd>
              <a href="#">{{ category2.categoryName}}</a>
              <a href="#"
              v-for="category3 in category2.categoryChild"
              :key="category3.categoryId">{{category3.categoryName}}</a>              </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TypeNav',
  
}
</script>

<style scoped>
  .top-bar {
    display: flex;
    height: 50px;
    align-items: center;
    border-bottom: 2px solid rgb(228, 0, 0);
  }
  
  .top-bar h4 {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    background-color: rgb(228, 0, 0);
  }

  .item {
    width: 200px;
  }

  .item h5 {
    width: 200px;
    padding: 5px 20px;
    font-weight: 500;
  }
  .item h5 a {
    width: 100%;
    height: 100%;
  }

  .item h5:hover {
    background-color: lightpink;
  }

  .item:hover .item-list {
    display: block;
  }

  .item-list {
    position: absolute;
    left: 220px;
    top: 160px;
    display: none;
    background-color: #FFFAFA;
    width: 700px;
    height: 470px;
    border: 1px solid rgb(223, 219, 219);
    z-index: 999;
  }

  .sub-item-list {
    display: flex;
    font-size: 12px;
  }

  .sub-item-list > * {
    margin: 10px 0;
    padding-left: 10px;
  }

  .sub-item-list dt {
    font-weight: bold;
  }

  .sub-item-list dd a {
    border-left: 1px solid gray;
    padding: 0 10px;
  }

  .sub-item-list dd a:first-child {
    border-left: none;
    padding: 0 10px 0 0;
    font-weight: 600;
  }
  
  a {
    color: black;
    text-decoration: none;
  }

  .top-bar a {
    padding: 20px;
  }
  .top-bar a:hover {
    text-decoration: underline;
  }
</style>