<template>
  <div class="login_body">
    <div class="imgs">
      <img
        src="http://120.53.31.103:84/uploads/image/2020-05-27/sDSSCsWo1oSMRqHp7QqUSDzTeqn2f76nDH4SgAk1.jpeg"
        alt=""
      />
    </div>
    <div class="main">
      <div class="from">
        <van-form>
          <van-field
            v-model="username"
            name="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请输入手机号' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请输入密码' }]"
          />
          <div style="margin: 16px">
            <div class="dd">
              <span>找回密码</span>
              <span>注册/ <span @click="loginpass">验证码登录</span> </span>
            </div>
            <van-button class="btn" native-type="submit" @click="onSubmit">
              登录
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
    <div>
      <div>
        {{ this.$route.query.item }}
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { login } from "../api/api";
export default {
  data() {
    return {
      username: "",
      password: "",
      list: {},
      it: {},
      list2: [],
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log(1111);
      setTimeout(() => {
        //判断电话号是否是11位
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        var pass = /^[0-9A-Za-z]{5,}$/;
        if (myreg.test(this.username) && pass.test(this.password)) {
          let obj = {
            mobile: this.username,
            password: this.password,
            type: 1,
          };
          login(obj).then((res) => {
            console.log(res);
            if (res.code == 200) {
              this.list = res.data;
              localStorage.setItem("sascode", JSON.stringify(this.list));
              localStorage.setItem(
                "adminToken",
                res.data.remember_token
              );
              this.$router.push({
                path:"/user"
              });
            } else {
              Toast("账号或密码错误");
            }
          });
        } else {
          Toast("请输入正确的手机号或密码");
        }
      }, 2000);
    },
    add() {
      let it = this.$route.query.item;
      console.log(it);

      this.$router.push({
        path: "/order",
      });
    },
    loginpass() {
      this.$router.push({
        path: "/loginpass",
      });
    },
  },
};
</script>

<style scoped lang='scss'>
.login_body {
  width: 100%;
  height: 100vh;

  .img {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .dd {
    width: 100%;
    height: 0.5rem;
    display: inline-flex;
    justify-content: space-between;
    color: gray;
  }

  .main {
    width: 80%;
    // height: 100%;
    margin-left: 10%;

    .from {
      width: 100%;
      height: 3.5rem;
      display: inline-flex;
      align-items: flex-end;

      .van-form {
        width: 100vw;
        height: 3rem;
      }
    }
  }
}

.btn {
  background: linear-gradient(to right, #e61a2a, #e61a2a);
  color: #fff;
  margin: 0.5rem 0;
}

.imgs {
  width: 100%;
  height: 4.5rem;
  display: inline-flex;
  // justify-content: center;
  // align-items: center;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>