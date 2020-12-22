<template>
  <div>
    <my-title title="修改密码" />
    <div class="setpwd_main">
      <input type="text" v-model="tel" placeholder="请输入手机号" />
      <input type="text" placeholder="请输入验证码" v-model="code" />
      <input type="password" placeholder="请输入密码" v-model="pass" />
      <span class="setpwd_main_btn" @click="setting" v-show="isShow"
        >获取验证码</span
      >
      <span class="setpwd_main_btns" v-show="isShow2"
        >获取验证码{{ count }}</span
      >
    </div>
    <div class="setpwd_btn" @click="confirm">确 定</div>
  </div>
</template>

<script>
import { smsCode, pass } from "../../api/api";
import Title from "./components/Title";
export default {
  data() {
    return {
      tel: "",
      pass: "",
      code: "",
      count: "",
      isShow: true,
      isShow2: false,
    };
  },
  components: {
    "my-title": Title,
  },
  methods: {
    setting() {
      let reg = /^[1]([3-9])[0-9]{9}$/;
      if (reg.test(this.tel)) {
        let obj = {
          mobile: this.tel,
          sms_type: "getPassword",
        };
        smsCode(obj);
        // 倒计时
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.isShow = false;
          this.isShow2 = true;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
              this.isShow = true;
              this.isShow2 = false;
            }
          }, 1000);
        }
      } else {
        this.$toast("手机号码格式不正确");
      }
    },
    //点击确定
    confirm() {
      let reg = /^[1]([3-9])[0-9]{9}$/;
      let password = /^[0-9a-zA-z]{6,}/;
      if (this.tel != "" && this.pass != "" && this.code != "") {
        if (reg.test(this.tel) && password.test(this.pass)) {
          let obj = {
            mobile: this.tel,
            password: this.pass,
            sms_code: this.code,
          };
          pass(obj).then((res) => {
            if (res.code == 200) {
              this.$router.push("/setting");
            }
          });
        } else {
          this.$toast("手机号码格式不正确");
        }
      } else {
        this.$toast("账号密码不能输入为空");
      }
    },
  },
};
</script>

<style scoped>
.setpwd_main {
  width: 100%;
  text-align: center;
  position: relative;
}
.setpwd_main_btn {
  color: #fb5406;
  position: absolute;
  top: 0.35rem;
  right: 0.4rem;
}
.setpwd_main_btns {
  color: gray;
  position: absolute;
  top: 0.35rem;
  right: 0.4rem;
  font-size: 0.28rem;
}
.setpwd_main > input {
  width: 90%;
  height: 1rem;
  font-size: 0.3rem;
  border: none;
  outline-style: none;
  border-bottom: 0.01rem solid #eee;
}
input:hover {
  border-bottom: 0.01rem solid #fb5406;
}
.setpwd_btn {
  width: 80%;
  height: 0.9rem;
  margin: 0 auto;
  margin-top: 1.1rem;
  border-radius: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(to right, #fe934c, #fb5406);
  font-size: 0.25rem;
}
</style>