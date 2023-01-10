<template>
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
              <img src="../images/part01.png" alt="" />
              <p>Apple苹果iPhone 6s (A1699)</p>
              <h3>￥6088.00</h3>
              <button class="add-to-cart">加入购物车</button>
              <hr />
            </li>
            <li>
              <img src="../images/part02.png" alt="" />
              <p>Apple苹果iPhone 6s (A1699)</p>
              <h3>￥6088.00</h3>
              <button class="add-to-cart">加入购物车</button>
              <hr />
            </li>
            <li>
              <img src="../images/part03.png" alt="" />
              <p>Apple苹果iPhone 6s (A1699)</p>
              <h3>￥6088.00</h3>
              <button class="add-to-cart">加入购物车</button>
              <hr />
            </li>
          </ul>
        </div>
</template>

<script>
export default {
  name:'related',
}
</script>

<style scoped>
  
.content {
  padding: 0 10px;
}
.content .item-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.content .item-list li {
  padding-top: 10px;
  width: 50%;
  border-bottom: 1px solid rgb(240, 240, 240);
}

.content .related-item {
  padding: 10px;
}

.content .related-item li {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(220, 220, 220);
}

.content .related-item h3 {
  color: rgb(227, 1, 1);
  font-size: 18px;
}

.content .related-item .add-to-cart {
  padding: 3px 10px;
  margin-left: 40px;
  margin-top: 5px;
  border: 1px solid rgb(150, 150, 150);
  color: rgb(150, 150, 150);
  font-size: 12px;
}
</style>