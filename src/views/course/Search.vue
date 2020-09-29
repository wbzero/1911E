<template>
  <div>
    <div>
      <van-row>
        <van-col span="2">
          <van-icon class="left" name="arrow-left" @click="left" />
        </van-col>
        <van-col span="19">
          <van-search v-model="value" shape="round" placeholder="请输入内容" />
        </van-col>
        <van-col span="3">
          <span class="right" @click="searchCoach">搜索</span>
        </van-col>
      </van-row>
    </div>
    <!-- 搜索记录 -->
    <div class="jilu">
        <span style="font-size:0.35rem;font-weight:bold">历史搜索</span>
        <span><van-icon name="delete" color="red" size="0.35rem" /></span>
    </div>
    <!-- 记录 -->
    <van-tag round type="primary" size="medium" style="margin:0.2rem">标签</van-tag>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    left() {
      window.history.back();
    },
    searchCoach(){
        this.$router.push('/coach')
    }
  },
};
</script>

<style scoped>
.left {
  font-size: 0.45rem;
  margin-top: 0.3rem;
  margin-left: 0.15rem;
}
.right{
    position: absolute;
    font-size: 0.3rem;
    top: 0.3rem;
    margin-left: 0.15rem;
}
.jilu{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.2rem 0.4rem;
}
</style>