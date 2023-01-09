<template>
  <div class="shopping-item">
    <div class="item-image">
      <router-link to="/detail">
      <img :src="good.defaultImg" alt="" />
      </router-link>
    </div>
    <div class="item-detail">
      <h4>{{ good.price }}</h4>
      <div>
        <a href="">
          {{ good.title }}
        </a>
      </div>
      <p>已有<span>2000</span>人评价</p>
      <button class="self" href="">自营</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: ["good"],
};
</script>

<style scoped>
.shopping-item {
  width: 231px;
  height: 400px;
  padding: 10px 15px;
}

.shopping-item:hover {
  /* outline: 2px solid rgb(240,240,240); */
  box-shadow: 0 0 4px 4px rgb(240, 240, 240);
}

.shopping-item .item-image {
  text-align: center;
  margin-bottom: 50px;
}

.shopping-item .item-image img {
  width: 180px;
  height: 180px;
}

.shopping-item .item-detail {
  font-size: 13px;
}

.shopping-item .item-detail h4 {
  font-size: 20px;
  color: rgb(227, 1, 1);
}

.shopping-item .item-detail div,
.shopping-item .item-detail p {
  padding-bottom: 15px;
}

.shopping-item .item-detail div a:hover {
  color: rgb(227, 1, 1);
}

.shopping-item .item-detail p {
  color: rgb(140, 140, 140);
  font-size: 12px;
}
.shopping-item .item-detail span {
  font-weight: 600;
  font-size: 14px;
  color: rgb(2, 141, 188);
}

.shopping-item .item-detail .self {
  font-size: 13px;
  color: rgb(227, 1, 1);
  border: 1px solid rgb(227, 1, 1);
  padding: 5px 15px;
  background-color: white;
}

.shopping-item .item-detail .self:hover {
  color: white;
  background-color: rgb(227, 1, 1);
  cursor: pointer;
}
</style>
