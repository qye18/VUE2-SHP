<template>
  <div class="footer">
    <div class="services">
      <Service title="购物指南">
        <ul>
          <li v-for="(s,index) in services.guide" :key="index">
            {{ s }}
          </li>
        </ul>
      </Service>
      <Service title="配送方式">
        <ul>
          <li v-for="(s,index) in services.diliveryMethod" :key="index">
            {{ s }}
          </li>
        </ul>
      </Service>
      <Service title="支付方式">
        <ul>
          <li v-for="(s,index) in services.paymentMethod" :key="index">
            {{ s }}
          </li>
        </ul>
      </Service>
      <Service title="售后服务">
        <ul>
          <li v-for="(s,index) in services.afterSale" :key="index">
            {{ s }}
          </li>
        </ul>
      </Service>
      <Service title="特色服务">
        <ul>
          <li v-for="(s,index) in services.special" :key="index">
            {{ s }}
          </li>
        </ul>
      </Service>
      <Service>
        <img src="./images/wx_cz.jpg" alt="二维码">
      </Service>
    </div>
    <Contact></Contact>
  </div>
</template>

<script>
import Service from './Service'
import Contact from './contact'
export default {
  components:{Service, Contact},
  data(){
    return {
      services: {
        special:['夺宝岛','DIY装机','延保服务','尚品汇E卡','尚品汇通信'],
        guide:['购物流程','会员介绍','生活旅行/团购','常见问题','购物指南'],
        diliveryMethod:['上门提送','211限时达','配送服务查询','配送费收取标准','海外配送'],
        paymentMethod:['货到付款','211限时达','配送服务查询','配送费收取标准','海外配送'],
        afterSale:['售后政策','价格保护','退款说明','返修/退换货','取消订单'],
      }
    }
  }
}
</script>

<style scoped>
  .footer {
    background-color: #eaeaea;
    padding: 30px 60px;
  }

  .services {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 30px;
    border-bottom: 1px solid rgb(214, 210, 210);
  }
</style>