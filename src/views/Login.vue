<template>
    <div class="login_body">
     <div class="img" v-if="isshow">
         <img src="../assets/A0启动图.jpg" alt="">
     </div>
     <div class="main" v-if="!isshow">
          <div class="imgs">
          <img  src="../assets/吖.png" alt="">
          </div>
         <div class="from">
            <van-form @submit="onSubmit" >
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
              <div style="margin: 16px;">
                <div class="dd"><span>找回密码</span> <span>注册/验证码登录</span></div>
                <van-button round block class="btn" native-type="submit">
                  提交
                </van-button>
              </div>
         </van-form>

         </div>
         
     </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
               isshow:true ,
               username: '',
               password: '',
               list:{}
            }
        },
        mounted(){
            var timer = setTimeout(()=>{
                this.isshow = false
            },1000)
          let list= localStorage.list
          if(list){
              this.list=JSON.parse(list)
          }
        },
        methods: {
          onSubmit(values) {
            // console.log('submit', values);
            // this.$axios.post('http://xx.com/api/adminUser/login',{
            //     params:{
            //         username:this.username,
            //         password:this.password
            //     }
            // }).then((res)=>{
            //     console.log(res)
            // }).catch(error=>{
            //     console.log(error)
            // })
            localStorage.list = JSON.stringify({
                username:this.username,
                password:this.password
            })
            this.$router.push("/")
          },
        },

    }
</script>

<style scoped lang='scss'>
.login_body{
    width: 100%;
    height: 100vh;
    .img{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;

        }
    }
    .dd{
      width: 100%;
      height: 0.5rem;
      display: inline-flex;
      justify-content: space-between;
      color: gray;

    }
    .main{
        width: 80%;
        height: 100%;
        margin-left: 10%;
        .from{ 
            width: 100%;
            height: 5rem;
            display: inline-flex;
            align-items:flex-end;   
            .van-form{
                width: 100vw;
                height: 3rem;
            }        
        }
    }
}
.btn{
  	background: linear-gradient(to right,#F29858,#EB6201);
    color: #fff;
}
.imgs{
  width: 100%;
  height: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  img{
    margin-top: 1rem;
    width: 82%;
  }
}
</style>
