<template>
  <div>
    <!-- 登录页面 -->
    <div class="login">
      <img
        src="http://120.53.31.103:84/uploads/image/2020-05-27/sDSSCsWo1oSMRqHp7QqUSDzTeqn2f76nDH4SgAk1.jpeg"
      />
    </div>

    <!-- 输入框手机号 -->
    <div class="login-input">
      <input
        type="number"
        placeholder="请输入手机号"
        class="input1"
        v-model="user.mobile"
      />
      <span style="color: #e60b1c" @click="dian" v-show="isShow"
        >获取验证码</span
      >
      <span style="color: gray" v-show="shows">获取验证码({{ count }})</span>
    </div>

    <!-- 密码输入框 -->
    <div class="login-input">
      <input
        type="password"
        placeholder="请输入短信验证码"
        class="input2"
        v-model="user.pwd"
      />
    </div>

    <!-- 找回密码 -->
    <div class="login-zhao">
      <p>*未注册的手机号将自动注册</p>
      <p @click="login">使用密码登录</p>
    </div>

    <!-- 登录按钮 -->
    <div class="deng">
      <van-button color="#E60B1C" @click="deng">登录</van-button>
    </div>
  </div>
</template>

<script>
import { smsCode, login } from "../api/api";
export default {
  data() {
    return {
      isShow: true,
      shows: false,
      count: "",
      list: {},
      user: {
        mobile: "",
        pwd: "",
      },
    };
  },

  methods: {
    dian() {
      //判断电话号是否是11位
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (myreg.test(this.user.mobile)) {
        this.$toast("手机号码格式正确");
        let obj = {
          mobile: this.user.mobile,
          sms_type: "login",
        };
        smsCode(obj);
        this.shows = true;
        this.isShow = false;
        // 倒计时
        const dataTime = 60;
        if (!this.timer) {
          this.count = dataTime;
          this.show = true;
          this.isShow = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= dataTime) {
              this.count--;
            } else {
              this.shows = false;
              this.isShow = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      } else {
        this.$toast("手机号码格式不正确");
      }
    },
    deng() {
      //登录页面
      if (this.user.mobile != "" && this.user.pwd != "") {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        var yan = /^[0-9]{6}/;
        if (myreg.test(this.user.mobile) && yan.test(this.user.pwd)) {
          this.$toast("手机号码格式正确");
          let obj = {
            mobile: this.user.mobile,
            sms_code: this.user.pwd,
            client: 1,
            type: 2,
          };
          login(obj).then((res) => {
            console.log(res.data);
            if (res.code == 200) {
              this.list = res.data;
              localStorage.setItem("sascode", JSON.stringify(this.list));
              if (res.data.is_new == 1) {
                this.$router.push({
                  path: "/pass",
                  query: {
                    sasCode: this.user.pwd,
                    items: res.data,
                    mobile: this.user.mobile,
                  },
                });
              } else if (res.data.is_new == 2) {
                localStorage.setItem(
                  "adminToken",
                  res.data.remember_token
                );
                this.$router.push({
                  path: "/user",
                });
              }
            }
          });
        } else {
          this.$toast("手机号或验证码格式不对");
        }
      } else {
        this.$toast("手机或验证码输入为空");
      }
    },
    login() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>


<style  scoped>
.login {
  width: 100%;
  height: 4.5rem;
}
.login img {
  width: 100%;
  height: 100%;
}
.login-input,
.login-zhao,
.deng {
  width: 80%;
  height: 1.2rem;
  margin-left: 0.7rem;
  margin-top: 0.2rem;
}
.input1 {
  width: 70%;
  height: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid whitesmoke;
}
.input2 {
  width: 75%;
  height: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid whitesmoke;
}
.login-zhao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.2rem;
  margin-top: -0.3rem;
}
.deng .van-button {
  width: 100%;
}
</style>