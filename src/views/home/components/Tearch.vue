<template>
  <div>
    <div class="tearch_wrap">
    <div class="tearch_header">
      <div class="tearch_header_top">
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
            alt=""
          />
        </span>
        <span style="color: #fff; font-size: 0.4rem">讲师详情</span>
        <span></span>
      </div>
    </div>
    <div class="attention">
      <div class="attention_left">
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
          style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
        />
        <div class="attention_left_div">
          <div class="attention_left_h">
            <h3>杨德胜</h3>
            <p style="color: rgba(246, 195, 161)">M20</p>
          </div>
          <span style="color: gray">男 30年教龄</span>
        </div>
      </div>
      <div class="attention_right">
        <button>关注</button>
      </div>
    </div>
    <div class="tearch_bottom">
      <van-tabs v-model="active" line-width="20px" title-active-color="orange" >
        <van-tab title="讲师介绍">内容 1</van-tab>
        <van-tab title="主讲课程">内容 2</van-tab>
        <van-tab title="学员评价">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
.tearch_wrap {
  width: 100%;
  height: 100vh;
  background: #f0f2f5;
}
.tearch_header {
  width: 100%;
  height: 2.5rem;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
}
.tearch_header_top {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.3rem;
  align-items: center;
}
.attention {
  width: 95%;
  height: 2rem;
  background: #fff;
  position: relative;
  margin: -1.5rem auto;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.3rem;
  align-items: center;
  border-radius: 0.1rem;
}
.attention_left {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.attention_left_div {
  margin: 0 0.3rem;
}
.attention_left_h {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.attention_right button {
  width: 1.2rem;
  height: 0.5rem;
  background: #ebeefe;
  border-radius: 0.35rem;
  color: rgb(247, 182, 139);
  border: none;
  outline: none;
}
</style>