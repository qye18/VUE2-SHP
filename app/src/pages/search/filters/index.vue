<template>
  <div class="filters">
    <div class="filter-category">
      <h5 class="filter-title">品牌</h5>
      <ul class="filter-content">
        <li v-for="tm in trademarkList" :key="tm.tmId">
          <!-- <a @click="getTrademarkValue(tm.tmId,tm.tmName)">{{ tm.tmName }}</a> -->
          <a @click="$emit('getTrademarkValue',tm.tmId,tm.tmName )">{{ tm.tmName }}</a>
        </li>
      </ul>
    </div>
    <div
      class="filter-category"
      v-for="attribute in attrsList"
      :key="attribute.attrId"
    >
      <h5 class="filter-title">{{ attribute.attrName }}</h5>
      <ul class="filter-content">
        <li v-for="(attrVal, index) in attribute.attrValueList" :key="index">
          <a @click="$emit('getAttrAndAttrValue',attribute.attrId,attrVal,attribute.attrName)">{{ attrVal }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Filters",
  computed: {
    ...mapGetters(["attrsList", "trademarkList"]),
  },
  methods: {
    getTrademarkValue(id,val) {
      // console.log(`${id}:${val}`);
    }
  },
  mounted(){
    // console.log(this);
  }
};
</script>

<style scoped>
.filters {
  width: 1155px;
  margin: 10px auto;
}

.filters .bread {
  display: flex;
  font-size: 12px;
}

.filters .bread span {
  font-size: 12px;
  margin-right: 10px;
}

.bread .sui-tag {
  display: flex;
}

.bread .sui-tag li {
  padding: 0 5px;
  margin: 0 2px;
  background-color: rgb(245, 245, 245);
  border: 1px solid rgb(230, 230, 230);
}
.filters .bread span a {
  padding-right: 5px;
}

.filter-category,
.filter-content {
  display: flex;
}

.filter-category {
  /* border: 1px solid rgb(230,230,230); */
  height: 45px;
}

.filter-category:first-child {
  height: 100px;
}

.filter-category .filter-title {
  width: 150px;
  border: 1px solid rgb(230, 230, 230);
  padding-right: 10px;
  font-weight: 500;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: rgb(240, 240, 240);
}

.filter-content {
  border: 1px solid rgb(230, 230, 230);
  width: 100%;
  font-size: 13px;
  display: flex;
  align-items: center;
}

.filter-content li,
.filter-category:first-child .filter-content {
  padding-left: 30px;
}

.filter-content a {
  cursor: pointer;
}

.filter-category:first-child .filter-content li {
  border: 1px solid rgb(230, 230, 230);
  padding: 15px 25px;
  font-weight: 600;
}
</style>
