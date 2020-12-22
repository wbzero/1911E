<template>
  <div class="currency-box">
    <div class="top_title">
      <div class="title-box">
        <div><van-icon name="arrow-left" @click="back" /></div>
        <div>我的余额</div>
        <div><span>余额明细</span></div>
      </div>
      <div class="bottom">
        <span>我的余额</span>
        <span style="color: orange">0学习币</span>
      </div>
    </div>
    <div class="subject">
      <div class="item" v-for="(item, index) in num" :key="index">
        <span>{{ item }}学习币</span>
        <span style="color: orange">￥{{ item }}</span>
      </div>
    </div>
    <div class="footer">立即充值</div>
  </div>
</template>

<script>
import { chongzhi } from "../../api/api";
export default {
  async mounted() {
    let id=this.$route.query.val1
    var res = await chongzhi(id);
    console.log(res);
  },
  data() {
    return {
      num: [
        "30000.00",
        "20000.00",
        "10000.00",
        "8000.00",
        "5000.00",
        "3000.00",
        "0.01",
        "100.00",
      ],
    };
  },

  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" scoped >
.title-box {
  width: 100%;
  height: 1rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0rem 0.5rem;
  background-color: #fff;
}
.title-box div {
  font-size: 0.3rem;
}

.currency-box {
  width: 100%;
  height: 100vh;
  background-color: #eee;
  .top_title {
    width: 100%;
    height: 15vh;
    background-color: #fff;
    .bottom {
      width: 100%;
      height: 50%;
      display: inline-flex;
      justify-self: start;
      align-items: center;
      box-sizing: border-box;
      padding: 0rem 0.4rem;
      span {
        margin: 0px 0.3rem;
        font-size: 0.3rem;
      }
    }
  }
  .subject {
    width: 100%;
    height: 77vh;
    display: inline-flex;
    flex-direction: column;
    .item {
      width: 90%;
      margin-left: 5%;
      height: 1rem;
      margin-top: 0.3rem;
      background-color: #fff;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 0.2rem;
      border-radius: 0.2rem;
    }
  }
  .footer {
    width: 100%;
    height: 8vh;
    background-color: orangered;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
}
</style>