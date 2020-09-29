<template>
  <div class="box">
      <my-title
      :title="title"
      />
      <div>
         <el-input
          
          type="textarea"
          placeholder="请输入内容"
          v-model="text"
          maxlength="500"
          show-word-limit
          class="input"
        />
        <van-button type="warning" size="large">大号按钮</van-button>
      </div>
  </div>
</template>

<script>
import title from "./components/Title"
export default {
  data() {
    return {
      title:"意见反馈",
      details:true,
      text:""
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
.input{
  width: 100%;
  height: 3rem;
  margin-top: 0.5rem;
}

</style>