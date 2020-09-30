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
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <!-- 老师名单 -->
    <div class="teachers">
      <div style="height: 0.02rem"></div>
      <div class="teacher_s" v-for="i in 10" :key="i">
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
        value1: 0,
        value2: "a",
        option1: [{
            text: "选择上课时间",
            value: 0
          },
          {
            text: "选择上课时间",
            value: 1
          },
          {
            text: "选择上课时间",
            value: 2
          },
          {
            text: "选择上课时间",
            value: 2
          },
          {
            text: "选择上课时间",
            value: 2
          },
          {
            text: "选择上课时间",
            value: 2
          },
          {
            text: "选择上课时间",
            value: 2
          },
        ],
        option2: [{
            text: "选择老师条件",
            value: "a"
          },
          {
            text: "好评排序",
            value: "b"
          },
          {
            text: "销量排序",
            value: "c"
          },
          {
            text: "销量排序",
            value: "c"
          },
          {
            text: "销量排序",
            value: "c"
          },
          {
            text: "销量排序",
            value: "c"
          },
          {
            text: "销量排序",
            value: "c"
          },
        ],
      }
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
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>