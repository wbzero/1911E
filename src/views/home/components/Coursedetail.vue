<template>
  <div class="Course_details">
    <div class="cou_wrap">
      <div class="Course_details_top">
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC"
            style="width: 0.2rem; height: 0.3rem"
            alt=""
            @click="back"
          />
        </span>
        <span style="display: inline-block; font-size: 0.35rem">课程详情</span>
        <span>
          <img
            src="data:image/png;base64,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"
            style="width: 0.3rem; height: 0.3rem"
            @click="share"
          />
        </span>
      </div>
      <div class="Course_details_list">
        <span class="starts">
          <van-icon
            name="star-o"
            @click="collect"
            size="20px"
            @dblclick="collects"
          />
        </span>
        <p>
          {{ list.title }}
        </p>
        <span style="color: #fc5500; font-size: 0.3rem">免费</span>
        <div>共1课时 | 139人已报名</div>
      </div>
      <div class="team">
        <p style="margin: 0.2rem 0; font-size: 0.3rem">教学团队</p>
        <div>
          <img
            :src="list.img"
            style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
            @click="gotearch"
          />
          <p>{{ list.name }}</p>
        </div>
      </div>
      <!-- 课程介绍 -->
      <div class="introduce">
        <p>课程介绍</p>
        <div>自主招生冲刺讲座-1代数式求值1</div>
      </div>
      <div class="introduces">
        <p>课程大纲</p>
        <div>自主招生冲刺讲座-1代数式求值1</div>
      </div>
      <div class="comment">
        <h4>课程评论</h4>
        <ul>
          <li v-for="(item, index) in 5" :key="index">
            <div class="comment_img">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2020bQWSNMNBDq1599198804.jpg"
                style="width: 0.5rem; height: 0.5rem; border-radius: 50%"
              />
            </div>
            <div class="comment_right">
              <div class="comment_right_p">
                <p style="font-size: 0.27rem">188****5186</p>
                <van-rate v-model="value" size="13px" readonly />
                <span style="color: gray">2020-09-03 09:36</span>
              </div>
              <span
                style="
                  display: inline-block;
                  margin: 0.2rem 0.1rem;
                  color: gray;
                "
                >123</span
              >
            </div>
          </li>
        </ul>
      </div>
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
import { Toast } from "vant";
export default {
  mounted() {
    this.$axios.get("http://localhost:8080/data1.json").then((res) => {
      // console.log(res.data.data);
      res.data.data.filter((item) => {
        if (item.id == this.val1) {
          this.list = item;
        }
      });
    });
  },
  data() {
    return {
      value: 5,
      value1: 0,
      tex: "立即报名",
      show: false,
      val1: this.$route.query.val1,
      list: {},
      showList: [],
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    collect() {
      Toast.success("收藏成功");
      this.showList.push(this.list);
      console.log(this.showList);
      localStorage.showList = JSON.stringify(this.showList);
    },
    collects() {
      localStorage.removeItem("showList");
      Toast.success("取消收藏");
    },
    apply() {
      if (this.tex == "立即报名") {
        localStorage.setItem("index", this.val1);
        Toast.success("成功");
        setTimeout(() => {
          this.tex = "立即学习";
        }, 2500);
      } else if (this.tex == "立即学习") {
        this.$router.push("/study");
      }
    },
    share() {
      this.show = true;
    },
    gotearch() {
      this.$router.push("/tearch");
    },
  },
};
</script>

<style scoped>
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
.Course_details_list {
  width: 100%;
  height: 2.5rem;
  /* border: 1px solid red; */
  box-sizing: border-box;
  padding: 0 0.2rem;
  background: #fff;
  overflow: hidden;
  position: relative;
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
}
.team > div {
  margin: 0.2rem 0.35rem;
}
.introduce {
  width: 100%;
  height: 1.5rem;
  /* border: 1px solid red; */
  background: #fff;
  box-sizing: border-box;
  padding: 0 0.2rem;
  overflow: hidden;
  margin: 0.3rem 0;
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
  height: 1.5rem;
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
.introduces > div {
  margin: 0 0.3rem;
}
</style>