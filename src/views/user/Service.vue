<template>
  <div>
      <my-title title="设置密码" />
      <div class="setpwd_main">
        <input type="text" v-model="tel" placeholder="请输入手机号">
        <input type="text" placeholder="请输入验证码">
        <input type="password" placeholder="请输入密码">
        <span class="setpwd_main_btn" @click="setting">获取验证码</span>
      </div>
      <div class="setpwd_btn">
        确 定
      </div>
  </div>
</template>

<script>
import Title from './components/Title'
export default {
  data(){
    return {
      tel:''
    }
  },
  components:{
    'my-title':Title
  },
  methods: {
    setting(){
      let reg = /^[1]([3-9])[0-9]{9}$/
      if(reg.test(this.tel)){

      }else {
        this.$toast('手机号码格式不正确');
      }
    }
  },
}
</script>

<style scoped>
.setpwd_main{
  width: 100%;
  text-align: center;
  position: relative;
}
.setpwd_main_btn{
  color: #FB5406;
  position: absolute;
  top: .35rem;
  right: .4rem;
}
.setpwd_main > input{
  width: 90%;
  height: 1rem;
  font-size: .3rem;
  border: none;
  outline-style: none;
  border-bottom: .01rem solid #eee;
}
input:hover{
  border-bottom: .01rem solid #FB5406;
}
.setpwd_btn{
  width: 80%;
  height: .9rem;
  margin: 0 auto;
  margin-top: 1.1rem;
  border-radius: .9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(to right,#FE934C,#FB5406);
  font-size: .25rem;
}
</style>