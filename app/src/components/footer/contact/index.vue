<template>
  <div>
    <ul class="contact">
      <li>关于我们</li>
      <li>联系我们</li>
      <li>关于我们</li>
      <li>商家入驻</li>
      <li>营销中心</li>
      <li>友情链接</li>
      <li>关于我们</li>
      <li>营销中心</li>
      <li>友情链接</li>
      <li>联系我们</li>
    </ul>
    <div class="address">
      <address>地址：北京市昌平区鸿福科技综合楼6层</address>
      <p>京ICP备19006430号</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'contact'
}
</script>

<style scoped>
  .contact {
    margin-top: 30px;
    text-align: center;
  }
  .contact li{
    font-size: 12px;
    display: inline;
    padding: 0 10px;
    border-right: 1px solid #000;
  }

  .address {
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
  }

  .address address {
    margin-bottom: 15px;
  }
</style>