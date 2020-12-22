<template>
  <div>
    <!-- <div class="tab_top">
      <ul>
        <li @click="change(1)" :class="{ active: indexs == 1 }">新闻</li>
        <li @click="change(2)" :class="{ active: indexs == 2 }">动漫</li>
        <li @click="change(3)" :class="{ active: indexs == 3 }">电影</li>
      </ul>
    </div>
    <div class="tab_bottom">
      <div class="content1" >新闻</div>
      <div class="content1" >动漫</div>
      <div class="content1" >电影</div>
    </div> -->
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab title="标签 1">
        <div class="content1">新闻</div>
      </van-tab>
      <van-tab title="标签 2">
        <div class="content1">新闻</div>
      </van-tab>
      <van-tab title="标签 3">
        <div class="content1">新闻</div>
      </van-tab>
      <van-tab title="标签 4">
        <div class="content1">新闻</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       indexs: 1,
  //     };
  //   },
  //   methods: {
  //     change(index) {
  //       console.log(index);
  //       this.indexs = index;
  //     },
  //   },
  data() {
    return {
      active: 2,
    };
  },
};
</script>

<style scoepd>
.tab_top {
  width: 100%;
  height: 1rem;
  position: fixed;
  top: 0px;
  z-index: 60000;
  background: #fff;
  /* border: 1px solid red; */
}
.tab_top ul {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  align-items: center;
}
.tab_top ul li {
  font-size: 0.35rem;
}
.tab_top ul li.active {
  color: red;
}
.tab_bottom {
  margin: 1rem 0;
  width: 100%;
}
 .content1 {
  width: 100%;
  height: 6rem;
  border: 1px solid red;
  box-sizing: border-box;
  font-size: 0.6rem;
  color: green;
}
</style>