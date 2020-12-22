<template>
  <div class="box">
      <my-title
      :title="title"
      />
    <div>
      <van-tabs v-model="active" color="#EB6100" title-active-color="#EB6100">
        <van-tab title="全部订单">
          <div class="order_wrap">
            <ul>
              <li v-for="(item,index) in allList" :key="index" @click="goOrderList(item)">
                <div class="order_content_top">
                  <p>
                    订单编号 : {{item.order_number}}
                  </p>
                  <span style="color:#EB6100;">交易完成</span>
                </div>
                <div class="order_content_bottom">
                  <p style="margin: 0.2rem 0 0 0">{{item.title}}</p>
                  <p style="color:gray;margin: 0.1rem 0">时间 :{{item.created_at|times}}</p>
                  <p>实付款 : <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                                style="width: 0.2rem;height: 0.2rem;"> 0</p>
                </div>
                <div class="order_button" v-show="item.is_join_study==0">
                  <button>加入学习</button>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="待支付">
          <van-empty
                  class="custom-image"
                  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                  description="暂无订单"
          />
        </van-tab>
        <van-tab title="已完成" class="table">
          <div class="order_wrap">
            <ul>
              <li v-for="(item,index) in allList" :key="index" @click="goOrderList(item)">
                <div class="order_content_top">
                  <p>
                    订单编号 : {{item.order_number}}
                  </p>
                  <span style="color:#EB6100;">交易完成</span>
                </div>
                <div class="order_content_bottom">
                  <p style="margin: 0.2rem 0 0 0">{{item.title}}</p>
                  <p style="color:gray;margin: 0.1rem 0">时间 :{{item.created_at|times}}</p>
                  <p>实付款 : <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                                style="width: 0.2rem;height: 0.2rem;"> 0</p>
                </div>
                <div class="order_button" v-show="item.is_join_study==0">
                  <button>加入学习</button>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="已取消">

        </van-tab>
      </van-tabs>
        
      </div>
  </div>
</template>

<script>
  import {order} from "../../api/api"
import title from "./components/Title"
import main from "./components/Cards"
  import moment from "moment";
export default {
  //  过滤
  filters:{

  },
  //  课程订单
 async mounted() {
   var res=await order()
   if(res.code==200){
     console.log(res)
     this.allList=res.data.list
   }
  },
  data() {
    return {
      title:"课程订单",
      details:true,
      active: 0,
      allList:[],
      list:[],
      userList:[],
      showList:[]
    }
  },
  components:{
    "my-title":title,
    "my-main":main
  },
  methods:{
    goOrderList(item){
      this.$router.push({
        path:"/orderList",
        query:{
          id:item.id
        }
      })
    }
  }

}
</script>

<style scoped>
  .order_wrap{
    width: 95%;
    margin: 0.25rem auto;
  }
  .order_wrap ul{
    width: 100%;
  }
  .order_wrap ul li{
    width: 100%;
    box-sizing: border-box;
    padding: 0.25rem 0.3rem;
    border: 2px solid #eee;
    margin: 0.2rem 0;

  }
.order_content_top{
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
  height: 0.6rem;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
.order_content_bottom{
  width: 100%;

}
.order_button{
  height: 1rem;
  position: relative;
}
.order_button button{
  position: absolute;
  right: 0rem;
  bottom: 0.3rem;
  width: 1.6rem;
  height: 0.6rem;
  border: 1px solid #EB6100;
  color:#EB6100 ;
background: none;
  outline: none;
  border-radius: 0.3rem;
}





  .box{
  width: 100%;
  height: 100vh;

}
 .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .table{
  width: 100%;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
  .main{
    width: 95%;
    
  }
</style>