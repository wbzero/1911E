<template>
  <div class="setting_wrap">
      <my-title title="设置" />
      <div class="setting_main">
        <van-cell title="设置密码" is-link @click="goto" />
        <div class="main_btn" @click="backlogin">
          退出登录
        </div>
      </div>
  </div>
</template>

<script>
import Title from './components/Title'
export default {
  components:{
    'my-title':Title
  },
  methods: {
    goto(){
      this.$router.push('/service')
    },
    backlogin(){
      this.$router.push('/login')
    }
  },
}
</script>

<style scoped>
.setting_wrap{
  width: 100%;
  height: 100vh;
  background-color: #EFF1F4;
}
.setting_main{
  width: 100%;
  height: 4rem;
  margin-top: .2rem;
  background-color: #fff;
}
.main_btn{
  width: 90%;
  height: .9rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  background-color: #EA6007;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: .1rem;
  font-size: .35rem;
}
</style>