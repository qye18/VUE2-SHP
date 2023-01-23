<template>
  <div class="pay">
    <div class="pay-row-1">
      <h6>订单提交成功，请您及时付款，以便尽快为您发货~~</h6>
      <div>
        <p>请您在提交<span>4小时</span>之内完成支付, 超时
      订单会自动取消，订单号: {{$route.query.orderId}}</p>
      <p>应付金额: <span>￥{{ pmtInfo.totalFee }}</span></p>
      </div>
    </div>
    <div class="pay-row-2">
      <div class="row-2-line-1">
        <h6>重要说明:</h6>
        <ul>
          <li><p>尚品汇商城支付平台目前支持<span>支付宝</span>支付方式</p></li>
          <li><p>其他支付渠道正在调试中, 敬请期待</p></li>
          <li><p>为了保证您的购物支付流程顺利完成, 请保存以下支付宝信息</p></li>
        </ul>
      </div>
      <div class="row-2-line-2">
        <h6>支付宝账户信息: (很重要, 请保存!!!)</h6>
        <ul> 
          <li><p>支付宝账号: 11111111</p></li>
          <li><p>密码: 111111</p></li>
          <li><p>支付密码: 111111</p></li>
        </ul>
      </div>
    </div>
    <div class="pay-row-3">
        <div class="row-3-line-1">
          <h6>支付平台</h6>
          <ul>
            <li><a><img src="./images/pay2.jpg" alt=""></a></li>
            <li><a><img src="./images/pay3.jpg" alt=""></a></li>
          </ul>
        </div>
        <div class="row-3-line-2">
          <h6>支付网银</h6>
          <ul>
            <li><a><img src="./images/pay10.jpg" alt=""></a></li>
            <li><a><img src="./images/pay11.jpg" alt=""></a></li>
            <li><a><img src="./images/pay12.jpg" alt=""></a></li>
            <li><a><img src="./images/pay13.jpg" alt=""></a></li>
            <li><a><img src="./images/pay14.jpg" alt=""></a></li>
            <li><a><img src="./images/pay15.jpg" alt=""></a></li>
            <li><a><img src="./images/pay16.jpg" alt=""></a></li>
            <li><a><img src="./images/pay17.jpg" alt=""></a></li>
            <li><a><img src="./images/pay18.jpg" alt=""></a></li>
            <li><a><img src="./images/pay19.jpg" alt=""></a></li>
            <li><a><img src="./images/pay20.jpg" alt=""></a></li>
            <li><a><img src="./images/pay21.jpg" alt=""></a></li>
            <li><a><img src="./images/pay22.jpg" alt=""></a></li>
          </ul>
        </div>
        <div class="submit">
          <!-- <button class="submitPmt">立即支付</button> -->
        <el-button type="text" class="submitPmt" @click="open">立即支付</el-button>
        </div>
        <div class="row-3-line-3">
          <h6>其他支付方式</h6>
        </div>
      </div>
      
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import QRCode from 'qrcode'
export default {
  name:'pay',
  data() {
    return {
      payTimer:null,
      code:null
    }
  },
  methods:{
    async open() {
      let url = await QRCode.toDataURL(this.pmtInfo.codeUrl); 
        this.$alert(`<img src="${url}"/>`,'微信支付', {
          dangerouslyUseHTMLString: true,
          center:true,
          showClose:false,
          showCancelButton:true,
          confirmButtonText:'已支付成功',
          cancelButtonText:'支付遇见问题',
          beforeClose: (action, instance, done) => {
            if (action == 'confirm') {
              if (this.code == 200) {
                done();
                clearInterval(this.payTimer);
                this.payTimer =null;
                this.$router.push({name:'paySuccess'})
              }
            }
          }
        });

        if (!this.payTimer) {
          this.payTimer = setInterval(async () => {
          this.code = await this.$store.dispatch('getPayStatus',this.$route.query.orderId);
          if (this.code == 200 ) {
            clearInterval(this.payTimer);
            this.payTimer = null;
            this.$msgbox.close();
            this.$router.push({name:'paySuccess'})
          }
        }, 1000);
        }
        
      // this.$router.push({name:'paySuccess'})
      }
      
  },
  mounted() {
    this.$store.dispatch('getPayInfo', this.$route.query.orderId);
  },
  computed:{
    ...mapState({
      pmtInfo: state => state.pay.pmtInfo
    })
  }
}
</script>

<style scoped>
  .pay {
    width: 1155px;
    margin: 0 auto;
  }

  .pay p{ font-size: 12px;}
  .pay .pay-row-1  {
    position: relative;
    padding: 20px 30px;
  }

  .pay .pay-row-1::before {
    content: '';
    position: absolute;
    left: 0;
		width: 20px;
		height: 20px;
		background-image: url('./images/right.png');
		background-size: 100% 100%;
  }

  .pay .pay-row-1 h6 {
    padding-bottom: 10px;
  }

  .pay .pay-row-1 > div {
    display: flex;
    justify-content: space-between;
  }

  .pay .pay-row-1 > div p:nth-child(2) span{
    margin-right: 20px;
    padding-left: 5px;
    font-size: 16px;
    color: rgb(227,1,1);
  }

  .pay .pay-row-2 {
    border: 2px solid rgb(227,1,1);
    padding: 10px 20px;
  }
  .pay .pay-row-2 > div > h6 {
    color: rgb(227,1,1);
    padding-bottom:8px;
  }

  .pay .pay-row-2 > div > ul{
    padding-left: 25px;
  }

  .pay .pay-row-2 .row-2-line-1 ul li{
    list-style: decimal;
  }

  .pay .pay-row-2 .row-2-line-2 ul li{
    list-style:disc;
  }

  .pay .pay-row-2 .row-2-line-2 {
    margin-top: 20px;
  }
  
  .pay .pay-row-3 {
    margin-top: 20px;
    border: 1.5px solid rgb(220,220,220);
    margin-bottom: 20px;
    padding: 20px;
    position: relative;
  }

  .pay .pay-row-3 .row-3-line-1 ul li {
    margin-right: 15px;
  }

  .pay .pay-row-3 > div{
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(220,220,220);
  }

  .pay .pay-row-3 > div > h6 {
    padding: 20px 0;
  }

  .pay .pay-row-3 > div ul {
    display: flex;
    flex-wrap: wrap;
    justify-content:left;
    margin-right: 20%;
    margin-left: 15px;
  }

  .pay .pay-row-3 .row-3-line-2 ul li{
    width: 16.66%;
  }

  .pay .pay-row-3 > div ul li a img{
    width: 130px;
    height: 35px;
    padding: 5px 20px;
    border: 1px solid rgb(220,220,220);
  }

  .pay .pay-row-3 .submit{
    text-align: center;
    border-bottom: none;
  }

  .pay .pay-row-3 .submitPmt {
    margin-top: 20px;
    background-color: rgb(227,1,1);
    border-radius: 0;
    color: white;
    padding: 10px 20px;
    font-size: 14px;
  }

</style>