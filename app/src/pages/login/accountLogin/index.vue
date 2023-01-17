<template>
  <div class="account-login">
    <form>
      <div class="account-number">
        <div></div>
        <input type="text" v-model="phone" />
      </div>
      <div class="account-password">
        <div></div>
        <input type="password" v-model="password" />
      </div>
      <div class="password-related-row">
        <div>
          <label for="rem-password">
            <input id="rem-password" type="checkbox" /><span>记住密码</span>
          </label>
        </div>
        <a href="">忘记密码?</a>
      </div>
      <button @click.prevent="userLogin">登 录</button>
    </form>
    <div class="bottom-line">
      <ul>
        <li>
          <router-link :to="{ name: 'qrcodeLogin' }"
            ><img src="../images/ali.png" alt=""
          /></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'qrcodeLogin' }"
            ><img src="../images/weixin.png" alt=""
          /></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'qrcodeLogin' }"
            ><img src="../images/qq.png" alt=""
          /></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'qrcodeLogin' }"
            ><img src="../images/sina.png" alt=""
          /></router-link>
        </li>
      </ul>
      <span>
        <router-link :to="{ name: 'register' }">立即注册</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountLogin",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    async userLogin() {
      try {
        const { phone, password } = this;
        phone &&
          password &&
          (await this.$store.dispatch("getUserLogin", { phone, password }));
        this.$router.push('/home');
      } catch (error) {
        alert(error)
      }
    },
  },
};
</script>

<style>
.account-login {
  margin: 25px;
  display: flex;
  flex-direction: column;
  width: 320px;
}

.account-login .account-number {
  height: 35px;
}

.account-login form input {
  height: 33px;
}

.account-login .account-number,
.account-login .account-password {
  display: flex;
  border: 1px solid rgb(220, 220, 220);
  margin-bottom: 20px;
}

.account-login .account-number div,
.account-login .account-password div {
  display: inline-block;
  width: 33px;
}

.account-login .account-number div {
  background: url("@/pages/images/icons.png") -10px -200px;
}

.account-login .account-password div {
  background: url("@/pages/images/icons.png") -73px -198px;
}

.account-login form input {
  border-left: 1px solid rgb(220, 220, 220);
  outline: none;
  font-size: 20px;
}

.account-login form input[type="checkbox"] {
  width: 12px;
  height: 12px;
  vertical-align: middle;
  margin-right: 2px;
}

.account-login form .password-related-row span {
  vertical-align: middle;
}

.account-login form .password-related-row {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 30px;
}

.account-login form button {
  width: 100%;
  height: 35px;
  color: white;
  background-color: rgb(227, 1, 1);
  font-size: 14px;
}

.account-login .bottom-line {
  width: 100%;
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
}

.account-login .bottom-line ul {
  display: flex;
}

.account-login .bottom-line ul img {
  margin-right: 10px;
}

.account-login .bottom-line span a,
.account-login form .password-related-row a {
  color: rgb(227, 1, 1);
  text-decoration: underline;
}
</style>
