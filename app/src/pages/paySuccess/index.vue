<template>
  <div class="pay-success">
    <h3>恭喜你，支付成功啦！</h3>
    <div class="buttons">
      <button @click="$router.push({name:'userCenter'})">查看订单</button>
      <button @click="$router.push({name:'home'})">继续购物</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'paySuccess'
}
</script>

<style scoped>
  .pay-success {
    width: 1155px;
    margin: 20px auto;
    border: 1px solid rgb(200,200,200);
    padding: 40px;
    text-align: center;
  }

  .pay-success > h3 {
    position: relative;
    margin-bottom: 30px;
  }
  .pay-success > h3::before {
    content: '';
    position: absolute;
    background: url('../pay/images/right.png');
    background-size: 100% 100%;
    width: 30px;
    margin-left: -40px;
    height: 30px;
  }

  .pay-success .buttons button {
    padding: 5px 20px;
    margin:0 10px;
    cursor: pointer;
  }

  .pay-success .buttons button:first-child {
    background-color: rgb(227,1,1);
    color: white;
  }

  .pay-success .buttons button:nth-child(2) {
    background-color: rgb(240,240,240);
    border: 1px solid rgb(220,220,220);
  }

  .pay-success .buttons button:hover {
    background-color: rgb(200,200,200);
    color: black;
  }
</style>