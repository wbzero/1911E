<template>
  <div class="box">
      <my-title
      :title="title"
      />
      <div class="main">
         <el-input
          type="textarea"
          placeholder="请输入您的意见"
          v-model="text"
          maxlength="500"
          show-word-limit
          rows="7"
          class="input"
        />
        <div class="submit">
            <van-button type="warning" size="large" class="btn">提交</van-button>
        </div>
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
}
.main{
  width: 100%;
  height:80vh;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  
}
.input{
  width: 95%;
  height: 4rem;
  margin-top: 0.5rem;
  margin-left: 0.25%;
}
.btn{
  margin-top: 1rem;
  background-color: #EB6100;
  font-size: 0.3rem;
}
.submit{
  width: 95%;
}
</style>