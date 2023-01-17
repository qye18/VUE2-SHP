<template>
  <div class="shopping-cart">
    <h4>全部商品</h4>
    <div class="row-1">
      <li>商品</li>
      <li>单价（元）</li>
      <li>数量</li>
      <li>小计（元）</li>
      <li>操作</li>
    </div>
    <div class="row-2">
      <li
        v-for="cartItem in $store.state.shoppingCart.cartInfoList"
        :key="cartItem.id"
        class="shopping-item"
      >
        <div class="detail">
          <input
            type="checkbox"
            @click="checkCartItem(cartItem)"
            :checked="cartItem.isChecked === 1"
            name=""
            id=""
          />
          <a href=""><img :src="cartItem.imgUrl" alt="" /></a>
          <a class="desc"> {{ cartItem.skuName }}</a>
        </div>
        <p class="price">￥{{ cartItem.skuPrice }}</p>
        <div class="quantity">
          <button class="desc" @click="updateQuantity(cartItem, -1, 'desc')">
            -
          </button>
          <input
            type="text"
            @change="
              updateQuantity(cartItem, $event.target.value * 1, 'change')
            "
            :value="cartItem.skuNum"
          />
          <button class="asc" @click="updateQuantity(cartItem, 1, 'asc')">
            +
          </button>
        </div>
        <p class="sub-total">￥{{ cartItem.skuPrice * cartItem.skuNum }}</p>
        <div class="operation">
          <button @click="deleteCartItem(cartItem)" class="delete">删除</button>
          <button class="add-to-favor">移入收藏夹</button>
        </div>
      </li>
    </div>
    <div class="sum-up">
      <div class="left">
        <label for="selectAll">
          <input
            :checked="isAllChecked"
            type="checkbox"
            name=""
            id="selectAll"
            @click="checkAllCartItem"
          />
          全选
        </label>
        <button @click="deleteAllCheckedItem" class="delete-all">删除选中的商品</button>
        <button class="add-all-to-favor">移到我的收藏夹</button>
        <button class="delete-all-nonsense">清除下柜商品</button>
      </div>
      <div class="right">
        <p>
          已选择<span>{{ totalItemNum }}</span
          >件商品
        </p>
        <div class="price-total">
          <p>
            总价：<span>￥{{ totalPrice }}</span>
          </p>
          <p>促销<span>￥0</span></p>
        </div>
        <button class="pay">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "shoppingCart",
  mounted() {
    this.$store.dispatch("getShoppingCartList");
  },
  computed: {
    ...mapState({
      cartInfoList: (state) => state.shoppingCart.cartInfoList,
    }),

    totalPrice() {
      // forEach写法
      /* this.cartInfoList.forEach(cartItem => {
        if (cartItem.isChecked) {
          total+=cartItem.skuPrice * cartItem.skuNum;
        }
     }); */
      // reduce写法
      return this.cartInfoList.reduce((sum, item) => {
        if (item.isChecked) {
          sum += item.skuPrice * item.skuNum;
        }
        return sum;
      }, 0);
    },
    totalItemNum() {
      return this.cartInfoList.reduce((sum, item) => {
        if (item.isChecked) {
          sum++;
        }
        return sum;
      }, 0);
    },
    isAllChecked() {
      return this.cartInfoList.every((item) => item.isChecked == 1);
    },
  },
  methods: {
    async updateQuantity(cartItem, num, type) {
      switch (type) {
        case "asc":
          num = 1;
          break;
        case "desc":
          num = cartItem.skuNum > 1 ? -1 : 0;
          break;
        case "change":
          num = num >= 1 ? num - cartItem.skuNum : 0;
      }
      try {
        await this.$store.dispatch("addToCart", {
          skuId: cartItem.skuId,
          skuNum: num,
        });
        // console.log("修改购物车数据成功");
        this.$store.dispatch("getShoppingCartList");
      } catch (error) {
        alert("修改购物车数据失败");
      }
      // 这里不能直接写，需要等修改数据后，再获取数据。所以要用async，await，
      // try catch是为了确保修改数据库数据成功才调用getShoppingCartList获取数据
      // this.$store.dispatch('addToCart',{skuId:cartItem.skuId,skuNum:num});
      //  this.$store.dispatch('getShoppingCartList');
    },
    async deleteCartItem(cartItem) {
      try {
        await this.$store.dispatch("deleteCartItem", cartItem.skuId);
        this.$store.dispatch("getShoppingCartList");
      } catch (error) {
        alert(error);
      }
    },
    async checkCartItem(cartItem) {
      try {
        let isChecked = event.target.checked ? "1" : "0";
        await this.$store.dispatch("checkCartItem", {
          skuId: cartItem.skuId,
          isChecked,
        });
        this.$store.dispatch("getShoppingCartList");
      } catch (error) {
        alert(error.message);
      }
    },
    async checkAllCartItem() {
      try {
        let isChecked = event.target.checked ? "1":"0";
        await this.$store.dispatch('checkAllCartItem',isChecked);
        this.$store.dispatch('getShoppingCartList');
      } catch (error) {
        alert(error.message);
      }
    },
    async deleteAllCheckedItem(){
      try {
        await this.$store.dispatch('deleteAllCheckedItem');
        this.$store.dispatch('getShoppingCartList');
      } catch (error) {
        alert(error.message);
      }
    }
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
.shopping-cart {
  width: 1155px;
  margin: 20px auto;
  font-size: 12px;
}

.shopping-cart h4 {
  font-size: 15px;
}

.shopping-cart .row-1 {
  display: flex;
  position: relative;
  /* justify-content: space-between; */
  padding: 10px 40px 10px 10px;
  margin-top: 5px;
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(220, 220, 220);
}

.shopping-cart .row-1 li {
  position: absolute;
}
.shopping-cart .row-1 li:first-child {
  position: relative;
}

.shopping-cart .row-1 li:nth-child(2) {
  left: 45%;
}
.shopping-cart .row-1 li:nth-child(3) {
  left: 60%;
}
.shopping-cart .row-1 li:nth-child(4) {
  left: 75%;
}
.shopping-cart .row-1 li:nth-child(5) {
  left: 90%;
}

.shopping-cart .row-2 {
  margin: 20px 0;
}
.shopping-cart .row-2 .shopping-item {
  display: flex;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid rgb(220, 220, 220);
  margin-bottom: -1px;
}

.shopping-cart .row-2 .shopping-item .detail {
  display: flex;
  align-items: flex-start;
  width: 45%;
}

.shopping-cart .row-2 .shopping-item .detail img {
  width: 100px;
  height: 100px;
}

.shopping-cart .row-2 .shopping-item .detail input {
  margin-right: 10px;
}

.shopping-cart .row-2 .shopping-item .detail .desc {
  width: 300px;
}

.shopping-cart .row-2 .shopping-item .price,
.shopping-cart .row-2 .shopping-item .quantity,
.shopping-cart .row-2 .shopping-item .sub-total {
  width: 15%;
}

.shopping-cart .row-2 .shopping-item .price,
.shopping-cart .row-2 .shopping-item .sub-total {
  font-size: 15px;
}
.shopping-cart .row-2 .shopping-item .quantity input {
  width: 40px;
  outline: none;
}

.shopping-cart .row-2 .shopping-item .quantity input,
.shopping-cart .row-2 .shopping-item .quantity .desc,
.shopping-cart .row-2 .shopping-item .quantity .asc {
  border: 1px solid rgb(220, 220, 220);
  padding: 5px 8px;
}

.shopping-cart .row-2 .shopping-item .operation {
  display: flex;
  flex-direction: column;
}
.shopping-cart .row-2 .shopping-item .operation button {
  text-align: left;
}
.shopping-cart .row-2 .shopping-item .operation button:hover {
  text-decoration: underline;
  color: rgb(227, 1, 1);
}

.shopping-cart .sum-up {
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(220, 220, 220);
  align-items: center;
  padding-left: 10px;
}

.shopping-cart .sum-up .left > * {
  padding-right: 30px;
  font-size: 12px;
  color: rgb(100, 100, 100);
}
.shopping-cart .sum-up .left label input {
  vertical-align: text-bottom;
  margin-bottom: 1px;
}

.shopping-cart .sum-up .right {
  display: flex;
  align-items: center;
}

.shopping-cart .sum-up .right .price-total {
  padding-left: 30px;
}

.shopping-cart .sum-up .right .price-total p:first-child span {
  font-size: 18px;
  color: rgb(227, 1, 1);
}

.shopping-cart .sum-up .right .pay {
  background-color: rgb(227, 1, 1);
  color: white;
  padding: 15px 30px;
  margin-left: 120px;
  font-size: 15px;
}
</style>
