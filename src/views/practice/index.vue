<template>
  <div class="box_max">
    <div class="box_top">
      <h4 class="h2">练习</h4>
    </div>
    <div class="box_center">
      <van-grid>
  <van-grid-item icon="like-o" text="考点专练" @click="goto('/item')"/>
  <van-grid-item icon="star-o" text="套卷练习" @click="goto('/item2')"/>
  <van-grid-item icon="fire-o" text="仿真模考" @click="goto('/item3')"/>
  <van-grid-item icon="gem-o" text="错题练习" @click="goto('/item4')"/>
  <van-grid-item icon="clock-o" text="测评记录" @click="goto('/item5')"/>
  <van-grid-item icon="smile-o" text="习题收藏" @click="goto('/item6')"/>
</van-grid>
      
    </div>
    <div class="box_button">
      <h4>近期模考</h4>
      <van-nav-bar left-text="默认排序" right-text="时间" />
      <img src="../../../public/img/cef380a2127548eb57343b9fa7a91ac.png" alt="">
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      // list: [
      //   "考点专练",
      //   "套卷练习",
      //   "仿真模考",
      //   "错题练习",
      //   "测评记录",
      //   "习题收藏",
      // ],
    };
  },
  methods: {
    goto(path) {
      this.$router.push({
        path: path
      });
    },
  }
};
</script>

<style scoped>
.box_button {
  margin-top: 20px;
  width: 100%;
  height: 250px;
  background-color: #fff;
}
.box_center {
  width: 90%;
  height: 170px;
  background-color: #fff;
  margin-left: 15px;
}
.box_top {
  width: 100%;
  height: 50px;
}
.h2 {
  text-align: center;
  margin-top: 30px;
  height: 40px;
  background-color: #fff;
  font-size: 18px;
  color: rgb(99, 94, 94);
}
.box_max {
  margin-top: -20px;
  width: 100%;
  height: 100%;
  background-color: #eeecec;
}
img{
    width: 100%;
    height: 60%;
}
h4{
    font-size: 0.3rem;
    margin-top: 0.1rem;
    color: rgb(102, 98, 98);
}
</style>