<template>
  <div>
    <van-nav-bar>
      <template #title>
        <span style="font-size: 0.4rem">约课记录</span>
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" color="orange" title-active-color="orange" style="font-size:0.5rem">
      <van-tab title="待上课">
          <div class="tabs_body">
              <div class="tabs_body_img">
                  <img src="http://localhost:8080/img/%E7%BA%A6%E8%AF%BE%E8%AE%B0%E5%BD%95.png" width="65%">
                  <div style="color:#BFC0C0;font-size:0.25rem;margin-left:0.53rem">还没有待上课记录哦</div>
                  <p class="tabs_yue" @click="goCoach">立即约课</p>
              </div>
          </div>
      </van-tab>
      <van-tab title="已上课">
          <div class="tabs_body">
              <div class="tabs_body_img">
                  <img src="http://localhost:8080/img/%E7%BA%A6%E8%AF%BE%E8%AE%B0%E5%BD%95.png" width="65%">
                  <div style="color:#BFC0C0;font-size:0.25rem;margin-left:0.53rem">还没有上课记录哦</div>
                  <p class="tabs_yue" @click="goCoach">立即约课</p>
              </div>
          </div>
      </van-tab>
      <van-tab title="已取消">
          <div class="tabs_body">
              <div class="tabs_body_img">
                  <img src="http://localhost:8080/img/%E7%BA%A6%E8%AF%BE%E8%AE%B0%E5%BD%95.png" width="65%">
                  <div style="color:#BFC0C0;font-size:0.25rem;margin-left:0.53rem">还没有取消上课记录哦</div>
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
    padding-top: 2rem;
    margin-left: 2rem;
}
.tabs_yue{
    width: 1.4rem;
    height: 0.6rem;
    border: 1px solid #EB6100;
    border-radius: 0.1rem;
    line-height: 0.6rem;
    text-align: center;
    background: #EB6100;
    font-size: 0.25rem;
    color: #fff;
    margin-left: 0.95rem;
    margin-top: 0.3rem;
}
</style>