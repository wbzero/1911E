<template>
  <div>
    <div class="fudao_body">
      <van-nav-bar title="标题" left-arrow>
        <template #title>
          <span style="color: #727272; font-size: 0.45rem">一对一辅导</span>
        </template>
        <template #left>
          <van-icon class="left" name="arrow-left" @click="left" />
        </template>
        <template #right>
          <van-icon name="search" class="right" @click="goSearch" />
        </template>
      </van-nav-bar>
    </div>
    <!--  -->
    <div class="select">
      <van-dropdown-menu
        :overlay="false"
        class="option_body"
        @open="open"
        @close="close"
      >
        <van-dropdown-item v-model="value1" :options="option1">
          <div class="options_item">
            <div style="height: 0.2rem"></div>
            <div class="options_riqi">
              <van-calendar
                title="日历"
                :poppable="false"
                :show-confirm="false"
                :style="{ height: '260px' }"
              />
            </div>
          </div>
          <div class="options_shiduan">
            <div style="margin-left: 0.2rem">
              时段
              <div class="option_time">
                <span class="time_button"> 开始时间</span>
                <span style="margin-top: 0.2rem">-</span>
                <span class="time_button">结束时间</span>
              </div>
            </div>
            <!-- 弹出层 -->
            <!-- <van-popup v-model="showw" position="top" :style="{ height: '30%' }" /> -->
          </div>
        </van-dropdown-item>
        <van-dropdown-item v-model="value2" :options="option2">
          <div class="option1_body">
            <!-- 老师类型 -->
            <div class="option1_one">
              <div>老师类型</div>
              <van-tag
                plain
                size="medium"
                style="margin: 0.1rem 0.3rem"
                v-for="i in 10"
                :key="i"
                class="van_tan_btn"
                >M10</van-tag
              >
            </div>
            <!-- 只看 -->
            <div class="option_two">
              <div>只看</div>
              <div style="display: felx; margin: 0.2rem">
                <van-checkbox v-model="checked">已关注</van-checkbox>
                <van-checkbox v-model="checked">上过课的</van-checkbox>
              </div>
            </div>
            <!-- 年级 -->
            <div class="option_three">
              <div style="width: 100%">年级</div>
              <br /><br />
              <div class="nianji_btn" v-for="i in 10" :key="i">小学一年级</div>
            </div>
            <!-- 学科 -->
            <div class="option_three">
              <div style="width:100%">学科</div>
              <div class="nianji_btn" v-for="i in 10" :key="i">数学</div>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <!-- 老师名单 -->

    <div class="teachers">
      <div style="height: 0.02rem"></div>
      <div class="teacher_s" v-for="i in 10" :key="i" v-show="show">
        <div class="tearch_img">
          <div class="img_img"></div>
          <div class="img_content">
            <div>杨德胜</div>
            <div style="color: #b7b7b7; font-size: 10px">男 10年教龄</div>
          </div>
        </div>
        <div class="yu_yue" @click="goAppointment">预约</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      showw: "",
      value1: 0,
      value2: "a",
      option1: [{ text: "全部商品", value: 0 }],
      option2: [{ text: "默认排序", value: "a" }],
    };
  },
  methods: {
    goAppointment() {
      console.log("dfgn");
      this.$router.push("/appointment");
    },
    methods: {
      left() {
        window.history.back();
      },
      goSearch() {
        this.$router.push("/search");
      },
      goAppointment() {
        console.log(32132);
        this.$router.push("/appointment");
      },
    },
    goSearch() {
      this.$router.push("/search");
    },
    open() {
      this.show = false;
    },
    close() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.van-dropdown-menu {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0.9rem;
}
.fudao_body {
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
}
.left {
  color: #727272;
  font-size: 0.5rem;
}
.right {
  color: #727272;
  font-size: 0.5rem;
}
.select {
  margin-top: 0.9rem;
  width: 100%;
  height: 7vh;
  color: #969696;
  font-size: 0.2rem;
}
.teachers {
  width: 100%;
  background: #f0f2f5;
}
.teacher_s {
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
.yu_yue {
  width: 1.2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #eb6e17;
  background: #ebeefe;
  border-radius: 0.3rem;
  font-size: 0.25rem;
  z-index: 1;
}
.tearch_img {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.img_img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #c4c3c3;
  margin-top: -0.1rem;
}
.img_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.option_body {
  width: 100%;
  /* height: 80vh; */
}
.options_item {
  width: 100%;
  height: 80vh;
  background: #f0f2f5;
}
.options_riqi {
  width: 95%;
  height: 18vh;
  margin-left: 0.2rem;
  padding-top: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
}
.options_shiduan {
  width: 95%;
  height: 15vh;
  margin-left: 0.2rem;
  padding-top: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: -5rem;
}
.option_time {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
}
.time_button {
  width: 2rem;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  border: 1px solid #999;
  border-radius: 0.1rem;
}
.van_tan_btn {
  background: #f5f5f5;
}
.option1_body {
  width: 100%;
  height: 100%;
}
.option1_one {
  width: 95%;
  height: 13vh;
  margin-left: 0.2rem;
  border-bottom: 1px solid rgb(235, 233, 233);
}
.option_two {
  width: 95%;
  height: 12vh;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  color: #999;
  border-bottom: 1px solid rgb(235, 233, 233);
}
.option_three {
  width: 95%;
  height: 33vh;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(235, 233, 233);
}
.nianji_btn {
  width: 1.4rem;
  height: 0.7rem;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.7rem;
  background: #f5f5f5;
  margin: 0.1rem 0.25rem;
}
</style>