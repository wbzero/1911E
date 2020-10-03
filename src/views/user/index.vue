<template>
  <div class="userBody">
    <div class="bgcolor"></div>
    <div class="main_box">
      <div class="top_title">
        <van-row class="top_title_user" align="center">
          <van-col span="8">
            <van-image @click="gotos('/info')" style="margin-left: 1rem;" round width="1rem" height="1rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="8">131*******9554</van-col>
          <van-col span="8"></van-col>
        </van-row>

        <div class="top_title_gird">
          <my-gird class="indexs" @goto="goto(item)" v-for="(item, index) in gird" :key="index" :item="item" />
        </div>
      </div>
      <div @click="adds">
        <my-odds />
      </div>
      <div class="courses">
        <div class="course_title">课程相关</div>
        <div class="primary">
          <van-grid>
            <van-grid-item @click="gotos('/friends')" icon="friends" text="关注的老师" />
            <van-grid-item @click="gotos('/star')" icon="star" text="我的收藏" />
          </van-grid>
        </div>
      </div>
      <div class="courses">
        <div class="course_title">订单相关</div>
        <div class="primary">
          <van-grid>
            <van-grid-item @click="gotos('/bill')" icon="bill" text="课程订单" />
            <van-grid-item @click="gotos('/bills')" icon="bill" text="会员订单" />
            <van-grid-item @click="gotos('/billse')" icon="bill" text="约课订单" />
          </van-grid>
        </div>
      </div>
      <div class="courses">
        <div class="course_title">我的账户</div>
        <div class="primary">
          <van-grid>
            <van-grid-item @click="gotos('/coupon')" icon="coupon" text="优惠券" />
            <van-grid-item @click="gotos('/card')" icon="card" text="学习卡" />
            <van-grid-item @click="gotos('/diamond')" icon="diamond" text="会员" />
          </van-grid>
        </div>
      </div>
      <div class="courses">
        <div class="course_title">自助服务</div>
        <div class="primary">
          <van-grid>
            <van-grid-item @click="gotos('/bell')" icon="bell" text="我的消息" />
            <van-grid-item @click="gotos('/invition')" icon="invition" text="意见反馈" />
            <van-grid-item @click="service" icon="service-o" text="在线服务" />
            <van-grid-item @click="gotos('/setting')" icon="setting" text="设置" />
          </van-grid>
        </div>
      </div>
    </div>
    <van-popup class="img" v-model="show"><img @click="adds" src="../../assets/a1.png" alt=""></van-popup>
    <my-service :show="isShows" @back="back" />
  </div>
</template>
<script>
  import gird from "./components/Gird.vue";
  import odds from "./components/Odds";
  import Service from '../../components/Service'
  export default {
    data() {
      return {
        show: false,
        isShow: false,
        gird: [{
            num: 0,
            title: "我的特色课",
            dispa: "已购特色课程的学习",
          },
          {
            num: 0,
            title: "一对一辅导",
            dispa: "我的一对一老师辅导",
          },
          {
            num: 0.0,
            title: "剩余学习币",
            dispa: "查看剩余学习币",
          },
        ],
      };
    },
    components: {
      "my-gird": gird,
      "my-odds": odds,
      "my-service": Service
    },
    computed: {
      isShows() {
        return this.$store.state.show
      }
    },
    methods: {
      goto(obj) {
        // console.log(obj)
        if (obj.title == "我的特色课") {
          this.$router.push("/lessone");
        } else if (obj.title == "一对一辅导") {
          this.$router.push("/course");
        } else if (obj.title == "剩余学习币") {
          this.$router.push("/currency");
        }
      },
      gotos(url) {
        this.$router.push(url);
      },
      adds() {
        this.show = !this.show;
      },
      service() {
        this.isShow = true
        this.$store.dispatch('addShow', this.isShow)
      },
      back() {
        this.isShow = false
        this.$store.dispatch('addBack', this.isShow)
      }
    },
  };
</script>

<style scoped lang='scss'>
  .userBody {
    width: 100%;
    height: 90vh;
    position: relative;
    background-color: #eee;
    overflow: scroll;

    .img {
      width: 90%;
      height: 90%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .bgcolor {
      width: 100%;
      height: 5rem;
      background-color: #fc5500;
      border-radius: 40%;
      position: absolute;
      top: -2.5rem;
    }

    .main_box {
      width: 90%;
      height: 90vh;
      position: absolute;
      margin-left: 5%;
      top: 1rem;

      .top_title {
        width: 100%;
        height: 3rem;
        background: #fff;
        border-radius: 3%;

        .top_title_user {
          width: 100%;
          height: 50%;
          display: inline-flex;
          align-items: center;
        }

        .top_title_gird {
          width: 100%;
          height: 50%;
          display: inline-flex;
          justify-content: space-between;
          align-items: center;

          .indexs {
            width: 100%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        }
      }

      .courses {
        width: 100%;
        height: 2.5rem;
        margin-top: 0.3rem;
        border-bottom: 0.01rem solid #eee;

        .course_title {
          width: 100%;
          height: 0.7rem;
          display: inline-flex;
          align-items: center;
          box-sizing: border-box;
          padding: 0px 0.1rem;
          font-size: 0.3rem;
        }

        .primary {
          width: 100%;
          height: 1.3rem;
        }
      }
    }
  }

</style>