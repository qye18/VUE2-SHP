<template>
  <div>
    <TypeNav class="type-nav"></TypeNav>
    <div class="item-category">
      <li><a href="">手机</a><span>/</span></li>
      <li><a href="">手机通讯</a><span>/</span></li>
      <li><a href="">手机</a><span>/</span></li>
      <li>Apple iPhone 12 (A2404) 64GB 蓝色 支持移动联通电信5G 双卡双待手机</li>
    </div>
    <div class="item-detail">
      <div class="left">
        <img ref="placeholder" src="./b2.png" alt="" />
        <div class="carousel">
          <button class="prev">&lt;</button>
          <li><img src="./b3.png" alt="" @mouseover="replaceImage"/></li>
          <li><img src="./b1.png" alt="" @mouseover="replaceImage"/></li>
          <li><img src="./b3.png" alt="" @mouseover="replaceImage"/></li>
          <li><img src="./b2.png" alt="" @mouseover="replaceImage"/></li>
          <button class="next">&gt;</button>
        </div>
      </div>
      <div class="right">
        <h5>
          Apple iPhone 12 (A2404) 64GB 蓝色 支持移动联通电信5G 双卡双待手机
        </h5>
        <p>推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返</p>
        <div class="item-paras">
          <li>
            <h5>价格</h5>
            <p>￥8197</p>
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
            <p>1.00</p>
          </li>
          <hr />
          <li class="selections">
            <h5>颜色</h5>
            <ul>
              <button>黑色</button>
              <button>红色</button>
              <button>蓝色</button>
              <button>白色</button>
            </ul>
          </li>
          <li class="selections">
            <h5>版本</h5>
            <ul>
              <button>64G</button>
              <button>128G</button>
            </ul>
          </li>
        </div>
        <div class="item-quantity">
          <button class="minus">-</button>
          <input type="text" />
          <button class="plus">+</button>
          <button class="add-to-cart">加入购物车</button>
        </div>
      </div>
    </div>
    <!-- 关注/分享/对比 -->
    <!-- ... -->
    <!-- 关注/分享/对比 -->
    <div class="more">
      <div class="left">
        <div class="title">
          <li><a>相关分类</a></li>
          <li><a>推荐品牌</a></li>
        </div>
        <div class="content">
          <ul class="item-list">
            <li>手机</li>
            <li>手机壳</li>
            <li>内存卡</li>
            <li>iPhone配件</li>
            <li>贴膜</li>
            <li>手机耳机</li>
            <li>移动电源</li>
            <li>平板电脑</li>
          </ul>
          <ul class="related-item">
            <li>
              <img src="./part01.png" alt="" />
              <p>Apple苹果iPhone 6s (A1699)</p>
              <h3>￥6088.00</h3>
              <button class="add-to-cart">加入购物车</button>
              <hr />
            </li>
            <li>
              <img src="./part02.png" alt="" />
              <p>Apple苹果iPhone 6s (A1699)</p>
              <h3>￥6088.00</h3>
              <button class="add-to-cart">加入购物车</button>
              <hr />
            </li>
            <li>
              <img src="./part03.png" alt="" />
              <p>Apple苹果iPhone 6s (A1699)</p>
              <h3>￥6088.00</h3>
              <button class="add-to-cart">加入购物车</button>
              <hr />
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="matches">
          <h4>选择搭配</h4>
          <div>
            <ul>
              <li class="current-item">
                <img src="./part01.png" alt="" />
                <h3>￥5299</h3>
              </li>
              <span>+</span>
              <li>
                <img src="./part01.png" alt="" />
                <p>Feless费勒斯VR</p>
                <label><input type="checkbox" /><span>39</span></label>
              </li>
              <li>
                <img src="./part02.png" alt="" />
                <p>Feless费勒斯VR</p>
                <label><input type="checkbox" /><span>39</span></label>
              </li>
              <li>
                <img src="./part03.png" alt="" />
                <p>Feless费勒斯VR</p>
                <label><input type="checkbox" /><span>39</span></label>
              </li>
              <li>
                <img src="./part01.png" alt="" />
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
              <li>分辨率：1920*1080(FHD)</li>
              <li>后置摄像头：1200万像素</li>
              <li>前置摄像头：500万像素</li>
              <li>核 数：其他</li>
              <li>频 率：以官网信息为准</li>
              <li>品牌： Apple</li>
              <li>商品名称：APPLEiPhone 6s Plus</li>
              <li>商品编号：1861098</li>
              <li>商品毛重：0.51kg</li>
              <li>商品产地：中国大陆</li>
              <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
              <li>系统：苹果（IOS）</li>
              <li>像素：1000-1600万</li>
              <li>机身内存：64GB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <h4>猜你喜欢</h4>
      <ul>
        <li>
          <img src="./itemlike01.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./itemlike02.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./itemlike03.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./itemlike04.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./itemlike05.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
        <li>
          <img src="./itemlike06.png" alt="" />
          <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <h3>￥3699.00</h3>
          <span>已有6人评价</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Slides from "../home/unit/slides";
export default {
  name: "Detail",
  components: { Slides },
  methods:{
    replaceImage({target}){
      
      console.log(target.src);
      console.log(this.$refs);
      this.$refs.placeholder.src = target.src
    }
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
}

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

.item-detail .left > img {
  width: 100%;
  height: 400px;
  border: 1px solid rgb(220, 220, 220);
}

.item-detail .left .carousel {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
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
.item-detail .left .carousel .prev ,
  .item-detail .left .carousel .next {
    position: absolute;
    border:1px solid rgb(220, 220, 220);
    background-color: rgb(240, 240, 240);
    width: 12px;
    height: 100%;
    color: rgb(150, 150, 150);
  }

  .item-detail .left .carousel .prev:hover ,
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
}

.more {
  margin-top: 15px;
  display: flex;
}
.more .left {
  width: 200px;
  border: 1px solid rgb(220, 220, 220);
  font-size: 12px;
}

.more .left .title {
  display: flex;
  justify-content: space-around;
}

.more .left .title li {
  width: 100%;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid rgb(220, 220, 220);
}

.more .left .title li:first-child {
  border-right: 1px solid rgb(220, 220, 220);
}
.more .left .title a {
  width: 50%;
  font-size: 14px;
}

.more .left .content {
  padding: 0 10px;
}
.more .left .content .item-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.more .left .content .item-list li {
  padding-top: 10px;
  width: 50%;
  border-bottom: 1px solid rgb(240, 240, 240);
}

.more .left .content .related-item {
  padding: 10px;
}

.more .left .content .related-item li {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(220, 220, 220);
}

.more .left .content .related-item h3 {
  color: rgb(227, 1, 1);
  font-size: 18px;
}

.more .left .content .related-item .add-to-cart {
  padding: 3px 10px;
  margin-left: 40px;
  margin-top: 5px;
  border: 1px solid rgb(150, 150, 150);
  color: rgb(150, 150, 150);
  font-size: 12px;
}

.more {
  margin-bottom: 20px;
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
