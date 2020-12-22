<template>
  <div>
    <div class="yuyue_ke">
      <van-nav-bar style="background: #5ba0f3" :border="false">
        <template #title>
          <span style="color: #fff; font-size: 0.45rem">预约课程</span>
        </template>
        <template #left>
          <van-icon class="left" name="arrow-left" @click="left" />
        </template>
      </van-nav-bar>
      <!-- 查看详情 -->
      <div class="teacher_s">
        <div class="tearch_img">
          <div class="img_img"></div>
          <div class="img_content">
            <div>名字</div>
            <div style="color: #b7b7b7; font-size: 10px">男 10年教龄</div>
          </div>
        </div>
        <div class="yu_yue" @click="goLecturer">查看详情</div>
      </div>
    </div>
    <!--  -->
    <div class="times">
      <!-- 选择时间 -->
      <div style="height: 1rem"></div>
      <div class="select_time">
        <span style="margin-left: 0.2rem; font-size: 0.35rem; color: #858586"
          >选择时间</span
        >
        <span style="font-size: 0.2rem; color: #858586">（北京时间）</span>
      </div>
      <!-- 星期表 -->
      <div class="xingqi_biao">
        <ul style="list-style: none;width:100%;height:10vh">
          <li class="biao_li" v-for="(item,index) in 6" :key="index" :class="{'active':isactive == index}" @click="dian(index)">
              <span>周一</span>
              <span>09/28</span>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="time_img">
          <img src="http://localhost:8080/img/%E6%97%A0%E4%BF%A1%E6%81%AF.png" width="80%">
      </div>
    </div>
    <!-- 底部 立即预约 -->
    <div class="bottom" @click="clickYu">立即预约</div>
  </div>
</template>

<script>
  import {tearch} from "../../api/api"
export default {
  data(){
    return{
      isactive:0
    }
  },
 async mounted() {
    var res=await tearch(this.$route.query.id)
   console.log(res)
  },
  methods: {
    left() {
      window.history.back();
    },
    goLecturer(){
        this.$router.push('/Lecturer')
    },
    clickYu(){
        this.$toast('请选择预约时间');
    },
    dian(index){
      this.isactive = index
    }
  },
};
</script>

<style scoped>
.active{
  border-bottom: 0.05rem solid blue;
  border-radius: 0.05rem;
  color: orange;
}
.yuyue_ke {
  width: 100%;
  height: 16vh;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
}
.left {
  color: #fff;
  font-size: 0.4rem;
}
.teachers {
  width: 100%;
  background: #f0f2f5;
}
.teacher_s {
  position: absolute;
  width: 95%;
  height: 13vh;
  background: #fff;
  border-radius: 0.15rem;
  margin: 0.2rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.5rem 0.3rem;
}
.tearch_img {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.yu_yue {
  width: 1.5rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #eb6e17;
  background: #fff;
  border: 1px solid orange;
  border-radius: 0.3rem;
  font-size: 0.25rem;
}
.img_img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #c4c3c3;
  margin-top: -0.1rem;
}
.img_content {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.times {
  width: 100%;
  height: 77vh;
  background: #f0f2f5;
}
.select_time {
  width: 95%;
  height: 0.45rem;
  margin-left: 0.2rem;
  border-left: 0.08rem solid #eb6100;
}
.xingqi_biao {
  margin-top: 0.3rem;
  width: 95%;
  height: 10vh;
  margin-left: 0.2rem;
  border-radius: 0.1rem;
  background: #fff;
  color: #5F5F5F;
  
}
.xingqi_biao ul{
    display: flex;
    justify-content: space-around;
}
.biao_li{
    float: left;
    width: 0.6rem;
    height: 1.1rem;
    font-size: 0.3rem;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.time_img{
    width: 45%;
    height: 25vh;
    margin-top: 0.7rem;
    margin-left: 2.5rem;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7vh;
  background: orange;
  color: #fff;
  font-size: 0.35rem;
  text-align: center;
  line-height: 7vh;
}
</style>