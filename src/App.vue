<template>
  <div id="app">
    <router-view />
    <van-tabbar route active-color="#FEAF7A" v-if="$route.meta.show == true">
      <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item to="/lessone" icon="column">课程</van-tabbar-item>
      <van-tabbar-item to="/course" icon="youzan-shield"
        >约课记录</van-tabbar-item
      >
      <van-tabbar-item to="/practice" icon="todo-list">练习</van-tabbar-item>
      <van-tabbar-item to="/user" icon="smile">我的</van-tabbar-item>
    </van-tabbar>

    <div
      class="drag"
      ref="drage"
      v-show="!isShow"
      @touchmove="changes"
      @click="add"
    >
      <van-icon name="coupon" size="30" />
    </div>
    <Service :show="isShow" @back="back" />
  </div>
</template>

<script>
// import { getAppIndex, banner } from "./api/api";
import Service from "./components/Service";

export default {
  
  components: {
    Service,
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    isShow() {
      return this.$store.state.show;
    },
  },
  methods: {
    add() {
      this.show = true;
      this.$store.dispatch("addShow", this.show);
    },
    back() {
      this.show = false;
      this.$store.dispatch("addBack", this.show);
    },
    changes(e) {
      let cx = e.targetTouches[0].clientX;
      let cy = e.targetTouches[0].clientY;
      let vw = document.documentElement.clientWidth;
      let vh = document.documentElement.clientHeight;

      if (cx < 30) {
        cx = 30;
      } else if (cx > vw - 30) {
        cx = vw - 30;
      }
      if (cy < 30) {
        cy = 30;
      } else if (cy > vh - 30) {
        cy = vh - 30;
      }

      this.$refs.drage.style.left = cx - 30 + "px";
      this.$refs.drage.style.top = cy - 30 + "px";
    },
  },
};
</script>

<style lang="scss">
.drag {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: #0f7afd;
  position: absolute;
  top: 6rem;
  left: 6.3rem;
  color: #fff;
}

.first_popup {
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f4;
}

.top {
  width: 100%;
  height: 1.1rem;
  background-color: #0f7afd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0rem 0.2rem;
  color: #fff;
  font-size: 0.16rem;
}

.main {
  width: 100%;
  margin: 0.2rem 0rem;
  box-sizing: border-box;
  padding: 0.1rem 0.3rem;
  color: #666;
}
.van-button {
  width: 100%;
}
</style>
