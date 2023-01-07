<template>
  <div>
    <TypeNav class="type-nav"></TypeNav>
    <div class="bread">
      <h4>全部结果<span>/</span></h4>
      <ul class="sui-tag">
        <li v-show="searchParams.categoryName">
          {{ searchParams.categoryName
          }}<i @click="removeCategoryName(searchParams)">×</i>
        </li>
        <li v-show="searchParams.trademark">
          {{ searchParams.trademark.split(":")[1] }}
          <i @click="removeTrademark">×</i>
        </li>
        <li v-for="(prop, index) in searchParams.props" :key="index">
          {{ prop.split(":")[1] }}<i @click="removeAttrName(index)">×</i>
        </li>
      </ul>
    </div>
    <Filters
      @getAttrAndAttrValue="getAttrAndAttrValue"
      @getTrademarkValue="getTrademarkValue"
    ></Filters>
    <div class="sort">
      <!-- span里需要加箭头，暂时没法注册iconfont，先跳过。 
        判断1：当前a被选择，才会显示箭头
        判断2：当前order是asc/desc => 箭头朝上/朝下 -->
      <li>
        <a :class="{ active: isOrderOne }" @click="changeOrder(1)">综合<span></span></a>
      </li>
      <li>
        <a :class="{ active: isOrderTwo }" @click="changeOrder(2)">价格<span></span></a>
      </li>
      <li><a>新品</a></li>
      <li><a>评价</a></li>
    </div>
    <div class="shop">
      <ShoppingItem
        class="shop-item"
        v-for="g in goodsList"
        :key="g.id"
        :good="g"
      ></ShoppingItem>
    </div>
    <Pagination :pageNo="searchParams.pageNo" :pageSize="searchParams.pageSize" :total="total" :continues="5"
    @getPageNo="getPageNo"></Pagination>
    <Hot></Hot>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
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
    Object.assign(this.searchParams, this.$route.query);
  },
  mounted() {
    this.getSearchListInfo();
    // console.log(this.$store.state.search);
  },
  methods: {
    removeTrademark() {
      this.searchParams.trademark = "";
      // console.log(this.searchParams);
      this.getSearchListInfo();
    },
    getTrademarkValue(tmId, tmName) {
      // let trademark = `${tmId}:${tmName}`;
      this.searchParams.trademark = `${tmId}:${tmName}`;
      this.getSearchListInfo();
    },
    getAttrAndAttrValue(attrId, attrVal, attrName) {
      // console.log(v1,v2,v3);
      let props = `${attrId}:${attrVal}:${attrName}`;
      if (this.searchParams.props.indexOf(props) == -1) {
        this.searchParams.props.push(props);
      }
      this.getSearchListInfo();
      this.$router.push({ name: "search", params: this.searchParams });
    },
    getSearchListInfo() {
      this.$store.dispatch("searchList", this.searchParams);
    },
    removeCategoryName() {
      this.searchParams.categoryName = undefined;
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      // console.log('#########here');
      // console.log(this.searchParams);
      this.getSearchListInfo();
      this.$router.push({ name: "search" });
    },
    removeAttrName(attrIndex) {
      this.searchParams.props.splice(attrIndex, 1);
      this.getSearchListInfo();
      // this.$router.push({name:'search', params: this.searchParams})
    },
    changeOrder(currentOrder) {
      let order;
      // 点的不是当前高亮，换排序方式
      if (this.searchParams.order.indexOf(currentOrder) == -1) {
        order = `${currentOrder}:desc`;
      }
      // 点的是当前的自己，flip顺序
      else {
        if (this.searchParams.order.indexOf("desc")) {
          order = `${this.searchParams.order.split(":")[0]}:asc`;
        } else {
          order = `${this.searchParams.order.split(":")[0]}:desc`;
        }
      }
      this.searchParams.order = order;
      this.getSearchListInfo();
    },
    getPageNo(pageNo){
      // console.log(pageNo);
      this.searchParams.pageNo = pageNo;
      this.getSearchListInfo();
    }
  },
  computed: {
    ...mapGetters(["goodsList"]),
    ...mapState({
      total: state => state.search.searchList.total,
    }),
    isOrderOne() {
      return this.searchParams.order.indexOf("1") != -1;
    },
    isOrderTwo() {
      return this.searchParams.order.indexOf("2") != -1;
    },
  },
  watch: {
    $route() {
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      this.searchParams.categoryName = undefined;

      Object.assign(this.searchParams, this.$route.params);
      this.getSearchListInfo();
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

.sort li a {
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.sort .active {
  background-color: rgb(227, 1, 1);
  color: white;
}

.sort li a {
  color: rgb(100, 100, 100);
  cursor: pointer;
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
