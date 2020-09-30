<template>
  <div class="box">
      <my-title
      :title="title"
      />
      <div>
        <van-tabs v-model="active">
          <van-tab title="未使用">
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无优惠券"
          />
          </van-tab>
          <van-tab title="已使用">
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无优惠券"
          />
          </van-tab>
          <van-tab title="已过期">
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无优惠券"
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
      title:"我的优惠券",
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