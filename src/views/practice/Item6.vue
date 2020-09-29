<template>
  <div>
    <van-nav-bar
      title="习题收藏"
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
    </van-dropdown-menu>
    <img src="../../../public/img/855fb5f73dbb28a9a0a02f473a51b1c.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "题目类型", value: 0 },
        { text: "单选", value: 1 },
        { text: "多选", value: 2 },
        { text: "判断", value: 3 },
        { text: "连线", value: 4 },
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