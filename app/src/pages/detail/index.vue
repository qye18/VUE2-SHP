<template>
  <div>
    <TypeNav class="type-nav"></TypeNav>
    <div class="item-category">
      <li v-show="categoryView.category1Name">
        <a href="">{{ categoryView.category1Name }}</a
        ><span>/</span>
      </li>
      <li v-show="categoryView.category2Name">
        <a href="">{{ categoryView.category2Name }}</a
        ><span>/</span>
      </li>
      <li v-show="categoryView.category3Name">
        <a href="">{{ categoryView.category3Name }}</a
        ><span>/</span>
      </li>
      <li>{{ skuInfo.skuName }}</li>
    </div>
    <div class="item-detail">
      <div class="left">
        <div class="col-1">
          <img ref="placeholder" :src="skuInfo.skuDefaultImg" alt="" />
          <div class="preview" @mousemove="zoomIn" @mouseout="zoomOut"></div>
          <div class="amplifier" ref="amplifier">
            <img ref="bigImage" :src="skuInfo.skuDefaultImg" alt="" />
          </div>
          <div class="mask" ref="mask"></div>
        </div>
        <div class="carousel">
          <button class="prev" @click="slideCarousel(-390)">&lt;</button>
          <ul ref="thumbnailList">
            <li v-for="image in skuInfo.skuImageList" :key="image.id">
              <img :src="image.imgUrl" alt="" @mouseover="replaceImage" />
            </li>
          </ul>
          <!-- <li><img src="./images/b3.png" alt="" @mouseover="replaceImage" /></li> -->
          <!-- <li><img src="./images/b2.png" alt="" @mouseover="replaceImage" /></li> -->
          <button class="next" @click="slideCarousel(390)">&gt;</button>
        </div>
      </div>
      <div class="right">
        <h5>
          {{ skuInfo.skuName }}
        </h5>
        <p>{{ skuInfo.skuDesc }}</p>
        <div class="item-paras">
          <li>
            <h5>价格</h5>
            <p>￥{{ skuInfo.price }}</p>
            <span>降价通知</span>
            <span>累计评价 11111</span>
          </li>
          <li>
            <h5>支持</h5>
            <p>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</p>
          </li>
          <li>
            <h5>配送至</h5>
            <p>
              满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品
            </p>
          </li>
          <li>
            <h5>重量</h5>
            <p>{{ skuInfo.weight }}</p>
          </li>
          <hr />
          <li
            class="selections"
            v-for="saleAttr in spuSaleAttrList"
            :key="saleAttr.id"
          >
            <h5>{{ saleAttr.saleAttrName }}</h5>
            <ul>
              <button
                v-for="attrValue in saleAttr.spuSaleAttrValueList"
                :key="attrValue.id"
                :class="{ highlight: attrValue.isChecked === '1' }"
                @click="
                  selectSaleAttr(saleAttr.spuSaleAttrValueList, attrValue)
                "
              >
                {{ attrValue.saleAttrValueName }}
              </button>
              <!-- @click 参数不对，要改 -->
            </ul>
          </li>
        </div>
        <div class="item-quantity">
          <button
            class="minus"
            @click="quantity > 1 ? quantity-- : (quantity = 1)"
          >
            -
          </button>
          <input type="text" v-model="quantity" @change="changeQuantity" />
          <button class="plus" @click="quantity++">+</button>
          <button
            class="add-to-cart"
            @click="addToCart"
            >加入购物车</button
          >
        </div>
      </div>
    </div>
    <!-- 关注/分享/对比 -->
    <!-- ... -->
    <!-- 关注/分享/对比 -->
    <div class="more">
      <div class="left">
        <div class="title">
          <router-link active-class="active-left" :to="{ name: 'related' }"
            >相关分类</router-link
          >
          <router-link active-class="active-left" :to="{ name: 'recommend' }"
            >推荐品牌</router-link
          >
        </div>
        <router-view></router-view>
      </div>
      <div class="right">
        <div class="matches">
          <h4>选择搭配</h4>
          <div>
            <ul>
              <li class="current-item">
                <img src="./images/part01.png" alt="" />
                <h3>￥{{ skuInfo.price }}</h3>
              </li>
              <span>+</span>
              <li>
                <img src="./images/part01.png" alt="" />
                <p>Feless费勒斯VR</p>
                <label><input type="checkbox" /><span>39</span></label>
              </li>
              <li>
                <img src="./images/part02.png" alt="" />
                <p>Feless费勒斯VR</p>
                <label><input type="checkbox" /><span>39</span></label>
              </li>
              <li>
                <img src="./images/part03.png" alt="" />
                <p>Feless费勒斯VR</p>
                <label><input type="checkbox" /><span>39</span></label>
              </li>
              <li>
                <img src="./images/part01.png" alt="" />
                <p>Feless费勒斯VR</p>
                <label><input type="checkbox" /><span>39</span></label>
              </li>
            </ul>
            <li>
              <p>已选购0件商品</p>
              <span>套餐价</span>
              <h3>￥5299</h3>
              <button class="add-to-cart">加入购物车</button>
            </li>
          </div>
        </div>
        <div class="item-info">
          <ul class="title">
            <li><a>商品介绍</a></li>
            <li><a>规格与包装</a></li>
            <li><a>售后保障</a></li>
            <li><a>商品评价</a></li>
            <li><a>手机社区</a></li>
          </ul>
          <div class="content">
            <ul class="item-basic">
              <li v-for="attr in skuInfo.skuAttrValueList" :key="attr.attrId">
                {{ attr.attrName }}:{{ attr.valueName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <h4>猜你喜欢</h4>
      <ul>
        <li>
          <img src="./images/itemlike01.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./images/itemlike02.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./images/itemlike03.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./images/itemlike04.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./images/itemlike05.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./images/itemlike06.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Slides from "../home/unit/slides";
export default {
  name: "Detail",
  components: { Slides },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters([
      "categoryView",
      "price",
      "skuInfo",
      "spuSaleAttrList",
      "valueSkuJson",
    ]),
  },
  methods: {
    replaceImage({ target }) {
      // console.log(target.src);
      // console.log(this.$refs);
      this.$refs.placeholder.src = target.src;
    },
    slideCarousel(pixel) {
      let left = 0;
    },
    getItemDetail() {
      this.$store.dispatch("getItemDetail", this.$route.params.id);
    },
    selectSaleAttr(valueList, value) {
      // console.log(valueList, valueId);
      valueList.forEach((element) => {
        element.isChecked = "0";
      });
      value.isChecked = "1";
    },
    zoomIn(event) {
      this.$refs.amplifier.style.display = "block";
      this.$refs.mask.style.display = "block";
      const mask = this.$refs.mask;
      const bigImage = this.$refs.bigImage;
      let top = event.offsetY - 0.5 * mask.offsetWidth;
      let left = event.offsetX - 0.5 * mask.offsetHeight;

      if (top < 0) top = 0;
      if (left < 0) left = 0;
      if (top > mask.offsetHeight) top = mask.offsetHeight;
      if (left > mask.offsetWidth) left = mask.offsetWidth;
      mask.style.top = top + "px";
      mask.style.left = left + "px";
      bigImage.style.top = -(2 * top) + "px";
      bigImage.style.left = -(2 * left) + "px";
    },
    zoomOut() {
      // console.log('out');
      this.$refs.amplifier.style.display = "none";
      this.$refs.mask.style.display = "none";
    },
    changeQuantity(event) {
      // 如果是 文本字符串*1= NaN, 数字*1 = 数字
      let number = event.target.value * 1;
      if (isNaN(number) || number < 1) {
        console.log("illegal");
        this.quantity = 1;
      } else {
        this.quantity = parseInt(number);
      }
    },
    async addToCart() {
      // this.$store.dispatch('addToCart',{ id: this.$route.params.id,quantity:this.quantity})
      // .then(
      //   response => {
      //     console.log('成功',response);
      //   },
      //   error => {
      //     console.log('失败');
      //   }
      // )
      try {
        await this.$store.dispatch("addToCart", {
          skuId: this.$route.params.id,
          skuNum: this.quantity,
        });

        // 成功加入购物车，添加数据到本地储存
        sessionStorage.setItem('skuInfo',JSON.stringify(this.skuInfo));
        // sessionStorage.setItem('skuColor',this.skuInfo.);
        // 路由跳转
        this.$router.push({
          name: "addToCartSuccess",
          query: {
            quantity: this.quantity,
          },
        });
      } catch (error) {
        alert(error);
      }
    },
  },
  beforeMount() {},
  mounted() {
    this.getItemDetail();
  },
};
</script>

<style scoped>
.type-nav,
.item-detail,
.item-category,
.more,
.bottom {
  width: 1155px;
  margin: 0 auto;
}

.item-category {
  display: flex;
  font-size: 12px;
  color: rgb(100, 100, 100);
  padding: 20px 0 10px 0;
}

.item-category li a {
  color: rgb(100, 100, 100);
}

.item-category li a:hover {
  text-decoration: underline;
  color: rgb(227, 1, 1);
}
.item-category li span {
  margin: 0 10px;
}

/* 图片区 */

.item-detail {
  display: flex;
}
.item-detail .left {
  width: 400px;
}

.item-detail .left .col-1 {
  position: relative;
  width: 100%;
  height: 400px;
}

.item-detail .left .col-1 .preview {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
.item-detail .left .col-1 img {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(220, 220, 220);
}

.item-detail .left .col-1 .amplifier {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 98;
  left: 100%;
  top: 0;
  display: none;
  overflow: hidden;
}
.item-detail .left .col-1 .amplifier img {
  width: 200%;
  height: 200%;
  position: absolute;
  left: 0;
  top: 0;
}

.item-detail .left .col-1 .mask {
  width: 50%;
  height: 50%;
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  background-color: rgba(2, 219, 6, 0.335);
}

.item-detail .left .carousel {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.item-detail .left .carousel ul {
  display: flex;
  position: relative;
}

.item-detail .left .carousel li {
  height: 100%;
  margin-left: 20px;
  padding: 2px 0 5px;
  border: 1px solid rgb(220, 220, 220);
  padding: 2px;
}

.item-detail .left .carousel li:hover {
  border: 1px solid orange;
  box-shadow: 0 0 0 2px orange inset;
}

.item-detail .left .carousel li img {
  width: 65px;
  height: 60px;
}
.item-detail .left .carousel .prev,
.item-detail .left .carousel .next {
  position: absolute;
  border: 1px solid rgb(220, 220, 220);
  background-color: rgb(240, 240, 240);
  width: 12px;
  height: 100%;
  color: rgb(150, 150, 150);
}

.item-detail .left .carousel .prev:hover,
.item-detail .left .carousel .next:hover {
  background-color: rgb(220, 220, 220);
  color: white;
}
.item-detail .left .carousel .prev {
  left: 0;
}
.item-detail .left .carousel .next {
  right: 0;
}

.item-detail .right {
  width: 755px;
  padding: 10px 0 0 60px;
  font-size: 12px;
}

.item-detail .right > h5 {
  padding-bottom: 10px;
}
.item-detail .right h5 {
  font-size: 12px;
}

.item-detail .right > p {
  color: rgb(227, 1, 1);
}

.item-detail .right .item-paras li {
  padding-top: 20px;
  display: flex;
}

.item-detail .right .item-paras .selections {
  height: 40px;
  margin-bottom: 5px;
}

.item-detail .right .item-paras .selections ul {
  height: 100%;
}

.item-detail .right .item-paras .selections button {
  margin-right: 10px;
  padding: 5px 10px;
  border: 1px solid rgb(220, 220, 220);
  box-shadow: 0.5px 0.5px 0 0 rgb(150, 150, 150);
  font-size: 11px;
}

.item-detail .right .item-paras .selections .highlight {
  border: 1px solid rgb(5, 176, 5);
  box-shadow: 0.5px 0.5px 0 0 rgb(4, 161, 67);
}

.item-detail .right .item-paras li > h5 {
  width: 50px;
  font-weight: 500;
}

.item-detail .right .item-paras li:first-child {
  background-color: rgb(255, 232, 232);
  padding: 20px 0;
  margin: 10px 0 0 0;
  position: relative;
}

.item-detail .right .item-paras li:first-child p,
.item-detail .right .item-paras li:first-child p + span {
  color: rgb(210, 73, 73);
}

.item-detail .right .item-paras li:first-child > * {
  padding: 0 10px 0 0;
}
.item-detail .right .item-paras li:first-child span:last-child {
  position: absolute;
  right: 10px;
}
.item-detail .right .item-quantity {
  padding-top: 30px;
}

.item-detail .right .item-quantity input[type="text"] {
  width: 50px;
  outline: none;
  text-align: center;
}
.item-detail .right .item-quantity input[type="text"],
.item-detail .right .item-quantity .plus,
.item-detail .right .item-quantity .minus {
  border: 1px solid rgb(220, 220, 220);
  height: 30px;
}
.item-detail .right .item-quantity .plus,
.item-detail .right .item-quantity .minus {
  width: 30px;
}

.item-detail .right .item-quantity .add-to-cart {
  margin-left: 30px;
  background-color: rgb(227, 1, 1);
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}

.more {
  margin-top: 15px;
  display: flex;
  margin-bottom: 20px;
}
.more .left {
  width: 200px;
  border: 1px solid rgb(220, 220, 220);
  font-size: 12px;
}

.more .left .title a {
  width: 100px;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid rgb(220, 220, 220);
  font-size: 14px;
}

.more .left .title a:first-child {
  border-right: 1px solid rgb(220, 220, 220);
}

.more .left .title .active-left {
  border-bottom: 1px solid white;
  border-top: 2px solid rgb(227, 1, 1);
}

.more .right {
  width: 955px;
  margin: 0px 20px;
  font-size: 12px;
}

.more .right .matches h4 {
  width: 100%;
  background-color: rgb(240, 240, 240);
  padding: 10px 10px;
  font-size: 14px;
  border: 1px solid rgb(220, 220, 220);
}

.more .right .matches div {
  display: flex;
  border: 1px solid rgb(220, 220, 220);
}

.more .right .matches div ul {
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.more .right .matches div li {
  padding: 10px;
}

.more .right .matches div .current-item {
  color: rgb(227, 1, 1);
  font-size: 16px;
}

.more .right .matches div span {
  padding-top: 50px;
}

.more .right .matches div li input {
  vertical-align: text-bottom;
}

.more .right .matches img {
  width: 120px;
  height: 120px;
}

.more .right .matches div > li {
  width: 20%;
  padding: 10px 20px;
  border-left: 1px solid rgb(220, 220, 220);
}

.more .right .matches div > li p:first-child {
  margin-bottom: 10px;
}
.more .right .matches div > li span {
  font-weight: 600;
}
.more .right .matches div > li h3 {
  color: rgb(227, 1, 1);
  font-size: 18px;
  margin-bottom: 10px;
}

.more .right .matches div button {
  padding: 5px 10px;
  background-color: rgb(227, 1, 1);
  color: white;
}

.more .right .item-info .title {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(240, 240, 240);
  background-color: rgb(240, 240, 240);
}

.more .right .item-info .title li {
  background-color: white;
  padding: 10px 20px;
  border: 1px solid rgb(240, 240, 240);
}

.more .right .item-info .title li:first-child {
  background-color: rgb(227, 1, 1);
}
.more .right .item-info .title li:first-child a {
  color: white;
}

.more .right .item-info {
  margin-top: 20px;
  border: 1px solid rgb(220, 220, 220);
}
.more .right .item-info .content {
  padding: 10px 20px;
}

.more .right .item-info .content li {
  padding-bottom: 10px;
}

/* 猜你喜欢列表 */

.bottom {
  border: 1px solid rgb(220, 220, 220);
  margin: 30px auto 15px;
}

.bottom > h4 {
  background-color: rgb(240, 240, 240);
  padding: 8px 10px;
  font-size: 14px;
}

.bottom ul {
  display: flex;
}

.bottom ul li {
  margin-right: 5px;
  padding: 10px;
  font-size: 12px;
}

.bottom ul li h3 {
  padding: 5px 0 20px;
  color: rgb(227, 1, 1);
  font-size: 16px;
}
</style>
