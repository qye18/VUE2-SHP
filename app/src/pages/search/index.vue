<template>
  <div>
    <TypeNav class="type-nav"></TypeNav>
    <div class="bread">
      <h4>全部结果<span>/</span></h4>
      <ul class="sui-tag">
        <li v-show="searchParams.categoryName">{{ searchParams.categoryName }}<i @click="removeCategoryName(searchParams)">×</i></li>
        <!-- <li>手机<i>×</i></li> -->
      </ul>
    </div>
    <Filters></Filters>
    <div class="sort">
      <li><a href="">综合↑</a></li>
      <li><a href="">价格</a></li>
      <li><a href="">新品</a></li>
      <li><a href="">评价</a></li>
    </div>
    <div class="shop">
      <ShoppingItem
        class="shop-item"
        v-for="g in goodsList"
        :key="g.id"
        :good="g"
      ></ShoppingItem>
      <!-- <ShoppingItem></ShoppingItem> -->
      <!-- <ShoppingItem></ShoppingItem> -->
      <!-- <ShoppingItem></ShoppingItem> -->
      <!-- <ShoppingItem></ShoppingItem> -->
    </div>
    <Pagination></Pagination>
    <Hot></Hot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Filters from "./filters";
import ShoppingItem from "./shoppingItem";
import Pagination from "./pagination";
import Hot from "./hot";
export default {
  name: "Search",
  data() {
    return {
      searchParams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
    };
  },
  components: { Filters, ShoppingItem, Pagination, Hot },
  beforeMount() {
    // console.log(this.$route);
    Object.assign(this.searchParams, this.$route.query);
  },
  mounted() {
    this.getSearchListInfo();
  },
  methods: {
    getSearchListInfo() {
      this.$store.dispatch("searchList", this.searchParams);
    },
    removeCategoryName() {
      this.searchParams.categoryName = undefined;
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      // console.log('#########here');
      console.log(this.searchParams);
      this.getSearchListInfo();
    }
  },
  computed: {
    ...mapGetters(["goodsList"]),
  },
  watch: {
    $route() {
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      this.searchParams.categoryName = undefined;

      Object.assign(this.searchParams,this.$route.params);
      this.getSearchListInfo();
      // 去掉地址上的categoryName等，还没完成 ####################3
      // this.$router.push({name:'search'});
    },
  },
};
</script>

<style scoped>
.type-nav {
  padding: 0 50px;
}

.bread {
  width: 1155px;
  margin: 10px auto;
  display: flex;
  font-size: 12px;
  color: rgb(100, 100, 100);
}
.bread h4 {
  margin: 0 10px 0 5px;
  font-weight: 500;
}

.bread h4 span {
  margin-left: 10px;
}
.bread ul {
  display: flex;
}

.bread ul li {
  margin-right: 5px;
  padding: 0 5px;
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(230, 230, 230);
}

.bread ul li i {
  padding-left: 5px;
  cursor: pointer;
}

.sort {
  width: 1155px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid rgb(230, 230, 230);
  box-shadow: 0 0 4px 1px rgb(230, 230, 230);
  font-size: 12px;
  margin-bottom: 20px;
  display: flex;
}
.sort li {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.sort li:first-child {
  background-color: rgb(227, 1, 1);
}

.sort li a {
  color: rgb(100, 100, 100);
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
  flex-wrap: wrap;
}

.shop-item {
  width: 20%;
}
</style>
