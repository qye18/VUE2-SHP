<template>
  <div class="register">
    <div class="mid">
      <div class="title">
        <h3>注册新用户</h3>
        <h4>
          我有账号，去
          <router-link to="./login">登录</router-link>
        </h4>
      </div>
      <div class="register-content">
        <div>
          手机号：
          <input type="text" placeholder="请输入你的手机号" v-model="phone" />
          <button @click="getVerificationCode">获取验证码</button>
        </div>
        <div>
          验证码：
          <input type="text" v-model="veriCode" />
        </div>
        <div>
          登录密码：
          <input type="password" v-model="password" />
        </div>
        <div>
          确认密码：
          <input type="password" v-model="verifiedPassword" />
        </div>
        <div>
          昵称：
          <input type="text" />
        </div>
        <div>
          <label for="register-agreement">
            <input
              id="register-agreement"
              type="checkbox"
              :checked="agreement"
            />
            <span>同意协议并注册《品优购用户协议</span>
          </label>
        </div>
        <div class="submit">
          <button @click="registerAccount">马上注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      veriCode: "",
      password: "",
      verifiedPassword: "",
      agreement: true,
    };
  },
  methods: {
    async getVerificationCode() {
      try {
        let result = await this.$store.dispatch(
          "getVerificationCode",
          this.phone
        );
        this.veriCode = this.$store.state.user.verificationCode;
      } catch (error) {
        alert(error);
      }
    },
    async registerAccount() {
      try {
      const { phone, veriCode, password, verifiedPassword } = this;
      phone &&
      veriCode &&
      password &&
      password == verifiedPassword &&
      await this.$store.dispatch("RegisterAccount", {
        phone,
        password,
        code:veriCode,
      });
      this.$router.push('/login');
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped>
.register {
  width: 1155px;
  margin: 0 auto;
  margin-top: 20px;
}

.register .mid {
  border: 1px solid rgb(220, 220, 220);
}

.register .title {
  background: #eaeaea;
  align-items: center;
  padding: 10px 20px;
}

.register .title h4 {
  font-size: 13px;
}

.register .title h4 a {
  color: rgb(227, 1, 1);
}

.register .title h4 a:hover {
  text-decoration: underline;
}

.register .register-content {
  margin-top: 10px;
  padding: 20px;
  font-size: 13px;
  text-align: center;
}

.register .register-content > * {
  height: 45px;
}

.register .register-content div {
  width: 350px;
  text-align: right;
  margin: 5px auto;
  /* background-color: antiquewhite; */
}

.register .register-content div input {
  height: 80%;
  width: 250px;
  padding: 5px;
  outline: none;
  border: 1px solid rgb(140, 140, 140);
}

.register .register-content div:first-child input {
  width: 160px;
}

.register .register-content div:first-child button {
  width: 80px;
  height: 75%;
  margin: 0 5px;
  color: white;
  background-color: rgb(8, 184, 243);
}

.register .register-content div:nth-child(6) {
  height: 15px;
  margin-bottom: 30px;
}
.register .register-content label span {
  width: 235px;
  display: inline-block;
  font-size: 12px;
  text-align: left;
}
.register .register-content label input {
  width: 15px;
  vertical-align: middle;
}

.register .register-content .submit button {
  width: 250px;
  height: 80%;
  background-color: rgb(227, 1, 1);
  color: white;
}

button {
  cursor: pointer;
}
</style>
