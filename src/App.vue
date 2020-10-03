<template>
  <div id="app">
    <router-view />
    <van-tabbar route active-color="#FEAF7A" v-if="$route.meta.show==true">
      <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item to="/lessone" icon="column">课程</van-tabbar-item>
      <van-tabbar-item to="/course" icon="youzan-shield">约课记录</van-tabbar-item>
      <van-tabbar-item to="/practice" icon="todo-list">练习</van-tabbar-item>
      <van-tabbar-item to="/user" icon="smile">我的</van-tabbar-item>
    </van-tabbar>

    <div class="drag" ref="drage" v-show="!show" @touchmove="changes" @click="add">
      <van-icon name="coupon" size="30" />
    </div>
    <van-popup v-model="show" :overlay="false" position="bottom">
      <div class="first_popup">
        <div class="top">
          <div>给我们留言</div>
          <div>
            <van-icon name="arrow-down" size="20" @click="back" />
          </div>
        </div>
        <div class="main">
          您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题
        </div>
        <div>
          <p style="margin:.1rem 0rem;box-sizing:border-box;padding-left:.3rem;font-size:.16rem;">手机</p>
          <van-field type="tel" placeholder="请输入" />
          <p style="margin:.1rem 0rem;box-sizing:border-box;padding-left:.3rem;font-size:.16rem;">留言内容<span
              style="color:red;">*</span></p>
          <van-field rows="3" autosize type="textarea" placeholder="请输入" />
          <p style="margin:.3rem 0rem;box-sizing:border-box;padding:0rem .3rem;font-size:.16rem;">
            <van-button type="primary" size="normal" style="background:#187AFB">提交</van-button>
          </p>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      add() {
        this.show = true
        // this.$router.push('/email')
      },
      back() {
        this.show = false
      },
      changes(e) {
        let cx = e.targetTouches[0].clientX;
        let cy = e.targetTouches[0].clientY;
        let vw = document.documentElement.clientWidth;
        let vh = document.documentElement.clientHeight;

        if (cx < 30) {
          cx = 30
        } else if (cx > vw - 30) {
          cx = vw - 30
        }
        if (cy < 30) {
          cy = 30
        } else if (cy > vh - 30) {
          cy = vh - 30
        }

        this.$refs.drage.style.left = cx - 30 + "px"
        this.$refs.drage.style.top = cy - 30 + "px"
      }
    },
  }
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
    background-color: #0F7AFD;
    position: absolute;
    top: 6rem;
    left: 6.3rem;
    color: #fff;
  }

  .first_popup {
    width: 100vw;
    height: 100vh;
    background-color: #F1F2F4;
  }

  .top {
    width: 100%;
    height: 1.1rem;
    background-color: #0F7AFD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0rem .2rem;
    color: #fff;
    font-size: .16rem;
  }

  .main {
    width: 100%;
    margin: .2rem 0rem;
    box-sizing: border-box;
    padding: .1rem .3rem;
    color: #666;
  }
  .van-button{
    width: 100%;
  }
</style>
