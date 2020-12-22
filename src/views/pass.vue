<template>
  <div>
    <div class="title">设置密码</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="password"
        type="text"
        name="确认密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button color="#E51726" type="info" native-type="submit">
          确定
        </van-button>
      </div>
    </van-form>
    <button id="btn" @click="gouser">跳过</button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { pass } from "../api/api";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.username == this.password) {
        var obj = {
          mobile: this.$route.query.mobile,
          password: this.password,
          sms_code: this.$route.query.sasCode,
        };
        pass(obj).then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.$router.push("/user");
          }
        });
      } else {
        Toast("两次密码不一致");
      }
    },
    gouser() {
      this.$router.push("/user");
    },
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 1rem;
  text-align: center;
  font-size: 0.35rem;
  line-height: 1rem;
}
#btn {
  width: 1rem;
  height: 0.6rem;
  outline: none;
  border: none;
  position: fixed;
  bottom: 0.3rem;
  right: 0.2rem;
  background: #fff;
  border: 1px solid gray;
}
</style>