<template>
  <div class="Course_details">
    <!-- 遮罩层 -->

    <van-overlay :show="shows8" @click="shows8 = false">
      <div class="erwei">
        <p style="font-size: 0.3rem; margin: 0.3rem 0 0 0">分享</p>
        <img :src="imgUrl" alt="" />
      </div>
    </van-overlay>
    <div class="cou_wrap">
      <!-- 滚动显示 -->
      <div class="content_banner">
        <div class="banner_top">
          <img :src="infos.cover_img" style="width: 61%; height: 100%" />
        </div>
        <div class="content_texts">
          <div class="fen">
            <img
              src="data:image/png;base64,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"
              style="width: 0.4rem; height: 0.4rem"
              @click="xianshi"
            />
          </div>
          <p style="margin: 0.2rem 0 0 0; font-size: 0.3rem">
            {{ infos.title }}
          </p>
          <span>剩余名额: {{ infos.store_num }}</span
          ><br />
          <span>报名截止时间: {{ infos.start_play_date | moment }}</span
          ><br />
          <span
            >开课时间: {{ infos.end_play_date | moment }}
            {{ infos.enter_end_date | moment }}</span
          ><br />
          <span>开课地点: {{ infos.city_name }}{{ infos.district_name }}</span
          ><br />
          <p style="margin: 0.2rem 0; font-size: 0.3rem; color: #e655ab">
            {{ infos.price | prices }}
          </p>
          <p style="margin: 0.3rem 0"></p>
        </div>
      </div>

      <div class="team">
        <p style="margin: 0.2rem 0; font-size: 0.3rem">教学团队</p>
        <div>
          <img
            @click="gotearch(list.teacher_id)"
            :src="list.teacher_avatar"
            style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
          />
          <p>{{ list.teacher_name }}</p>
        </div>
        <!-- 收藏 -->
        <div>
          <van-icon
            name="star-o"
            size="20px"
            @click="onColor1"
            class="shoucang"
            v-show="show1"
          />
          <van-icon
            name="star-o"
            size="20px"
            color="orange"
            @click="onColor2"
            class="shoucang"
            v-show="show2"
          />
        </div>
      </div>
<!-- 滚动-->
      <van-tabs
        v-model="activess"
        scrollspy
        sticky
        title-active-color="red"
        line-width="0px"
      >
        <van-tab>
          <template #title>
            <div style="font-size: 0.3rem">课程介绍</div>
          </template>
          <!-- 课程介绍 -->
          <div class="introduce">
            <p>课程介绍</p>
            <div class="sizes" v-html="course.course_details"></div>
          </div>
        </van-tab>
        <van-tab>
          <template #title>
            <div style="font-size: 0.3rem">课程大纲</div>
          </template>
          <!-- 课程大纲 -->
          <div class="introduces">
            <p>课程大纲</p>
            <ul>
              <li v-for="(item, index) in outline" :key="index">
                <div style="margin: 0 0.3rem">
                  <span
                    v-show="item.is_try_see == 1"
                    style="
                      background: #e60012;
                      color: #fff;
                      padding: 0.05rem 0.1rem;
                      display: inline-block;
                      margin: 0 0.1rem;
                    "
                    >{{ item.is_try_see | shi }}</span
                  >
                  <span
                    style="
                      background: #ea7a2f;
                      color: #fff;
                      padding: 0.05rem 0.1rem;
                      display: inline-block;
                      margin: 0 0.1rem;
                    "
                    >{{ item.is_free | hui }}</span
                  >
                  <!-- is_try_see -->
                  <span>{{ item.periods_title }}</span>
                </div>
                <div style="margin: 0.1rem 0.6rem; color: gray">
                  <span>{{ item.teachers[0].teacher_name }} </span>
                  <span style="display: inline-block; margin: 0 0.2rem">
                    {{ item.start_play }} - {{ item.end_play }}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab>
          <template #title>
            <div style="font-size: 0.3rem">课程评价</div>
          </template>
          <div class="comment">
            <h4>课程评论</h4>
            <div class="imgss" v-show="xiangList.length == 0">
              <img
                src="../../../assets/pinglun.png"
                alt=""
                style="width: 3.5rem; height: 4rem"
              />
            </div>
            <ul>
              <li v-for="(item, index) in xiangList" :key="index">
                <div class="comment_img">
                  <img
                    :src="item.avatar"
                    style="width: 0.5rem; height: 0.5rem; border-radius: 50%"
                  />
                </div>
                <div class="comment_right">
                  <div class="comment_right_p">
                    <p style="font-size: 0.27rem">{{ item.nickname }}</p>
                    <van-rate v-model="value" size="13px" readonly />
                    <span style="color: gray">{{
                      (item.uid * 1000) | moment
                    }}</span>
                  </div>
                  <span
                    style="
                      display: inline-block;
                      margin: 0.2rem 0.1rem;
                      color: gray;
                      width: 100px;
                      overflow: hidden;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                    "
                    >{{ item.content }}</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>

      <!-- 课程评价 -->
    </div>
    <button class="btn" @click="apply">{{ tex }}</button>
    <!-- 遮挡层 -->
    <van-overlay :show="show" @click="show = false">
      <div class="fx">
        <img src="../../../assets/fx.png" alt="" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
// import $_jq from "jquery";
import QRCode from "qrcode";
import { Toast } from "vant";
import {
  getAppIndex,
  course,
  pinglun,
  courses,
  tuan,
  shoucang,
  baoming,
  xuexi,
  quxiao,
} from "../../../api/api";
import LoginVue from "../../Login.vue";
export default {
  filters: {
    hui(val) {
      let str = "";
      if (val == 1) {
        str = "回放";
      }
      return str;
    },
    // 试看
    shi(val) {
      let str = "";
      if (val == 1) {
        str = "试看";
      }
      return str;
    },
    prices(val) {
      if (val == 0) {
        return "免费";
      } else {
        return "1";
      }
    },
  },
  async mounted() {
    if (this.$route.query.has_buy == 1) {
      this.tex = "立即学习";
    } else {
      this.tex = "立即报名";
    }
    // 团队
    tuan(this.val1).then((res) => {
      console.log(res.data.data);
      res.data.data.teachers.map((item) => {
        this.list = item;
      });
      //is_collect

      this.infos = res.data.data.info;
      if(this.infos.is_collect==1){
        this.show1=false;
        this.show2=true;
      }else {
        this.show1=true;
        this.show2=false;
      }
    });

    var res = await getAppIndex();


    var cou = await course(this.val1);

    this.course = cou.data.data.info;

    // 评论
    var ping = await pinglun(this.val1);
    if (ping.code == 200) {
      this.xiangList = ping.data.list;
    }

    // 课程大纲
    var hui = await courses(this.val1);
    this.outline = hui.data;
  },
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
  data() {
    return {
      shows8: false,
      value: 5,
      isColor: "",
      tex: "立即报名",
      show: false,
      val1: this.$route.query.val1,
      course_type: this.$route.query.course_type,
      list: {},
      showList: [],
      course: {},
      xiangList: [],
      outline: [],
      active: "introduce",
      activess: 1,
      infos: {},
      show1: true,
      show2: false,
      collectId: {},
      imgUrl: "",
    };
  },
  methods: {
    // 显示
    xianshi() {
      this.shows8 = true;
      let url = location.href;

      QRCode.toDataURL(url)
        .then((img) => {
          console.log(img);
          this.imgUrl = img;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 点击跳转tearch
    gotearch(index) {
      this.$router.push({
        path: "/tearch",
        query: {
          val: index,
        },
      });
    },
    onColor1() {
      this.show1 = false;
      this.show2 = true;
      Toast("收藏成功");
      var obj = {
        course_basis_id: this.val1,
        type: 1,
      };
      shoucang(obj).then((res) => {
        console.log(res)
      });
    },
    onColor2() {
      this.show1 = true;
      this.show2 = false;
      console.log(this.collectId);
      Toast("取消收藏");
      quxiao(this.infos.collect_id).then((res) => {
        console.log(res);
      });
    },

    back() {
      window.history.back();
    },

    apply() {
      if (this.tex == "立即报名") {
        if(this.infos.price != 0){
          this.$router.push({
            path: "/order",
            query: {
              val1: this.val1,
            },
          });
        }else {
          let obj = {
            shop_id: this.val1,
            type: this.$route.query.course_type,
          };
          baoming(obj).then((res) => {
            // if (res.code == 201) {
            console.log(res.msg);
            Toast(res.msg);
            // }
          });
          localStorage.setItem("index", this.val1);
          Toast.success("成功");
          setTimeout(() => {
            this.tex = "立即学习";
          }, 2500);
        }

      } else if (this.tex == "立即学习") {
        if (this.infos.price == 0) {
          this.$router.push({
            path: "/study",
            query: {
              val1: this.val1,
              type: this.$route.query.course_type,

            },
          });
        } else {
          this.$router.push({
            path: "/order",
            query: {
              val1: this.val1,
            },
          });
        }
      }
    },
    share() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
/* 二维码 */
.erwei {
  width: 70%;
  height: 5rem;
  background: #fff;
  text-align: center;
  margin: 3rem auto;
  overflow: hidden;
  border-radius: 0.2rem;
}
.erwei > img {
  width: 80%;
  height: 80%;
}
/* 遮罩层 */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
/* 头部轮播 */
.content_banner {
  width: 100%;
  background: #fff;
}
.banner_top {
  width: 100%;
  height: 4.5rem;
  background: #f0f2f5;
}
.content_texts {
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.4rem;
  position: relative;
}
.fen {
  position: absolute;
  right: 0.3rem;
  top: 0.2rem;
}
.content_texts span {
  display: inline-block;
  margin: 0.1rem 0;
  font-size: 0.28rem;
  color: gray;
}
.imgss {
  width: 3.5rem;
  height: 4rem;
  margin: 0 auto;
}
.active {
  color: gray;
}
.sizes >>> p {
  font-size: 0.27rem !important;
}
.fx {
  width: 5rem;
  height: 5rem;
  /* border: 1px solid red; */
  text-align: center;
  margin: 4.5rem auto;
  background: #fff;
}
.fx > img {
  width: 100%;
  height: 100%;
}
.cou_wrap {
  width: 100%;
  height: 92vh;
  overflow: scroll;
}
.starts {
  display: inline-block;
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
}
/* 课程评论 */
.comment {
  width: 100%;
  background: #fff;
  margin: 0.3rem 0;
  box-sizing: border-box;
  padding: 0 0.3rem;
  overflow: hidden;
}
.comment h4 {
  font-size: 0.3rem;
  margin: 0.2rem 0;
}
.comment ul {
  width: 100%;
}
.comment ul li {
  width: 100%;
  height: 1.2rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comment_img {
  width: 10%;
}
.comment_right {
  width: 90%;
}
.comment_right_p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.1rem;
}
.Course_details {
  width: 100%;
  height: 92vh;
  background: rgb(240, 242, 245);
}
.Course_details_top {
  width: 100%;
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  box-sizing: border-box;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eee;
  z-index: 111;
}
.btn {
  width: 100%;
  height: 1rem;
  background: #eb6100;
  color: #fff;
  outline: none;
  border: none;
  position: fixed;
  bottom: 0rem;
  font-size: 0.35rem;
}

.Course_details_list p {
  width: 85%;
  font-size: 0.3rem;
  margin: 0.25rem 0 0 0;
}
.Course_details_list > div {
  color: gray;
  margin: 0.1rem 0;
  font-size: 0.3rem;
}
.team {
  width: 100%;
  height: 2.5rem;
  background: #fff;
  margin: 0.3rem 0;
  box-sizing: border-box;
  padding: 0 0.2rem;
  overflow: hidden;
  position: relative;
}
.shoucang {
  position: absolute;
  right: 0.3rem;
  top: 0.5rem;
}
.team > div {
  margin: 0.2rem 0.35rem;
}
.introduce {
  width: 100%;
  /* height: 1.5rem; */
  /* border: 1px solid red; */
  background: #fff;
  box-sizing: border-box;
  padding: 0.2rem 0.2rem;
  overflow: hidden;
  margin: 0rem 0;
}
.introduce p {
  font-size: 0.3rem;
  margin: 0.2rem 0;
}
.introduce > div {
  font-size: 0.28rem;
  margin: 0 0.2rem;
}
.introduces {
  width: 100%;
  /* height: 1.5rem; */
  /* border: 1px solid red; */
  background: #fff;
  box-sizing: border-box;
  padding: 0 0.2rem;
  overflow: hidden;
  margin: 0.3rem 0;
}
.introduces p {
  font-size: 0.3rem;
  margin: 0.2rem 0;
}
.introduces ul li {
  margin: 0.3rem 0;
}
</style>