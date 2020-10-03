<template>
  <div>
    <div>
      <van-nav-bar title="初三化学一模考试题" left-arrow size="30">
      </van-nav-bar>

      <van-swipe-cell>
        <van-cell
          :border="false"
          title="题库选择"
          value="内容"
          @click="onClickLeft"
        />
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/item7",
      });
    },
    // Onclick(){
    // window.history.back();
    // }
  },
};
</script>

<style scoped>
</style>