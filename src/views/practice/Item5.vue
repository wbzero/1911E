<template>
  <div>
    <van-nav-bar
      title="测评记录"
      left-arrow
      size="24"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="24" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <img src="../../../public/img/855fb5f73dbb28a9a0a02f473a51b1c.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "类型不限", value: 0 },
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "仿真模考", value: 1 },
        { text: "转点专练", value: 2 },
      ],
      option2: [
        { text: "时间", value: "a" },
        { text: "全部", value: "b" },
        { text: "今天", value: "c" },
        { text: "7天", value: "c" },
      ],
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    onClickRight() {
      this.$router.push({
        path: "/search",
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>