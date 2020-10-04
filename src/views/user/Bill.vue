<template>
  <div class="box">
      <my-title
      :title="title"
      />
      <div>
        <van-tabs v-model="active">
          <van-tab title="全部订单" class="table">
            <van-empty
             v-show="false"
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无订单"
          />
           <div class="main">
          <my-main />
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
            <van-empty
            v-show="false"
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无订单"
          />
          <div class="main">
          <my-main />
          </div>
          </van-tab>
          <van-tab title="已取消">
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无订单"
          />
          </van-tab>
        </van-tabs>
        
      </div>
  </div>
</template>

<script>
import title from "./components/Title"
import main from "./components/Cards"
export default {
  data() {
    return {
      title:"课程订单",
      details:true,
      active: 0,
    }
  },
  components:{
    "my-title":title,
    "my-main":main
  }

}
</script>

<style scoped>
.box{
  width: 100%;
  height: 100vh;
  background-color: #F0F2F5;
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