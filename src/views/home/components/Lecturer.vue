<template>
  <div>
    <div class="tearch_wrap">
      <div class="tearch_header">
        <div class="tearch_header_top">
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
              alt=""
              @click="back"
            />
          </span>
          <span style="color: #fff; font-size: 0.35rem">讲师详情</span>
          <span></span>
        </div>
      </div>
      <div class="attention">
        <div class="attentions">
          <div class="attention_left">
            <img
              :src="list.teacher_avatar"
              style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
            />
            <div class="attention_left_div">
              <div class="attention_left_h">
                <h3>{{ list.introduction }}</h3>
                <p style="color: rgba(246, 195, 161)">{{ list.mm }}</p>
              </div>
              <span style="color: gray">男 30年教龄</span>
            </div>
          </div>
          <div class="attention_right">
            <button @click="attention">{{ tex }}</button>
          </div>
        </div>

        <div class="attention_bottoms">
          <span>讲解专业</span>
          <span>思路清晰</span>
          <span>分析到位</span>
          <span>亲和力强</span>
        </div>
      </div>
      <div class="tearch_bottom">
        <van-tabs
          v-model="active"
          line-width="20px"
          title-active-color="orange"
          color="orange"
        >
          <van-tab>
            <template #title>
              <div style="font-size: 0.3rem">讲师介绍</div>
            </template>
            <div class="introduce">
              <div class="introduce_content">
                <p
                  style="
                    color: gray;
                    height: 1rem;
                    line-height: 1rem;
                    font-size: 0.3rem;
                  "
                >
                  教学年龄
                  <span
                    style="
                      display: inline-block;
                      margin: 0 0.35rem;
                      font-size: 0.3rem;
                    "
                    >30年</span
                  >
                </p>
                <p
                  style="
                    color: gray;
                    height: 1rem;
                    line-height: 1rem;
                    font-size: 0.3rem;
                  "
                >
                  授课价格
                  <span
                    style="
                      display: inline-block;
                      margin: 0 0.35rem;
                      font-size: 0.3rem;
                    "
                    >400学习币</span
                  >
                </p>
                <div class="introduce_content_intro">
                  <div class="introduce_content_intro_left">老师介绍</div>
                  <div class="introduce_content_intro_right">
                    　杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
                    　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab>
            <template #title>
              <div style="font-size: 0.3rem">主讲课程</div>
            </template>
            <div class="Boutique">
              <div class="Boutique_bottom">
                <ul>
                  <li v-for="(item, index) in userList" :key="index">
                    <div class="Boutique_bottom_top">
                      <p style="font-size: 0.31rem">{{ item.title }}</p>

                      <span style="color: gray">共一课时</span>
                    </div>

                    <div class="Boutique_bottom_img1">
                      <img
                        :src="item.img"
                        alt=""
                        style="
                          width: 0.8rem;
                          height: 0.8rem;
                          border-radius: 50%;
                        "
                      />
                      <p>{{ item.name }}</p>
                    </div>
                    <div class="Boutique_bottom_free">
                      <span style="color: gray; font-size: 0.3rem"
                        >100人已报名</span
                      >
                      <span style="color: green; font-size: 0.3rem">免费</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </van-tab>
          <van-tab>
            <template #title>
              <div style="font-size: 0.3rem">学员评价</div>
            </template>
            <div class="evaluate">
              <div class="evaluate_top">
                <span>深入浅出(4)</span>
                <span>言简意核(4)</span>
                <span>幽默风趣(4)</span>
              </div>
              <div class="evaluate_bottom">
                <ul>
                  <li v-for="(item, index) in 5" :key="index">
                    <div class="evaluate_bottom_top">
                      <img
                        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg"
                        style="
                          width: 0.6rem;
                          height: 0.6rem;
                          border-radius: 50%;
                        "
                      />
                      <div class="starts">
                        <van-rate
                          v-model="value"
                          size="13px"
                          color="#EA7A2F"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="evaluate_bottom_content">
                      <span>深入浅出(4)</span>
                      <span>言简意核(4)</span>
                      <span>幽默风趣(4)</span>
                      <span>深入浅出(4)</span>
                      <span>言简意核(4)</span>
                      <span>幽默风趣(4)</span>
                      <span>深入浅出(4)</span>
                      <span>言简意核(4)</span>
                      <span>幽默风趣(4)</span>
                      <span>言简意核(4)</span>
                      <span>幽默风趣(4)</span>
                    </div>
                    <div class="evaluate_bottom_bot">谢谢老师!十分有帮助</div>
                  </li>
                </ul>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <button class="btn" @click="appointment">立即预约</button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getAppIndex } from "../../../api/api";
export default {
  created() {
    this.$axios.get("http://localhost:8080/data1.json").then((res) => {
      // console.log(res.data.data);
      this.userList = res.data.data;
    });
  },
  async mounted() {
    var res = await getAppIndex();
    if (res.data.code == 200) {
      res.data.data[4].list.filter((item) => {
        if (item.teacher_id == this.val) {
          this.list = item;
          console.log(item);
        }
      });
    }
    // this.$axios
    //   .get("http://120.53.31.103:84/api/app/recommend/appIndex")
    //   .then((res) => {
    //     res.data.data[4].list.filter((item) => {
    //       if (item.teacher_id == this.val) {
    //         this.list = item;
    //       }
    //     });
    //   });
  },
  data() {
    return {
      list: {},
      userList: [],
      active: 0,
      tex: "关注",
      value: 4,
      val: this.$route.query.val,
    };
  },
  methods: {
    // 立即预约
    appointment() {
      this.$router.push("/appointment");
    },
    // 点击返回
    back() {
      window.history.back();
    },
    attention() {
      if (this.tex == "关注") {
        Toast.success("已关注");
        setTimeout(() => {
          this.tex = "已关注";
        }, 2500);
      } else if (this.tex == "已关注") {
        Toast.success("已取消");
        setTimeout(() => {
          this.tex = "关注";
        }, 2500);
      }
    },
  },
};
</script>

<style scoped>
/* 学员评价 */
.evaluate {
  width: 100%;
  /* height: 10vh; */
  background: #fff;
}
.evaluate_top {
  width: 100%;
  /* height: 1rem; */
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.2rem 0.7rem;
  align-items: center;
  border-top: 1px solid #eee;
}
.evaluate_top span {
  border: 1px solid #ea7a2f;
  color: #ea7a2f;
  padding: 0.1rem 0.2rem;
}
.evaluate_bottom {
  width: 100%;
  background: #fff;
}
.evaluate_bottom ul {
  width: 100%;
}

.evaluate_bottom ul li {
  height: 5rem;
  /* border: 1px solid red; */
  box-sizing: border-box;
  padding: 0 0.3rem;
}
.evaluate_bottom_top {
  height: 0.8rem;
  display: flex;
  align-items: center;
}
.starts {
  margin: 0 0.7rem;
}
.evaluate_bottom_content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.3rem;
}
.evaluate_bottom_content span {
  background: #f5f5f5;
  color: #8c8c8c;
  padding: 0.1rem 0.2rem;
  margin: 0.2rem 0.2rem;
}
.evaluate_bottom_bot {
  margin: 0.1rem 0.5rem;
  color: gray;
}

/* 讲师介绍 */
.tearch_bottom {
  width: 100%;
  margin: 1.7rem 0;
}
.introduce {
  width: 100%;
  height: 60vh;
  background: #fff;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  padding: 0 0.3rem;
}
.introduce_content_intro {
  margin: 0.4rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.introduce_content_intro_left {
  color: gray;
  width: 20%;
}
.introduce_content_intro_right {
  width: 80%;
  color: gray;
}
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
  height: 2.7rem;
  position: relative;
  /* background: #fff; */

  margin: -1.6rem auto;
}
.attentions {
  width: 100%;
  height: 1.5rem;
  background: #fff;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.3rem;
  align-items: center;
  border-radius: 0.1rem 0.1rem 0 0;
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
/* 立即预约 */
.btn {
  width: 100%;
  height: 0.8rem;
  outline: none;
  border: none;
  background: #eb6100;
  color: #fff;
  position: fixed;
  bottom: 0rem;
  font-size: 0.3rem;
}
.imgs {
  width: 100%;
  height: 4rem;
  background: #ffff;
  text-align: center;
  box-sizing: border-box;
  border-top: 1px solid #eee;
}
.imgs > img {
  width: 3.5rem;
  height: 3.5rem;
}
.attention_bottoms {
  width: 100%;
  height: 1.5rem;
  /* border: 1px solid red; */
  background: #fff;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.3rem;
  align-items: center;
  margin: -0.5rem 0;
}
.attention_bottoms span {
  display: inline-block;
  background: #ffe4d3;
  color: #ea7a2f;
  padding: 0.1rem 0.2rem;
  border-radius: 0.35rem;
  font-size: 0.25rem;
}

/* 主讲课程 */
.Boutique_bottom_free {
  width: 100%;
  height: 0.8rem;
  /* border: 1px solid red; */
  margin: 0.6rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
}
.Boutique_bottom_img1 {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.6rem;
}
.Boutique_bottom_img1 p {
  margin: 0 0.3rem;
  color: gray;
}
.Boutique {
  width: 100%;
  /* background: skyblue; */
}
.Boutique_top {
  width: 95%;
  height: 0.5rem;
  /* background: #ffff; */
  line-height: 0.5rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 0.25rem;
  border-left: 4px solid #eb6100;
}
.Boutique_bottom {
  width: 95%;
  margin: 0rem auto;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  overflow: hidden;
}
.Boutique_bottom ul {
  width: 100%;
}
.Boutique_bottom ul li {
  width: 100%;
  height: 4rem;
  background: #fff;
  margin: 0.2rem 0;
  box-sizing: border-box;
  padding: 0 0.25rem;
  overflow: hidden;
}
.Boutique_bottom_top {
  margin: 0.3rem 0;
}
.Boutique_bottom_top p {
  font-size: 0.4rem;
}
</style>