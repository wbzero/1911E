<template>
  <div class="userBody">
    <div>
      <div class="bgcolor"></div>
      <div class="main_box">
        <div class="top_title">
          <van-row class="top_title_user" align="center">
            <van-col span="6">
              <van-image
                style="margin-left: 0.5rem"
                @click="gotos('/info')"
                round
                width="1rem"
                height="1rem"
                :src="list.avatar"
              />
            </van-col>
            <van-col span="10" @click="gotos('/info')">{{list.nickname}}</van-col>
            <van-col span="8">
              <div class="qu" @click="gotos('/coach')">去约课</div>
            </van-col>
          </van-row>

          <div class="top_title_gird">
            <my-gird
              class="indexs"
              v-for="(item, index) in gird"
              :key="index"
              :item="item"
              @goto="goto"
            />
          </div>
        </div>
        <div @click="adds">
          <my-odds />
        </div>
        <div class="courses">
          <div class="course_title">课程相关</div>
          <div class="primary">
            <van-grid>
              <van-grid-item @click="gotos('/friends')" text="关注的老师">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-gerenzhongxin-wodeguanzhu"
                  ></span>
                </template>
              </van-grid-item>
              <van-grid-item @click="gotos('/star')" text="我的收藏">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-wodeshoucang"
                  ></span>
                </template>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div class="courses">
          <div class="course_title">订单相关</div>
          <div class="primary">
            <van-grid>
              <van-grid-item @click="gotos('/bill')" text="课程订单">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-dingdan"
                  ></span>
                </template>
              </van-grid-item>
              <van-grid-item @click="gotos('/bills')" text="会员订单">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-dingdan"
                  ></span>
                </template>
              </van-grid-item>
              <van-grid-item @click="gotos('/billse')" text="约课订单">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-dingdan"
                  ></span>
                </template>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div class="courses">
          <div class="course_title">我的账户</div>
          <div class="primary">
            <van-grid>
              <van-grid-item @click="gotos('/coupon')" text="优惠券">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-youhuiquan"
                  ></span>
                </template>
              </van-grid-item>
              <van-grid-item @click="gotos('/card')" text="学习卡">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-icon-test"
                  ></span>
                </template>
              </van-grid-item>
              <van-grid-item @click="gotos('/diamond')" text="会员">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-huiyuan"
                  ></span>
                </template>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div class="courses">
          <div class="course_title">自助服务</div>
          <div class="primary">
            <van-grid>
              <van-grid-item @click="gotos('/bell')" text="我的消息">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-xiaoxi-"
                  ></span>
                </template>
              </van-grid-item>
              <van-grid-item @click="gotos('/invition')" text="意见反馈">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-yijianfankui"
                  ></span>
                </template>
              </van-grid-item>
              <van-grid-item @click="service" text="在线服务">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-kefu"
                  ></span>
                </template>
              </van-grid-item>
              <van-grid-item @click="gotos('/setting')" text="设置">
                <template #icon>
                  <span
                    style="font-size: 0.56rem; color: #ff944b"
                    class="iconfont icon-shezhi"
                  ></span>
                </template>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </div>
    </div>
    <van-popup class="img" v-model="show"
      ><img @click="adds" src="../../assets/a1.png" alt=""
    /></van-popup>
    <my-service :show="isShows" @back="back" />
  </div>
</template>
<script>
import gird from "./components/Gird.vue";
import odds from "./components/Odds";
import Service from "../../components/Service";
import {user} from "../../api/api"
export default {
  //userINfo
  async mounted() {
    var res=await user()
    if(res.data.code==200){
      this.list=res.data.data
    }
    console.log(res)
  },
  data() {
    return {
      list:{},
      show: false,
      sasCode: JSON.parse(localStorage.getItem("sascode")) || {},
      isShow: false,
      gird: [
        {
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
  created() {},
  components: {
    "my-gird": gird,
    "my-odds": odds,
    "my-service": Service,
  },
  computed: {
    isShows() {
      return this.$store.state.show;
    },
  },
  methods: {
    goto(obj) {
      console.log(obj)
      if (obj.title == "我的特色课") {
        this.$router.push("/teseke");
        console.log(111)
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
      this.isShow = true;
      this.$store.dispatch("addShow", this.isShow);
    },
    back() {
      this.isShow = false;
      this.$store.dispatch("addBack", this.isShow);
    },
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

.qu {
  background-color: #fc5500;
  color: #fff;
  width: 0.9rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 52%;
  padding: 0.1rem;
  border-radius: 0.1rem 0rem 0rem 0.1rem;
}
</style>
