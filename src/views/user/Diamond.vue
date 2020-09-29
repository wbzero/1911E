<template>
  <div class="box">
      <my-title
      :title="title"
      />
      <div>
     
        
      </div>
  </div>
</template>

<script>
import title from "./components/Title"
export default {
  data() {
    return {
      title:"开通会员",
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

</style>