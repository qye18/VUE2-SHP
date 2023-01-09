<template>
  <div class="pagination">
    <ul class="pagination-list">
      <button
        class="prev"
        @click="$emit('getPageNo', pageNo - 1)"
        :disabled="pageNo == 1"
      >
        上一页
      </button>
      <button
        v-show="pageNo > Math.ceil(continues / 2)"
        @click="$emit('getPageNo', 1)"
      >
        1
      </button>
      <button v-show="pageNo > Math.ceil(continues / 2)">...</button>
      <!-- continues -->
      <button
        v-for="(page, index) in continueStartAndEnd.end"
        :key="index"
        :class="{active: page == pageNo}"
        v-show="page >= continueStartAndEnd.start"
        @click="$emit('getPageNo', page)"
      >
        {{ page }}
      </button>
      <button v-show="pageNo < totalPage - Math.floor(continues / 2)">
        ...
      </button>
      <button
        v-show="pageNo < totalPage - Math.floor(continues / 2)"
        @click="$emit('getPageNo', totalPage)"
      >
        {{ totalPage }}
      </button>
      <button
        class="next"
        :disabled="pageNo == totalPage"
        @click="$emit('getPageNo', pageNo + 1)"
      >
        下一页
      </button>
    </ul>
    <p class="total-pages">
      共<span>{{ total }}</span
      >条
    </p>
    <!-- <p>{{ continueStartAndEnd.start }}---{{ continueStartAndEnd.end }} ------{{ pageNo }}</p> -->
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    continueStartAndEnd() {
      let start = 0,
        end = 0;
      if (this.continues > this.totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        start = this.pageNo - Math.floor(this.continues / 2);
        end = this.pageNo + Math.floor(this.continues / 2);
        if (start < 1) {
          start = 1;
          end = this.continues;
        }
        if (end > this.totalPage) {
          end = this.totalPage;
          start = this.totalPage - this.continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style scoped>
.pagination {
  width: 1155px;
  height: 40px;
  display: flex;
  margin: 30px auto;
  position: relative;
  font-size: 13px;
}

.pagination .pagination-list {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
}

.pagination .pagination-list button {
  border: 1px solid rgb(220, 220, 220);
  width: 45px;
  height: 100%;
  margin: 0 2px;
  cursor: pointer;
}

.pagination .pagination-list button:hover:enabled {
  background-color: rgb(220, 220, 220);
}
.pagination .active {
  background-color: rgb(220, 220, 220);
  
}

.pagination button:first-child,
.pagination button:last-child {
  width: 90px;
}

.pagination .total-pages {
  position: absolute;
  right: 5%;
}
</style>
