<template>
  <div class="box">
      <my-title
      :title="title"
      />
      <div>
        <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无兑换记录"
          />
        
      </div>
  </div>
</template>

<script>
import title from "./components/Title"
export default {
  data() {
    return {
      title:"我的学习卡",
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