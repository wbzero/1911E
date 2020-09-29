<template>
<<<<<<< HEAD
    <div>
        <h1>course页面</h1>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang='scss'>

=======
  <div>
    <van-nav-bar>
      <template #title>
        <span style="font-size: 20px">约课记录</span>
      </template>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="待上课">
          <div class="tabs_body">
              <div class="tabs_body_img">
                  <img src="http://localhost:8080/img/%E7%BA%A6%E8%AF%BE%E8%AE%B0%E5%BD%95.png" width="65%">
                  <div style="color:#BFC0C0;font-size:13px;margin-left:30px">还没有待上课记录哦</div>
                  <p class="tabs_yue" @click="goCoach">立即约课</p>
              </div>
          </div>
      </van-tab>
      <van-tab title="已上课">
          <div class="tabs_body">
              <div class="tabs_body_img">
                  <img src="http://localhost:8080/img/%E7%BA%A6%E8%AF%BE%E8%AE%B0%E5%BD%95.png" width="65%">
                  <div style="color:#BFC0C0;font-size:13px;margin-left:30px">还没有上课记录哦</div>
                  <p class="tabs_yue">立即约课</p>
              </div>
          </div>
      </van-tab>
      <van-tab title="已取消">
          <div class="tabs_body">
              <div class="tabs_body_img">
                  <img src="http://localhost:8080/img/%E7%BA%A6%E8%AF%BE%E8%AE%B0%E5%BD%95.png" width="65%">
                  <div style="color:#BFC0C0;font-size:13px;margin-left:30px">还没有取消上课记录哦</div>
              </div>
          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
     data() {
    return {
      active: 0,
    };
  },
  methods:{
      goCoach(){
          this.$router.push('/coach')
      }
  }
};
</script>

<style scoped>
.tabs_body{
    width: 100%;
    height: 82vh;
    background: #F0F2F5;
}
.tabs_body_img{
    width: 70%;
    height: 40vh;
    /* border: 1px solid red; */
    padding-top: 89px;
    margin-left: 95px;
}
.tabs_yue{
    width: 80px;
    height: 30px;
    border: 1px solid #EB6100;
    border-radius: 1px;
    line-height: 30px;
    text-align: center;
    background: #EB6100;
    font-size: 13px;
    color: #fff;
    margin-left: 40px;
}
>>>>>>> df42cbbfac4c2eb7ef749948c750aee611984c83
</style>