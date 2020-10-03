<template>
  <div class="box">
      <my-title
      :title="title"
      />
      <div>
          <van-cell v-for="(item,index) in list" :key="index" :title="item.title" is-link :value="item.shuju" />
      </div>
  </div>
</template>

<script>
import title from "./components/Title"
export default {
  data() {
    return {
      title:"个人信息",
      details:true,
      list:[
          {
            title :"头像",
            shuju:"" 
          },
          {
            title :"昵称",
            shuju:"131****9554" 
          },
          {
            title :"手机号",
            shuju:"13103939554" 
          },
          {
            title :"性别",
            shuju:"男" 
          },
          {
            title :"出生日期",
            shuju:"请选择" 
          },
          {
            title :"所在城市",
            shuju:"请选择" 
          },
          {
            title :"学科",
            shuju:"请选择" 
          },
          {
            title :"年级",
            shuju:"请选择" 
          }
      ]
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