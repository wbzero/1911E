<template>
    <div class="login_body">
     <div class="img" v-if="isshow">
         <img src="../assets/A0启动图.jpg" alt="">
     </div>
     <div class="main" v-if="!isshow">
         <div class="from">
            <van-form @submit="onSubmit" >
              <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
              />
              <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
              />
              <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                  登录
                </van-button>
              </div>
         </van-form>
         </div>
         
     </div>
    <div>
       <div>
            {{this.$route.query.item}}
       </div>
        <button @click="add">123</button>
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
               list:{},
               it:{},
               list2:[]
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
           let list2 = localStorage.list2;
        if (list2) {
        this.list2 = JSON.parse(list2);
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
          add(){
                let it=this.$route.query.item
                console.log(it)

                this.$router.push({
                    path:"/order"
                })
                
            //     this.list2.map(item=>{
            //         if(item.id == this.$route.query.item){
            //             item.boull = true
            //             localStorage.list2 =JSON.stringify(this.list2)
            //         }
            //     })
            //    console.log(1,this.list2)
            }
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
    .main{
        width: 100%;
        height: 100%;
        background-color: #eee;
        .from{ 
            width: 100%;
            height: 5rem;
            display: inline-flex;
            align-items:flex-end;   
            .van-form{
                width: 100vh;
                height: 3rem;
            }        
        }
    }
}
</style>
