<template>
  <div class="login">
    <div class="login-container">
      <div>
        <router-link :to= '{
          name: "qrcodeLogin"
        }'
        active-class="active-login-method">扫码登陆</router-link>
        <router-link :to='{
          name: "accountLogin"
        }'
        active-class="active-login-method">账号登录</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:'Login',
}
</script>

<style scoped>
  .login {
    height: 475px;
    width: 100%;
    background: url('./images/loginbg.png') no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .login .login-container {
    width: 380px;
    height: 350px;
    margin-right: 55px;
    border: 1px solid rgb(210,210,210);
    outline: 20px solid white;
    background-color: white;
  }
  
  .login .login-container div {
    display: flex;
  }
  .login .login-container a {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 0 10px;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid rgb(210,210,210);
  }

  .login .login-container a:first-child {
    border-right: 1px solid rgb(210,210,210);
  }

  .login .login-container .active-login-method {
    border-bottom: none;
    color:rgb(227, 1, 1);
  }
</style>