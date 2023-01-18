<template>
  <div class="trade">
    <h4>填写并核对订单信息</h4>
    <form>
      <div class="line trade-row-1">
        <h5 class="title">收件人信息</h5>
        <div class="receiver-info">
          <li v-for="(addr, index) in userAddressList" :key="index">
            <p
              @click="changeIndex(index)"
              :class="{ chosen: index == currentIndex }"
            >
              <i>{{ addr.name }}</i>
              <span
                >{{ addr.address }}<span>{{ addr.phoneNum }}</span></span
              >
            </p>
          </li>
        </div>
      </div>
      <div class="line trade-row-2">
        <h5 class="title">支付方式</h5>
        <div>
          <li class="chosen">在线支付</li>
          <li>货到付款</li>
        </div>
      </div>
      <div class="line trade-row-3">
        <h5 class="title">送货清单</h5>
        <div class="line-1">
          <h5 class="title">配送方式</h5>
          <p>
            <span class="delivery-method">天天快递</span> 配送时间:
            预计8月10日(周三) 09:00-15:00送达
          </p>
        </div>
        <div class="line-2">
          <h5 class="title">商品清单</h5>
          <ul class="item-list">
            <li v-for="order in orderDetailList" :key="order.skuId">
              <img :src="order.imgUrl" alt="" />
              <div>
                <div class="l-2-row-1">
                  <p>{{ order.skuName }}</p>
                  <p>￥{{ order.orderPrice }}</p>
                  <p>{{ order.skuNum }}</p>
                </div>
                <!--数量-->
                <div class="l-2-row-2">
                  <p>有货</p>
                  <p>7天无理由退货</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="line trade-row-4">
        <h5 class="title">买家留言:</h5>
        <div>
          <textarea
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder="建议先与商家沟通确认"
            v-model="userComment"
          ></textarea>
        </div>
      </div>
      <div class="line trade-row-5">
        <h5 class="title">发票信息:</h5>
        <div>
          <p>普通发票</p>
        </div>
        <h5 class="title">使用优惠/抵用</h5>
      </div>
    </form>
    <div class="line trade-row-6">
      <div class="row-6-line-1">
        <li>
          <p>
            <span>{{ totalNum }}</span
            >件商品,总商品金额:
          </p>
          <p>￥{{ totalAmount }}</p>
        </li>
        <li>
          <p>返现:</p>
          <p>￥0.00</p>
        </li>
        <li>
          <p>运费:</p>
          <p>￥0.00</p>
        </li>
      </div>
    </div>
    <div class="line trade-row-7">
      <div class="row-7-line-1">
        <p>
          应付金额: <span>￥{{ totalAmount }}</span>
        </p>
        <p>
          寄送至: <span>广东深圳市宝安区</span> 收货人:
          <span>王五 13544444444</span>
        </p>
      </div>
    </div>
    <div class="trade-row-8">
      <button @click="makeOrder" class="submit">提交订单</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Trade",
  data() {
    return {
      userAddressList: [
        {
          name: "admin",
          address: "北京市朝阳区远洋天地5号楼",
          phoneNum: 15852016643,
        },
        { name: "李四", address: "北京市北七家镇", phoneNum: 13522222222 },
        {
          name: "王五",
          address: "湖北武汉江夏区东湖网谷",
          phoneNum: 13533333333,
        },
        { name: "老六", address: "广东深圳市宝安区", phoneNum: 13544444444 },
      ],
      currentIndex: 0,
      userComment: "",
    };
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    async makeOrder() {
      let data = {
        tradeNo: this.tradeNo,
        userInfo: {
          consignee: this.userAddressList[0].name,
          consigneeTel: this.userAddressList[0].phoneNum,
          deliveryAddress: this.userAddressList[0].address,
          paymentWay: "ONLINE",
          orderComment: this.userComment,
          orderDetailList: this.orderDetailList,
        },
      };
      try {
        let result = await this.$store.dispatch('makeOrder',data);
        console.log(result);
        // this.$router.push('/pay');
      } catch (error) {
        
      }
      // console.log(data);
    },
  },
  mounted() {
    this.$store.dispatch("getUserAddress");
    this.$store.dispatch("getOrderInfo");
  },
  computed: {
    ...mapGetters(["orderDetailList", "totalAmount", "totalNum", "tradeNo"]),
    ...mapState({
      orderInfo: (state) => state.trade.orderInfo,
    }),
  },
};
</script>

<style scoped>
.trade {
  width: 1150px;
  margin: 30px auto;
}

.trade form {
  margin: 10px 0;
  padding: 20px 30px;
  border: 1px solid rgb(220, 220, 220);
}

.trade form .line {
  border-bottom: 1px solid rgb(220, 220, 220);
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.trade form .line .title {
  padding-bottom: 20px;
}

.trade form .line > div {
  font-size: 12px;
  margin-left: 15px;
}

.trade form .trade-row-1 .receiver-info li {
  margin-bottom: 10px;
}

.trade form .trade-row-1 .receiver-info li p {
  padding: 5px 0;
}
.trade form .trade-row-1 .receiver-info li p i {
  padding: 8px 25px;
  border: 1px solid rgb(220, 220, 220);
  margin-right: 20px;
  cursor: pointer;
}

.trade form .trade-row-1 .receiver-info li p.chosen i,
.trade form li.chosen {
  border: 1px solid rgb(227, 1, 1);
  box-shadow: inset 0 0 0 1px rgb(227, 1, 1);
  background: url("./images/choosed.png") no-repeat right bottom;
}

.trade form .trade-row-1 .receiver-info li p span:hover {
  cursor: pointer;
  background-color: rgb(240, 240, 240);
}

.trade form .trade-row-1 .receiver-info li p span {
  padding: 8px 0;
}

.trade form .trade-row-2 > div {
  display: flex;
}

.trade form .trade-row-2 > div li {
  border: 1px solid rgb(220, 220, 220);
  padding: 8px 25px;
  margin-right: 20px;
  cursor: pointer;
}

.trade form .trade-row-3 .line-1 {
  padding: 20px 10px 30px 10px;
  background-color: rgb(240, 240, 240);
  margin-bottom: 5px;
}

.trade form .trade-row-3 .line-1 .title {
  padding-bottom: 30px;
}
.trade form .trade-row-3 .line-2 {
  padding: 20px 10px 30px 10px;
  background-color: rgb(249, 229, 227);
}

.trade form .trade-row-3 .line-1 p {
  padding-left: 20px;
}

.trade form .trade-row-3 .line-1 .delivery-method {
  padding: 8px 15px;
  border: 1px solid rgb(224, 206, 196);
  margin-right: 20px;
}

.trade form .trade-row-3 .line-1 .title,
.trade form .trade-row-3 .line-2 .title {
  font-size: 12px;
}

.trade form .trade-row-3 .line-2 .item-list {
  padding-left: 20px;
}
.trade form .trade-row-3 .line-2 .item-list img {
  width: 80px;
  height: 80px;
}

.trade form .trade-row-3 .line-2 .item-list li {
  margin-bottom: 10px;
  display: flex;
}

.trade form .trade-row-3 .line-2 .item-list li .l-2-row-1,
.trade form .trade-row-3 .line-2 .item-list li .l-2-row-2 {
  display: flex;
}

.trade form .trade-row-3 .line-2 .item-list li img {
  margin-right: 10px;
}

.trade form .trade-row-3 .line-2 .item-list li .l-2-row-1 p,
.trade form .trade-row-3 .line-2 .item-list li .l-2-row-2 p {
  padding-right: 50px;
}

.trade form .trade-row-3 .line-2 .item-list li .l-2-row-2 {
  padding-top: 20px;
}
.trade form .trade-row-4 textarea {
  height: 80px;
  width: 500px;
  outline: none;
  border: 1px solid rgb(200, 200, 200);
  resize: none;
}

.trade form .trade-row-5 > div {
  margin-bottom: 20px;
}

.trade .trade-row-6 {
  margin-top: 20px;
  font-size: 12px;
  position: relative;
  height: 80px;
}

.trade .trade-row-6 .row-6-line-1 {
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
}

.trade .trade-row-6 .row-6-line-1 li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3px;
  width: 250px;
}

.trade .trade-row-6 .row-6-line-1 li span {
  color: rgb(227, 1, 1);
}

.trade .trade-row-7 {
  font-size: 12px;
  text-align: right;
  background-color: rgb(240, 240, 240);
  padding: 10px 10px 10px 0;
  border: 1px solid rgb(220, 220, 220);
}

.trade .trade-row-7 .row-7-line-1 p:first-child span {
  color: rgb(227, 1, 1);
  font-weight: 600;
  font-size: 14px;
  padding-left: 10px;
}

.trade .trade-row-7 .row-7-line-1 p:first-child {
  padding-bottom: 5px;
}

.trade .trade-row-7 .row-7-line-1 p:nth-child(2) {
  color: rgb(120, 120, 120);
}

.trade .trade-row-7 .row-7-line-1 p:nth-child(2) span:nth-child(1) {
  padding-right: 10px;
}

.trade .trade-row-8 {
  text-align: right;
}

.trade .trade-row-8 .submit {
  margin-top: 10px;
  background-color: rgb(227, 1, 1);
  color: white;
  padding: 10px 20px;
}
</style>
