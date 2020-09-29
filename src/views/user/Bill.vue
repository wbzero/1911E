<template>
  <div class="box">
      <my-title
      :title="title"
      />
      <div>
        <van-tabs v-model="active">
          <van-tab title="全部订单">
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无订单"
          />
          </van-tab>
          <van-tab title="待支付">
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无订单"
          />
          </van-tab>
          <van-tab title="已完成">
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无订单"
          />
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
export default {
  data() {
    return {
      title:"课程订单",
      details:true,
      active: 1,
    }
  },
  components:{
    "my-title":title
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
</style>