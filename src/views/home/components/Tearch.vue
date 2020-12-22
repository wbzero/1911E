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
          <span style="color: #fff; font-size: 0.4rem">讲师详情</span>
          <span></span>
        </div>
      </div>
      <div class="attention">
        <div class="attention_left">
          <img
            :src="tearch.avatar"
            style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
          />
          <div class="attention_left_div">
            <div class="attention_left_h">
              <p style="font-size: 0.3rem">{{tearch.real_name }}</p>
              <p style="color: rgba(246, 195, 161); margin: 0 0.1rem">M20</p>
            </div>
            <span style="color: gray; display: inline-block; margin: 0.1rem 0"
              >男 30年教龄</span
            >
          </div>
        </div>
        <div class="attention_right">
          <button @click="attention">{{ tex }}</button>
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
                    　{{tearch.introduction}}
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
                  <li
                    v-for="(item, index) in tearchList"
                    :key="index"
                    @click="Coursedetail(item.id)"
                  >
                    <div class="Boutique_bottom_top">
                      <p style="font-size: 0.31rem">
                        {{ item.title }}
                      </p>

                      <span
                        style="
                          color: gray;
                          display: inline-block;
                          margin: 0.1rem 0;
                        "
                        >共一课时</span
                      >
                    </div>

                    <div class="Boutique_bottom_img1">
                      <img
                        :src="item.cover_img"
                        alt=""
                        style="
                          width: 0.6rem;
                          height: 0.6rem;
                          border-radius: 50%;
                        "
                      />
                      <p>{{ item.name }}</p>
                    </div>
                    <div class="Boutique_bottom_free">
                      <span style="color: gray; font-size: 0.3rem"
                        >{{ item.sales_num }}人已报名</span
                      >
                      <span style="color: green; font-size: 0.3rem">{{
                        item.price | prices
                      }}</span>
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
            <div class="imgs">
              <img src="../../../assets/pinglun.png" alt="" />
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
import { getAppIndex, tearch, kecheng } from "../../../api/api";
export default {
  // 过滤
  filters: {
    prices(val) {
      var str = "";
      if (val == 0) {
        str = "免费";
      } else {
        str = 1;
      }
      return str;
    },
  },
  data() {
    return {
      active: 0,
      tex: "关注",
      list: {},
      userList: [],
      val: this.$route.query.val,
      userList: [],
      tearchList: [],
      tearch:{}
    };
  },
  created() {
    this.$axios.get("http://localhost:8080/data1.json").then((res) => {
      // console.log(res.data.data);
      this.userList = res.data.data;
    });
  },

  async mounted() {
    var res = await getAppIndex();

    res.data.data[4].list.filter((item) => {
      if (item.teacher_id == this.val) {
        this.list = item;
      }
    });

    // 老师介绍
    var te = await tearch(this.val);
 
      console.log(te.data.data.teacher);
      this.tearch=te.data.data.teacher
    
    // 主讲课程
    var zhu = await kecheng();
    if (zhu.code == 200) {
      zhu.data.list.filter((item) => {
        if (item.teachers_list[0].teacher_name == this.tearch.real_name) {
          this.tearchList.push(item);
  
        }
      });
    }
  },
  methods: {
    // 点击返回
    back() {
      window.history.back();
    },
    Coursedetail(index) {
      this.$router.push({
        path: "/Coursedetail",
        query: {
          val1: index,
        },
      });
    },
    attention() {
      if (this.tex == "关注") {
        Toast.success("已关注");
        this.userList.push(this.list);
        localStorage.userList = JSON.stringify(this.userList);
        setTimeout(() => {
          this.tex = "已关注";
        }, 2500);
      } else if (this.tex == "已关注") {
        Toast.success("已取消");
        localStorage.removeItem("userList");
        setTimeout(() => {
          this.tex = "关注";
        }, 2500);
      }
    },
    appointment() {
      this.$router.push("/appointment");
    },
  },
};
</script>

<style scoped>
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
  font-size: 0.3rem;
}
.introduce_content_intro_right {
  width: 80%;
  color: gray;
  font-size: 0.3rem
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
  height: 2rem;
  background: #fff;
  position: relative;
  margin: -1.6rem auto;
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
  width: 1.3rem;
  height: 0.6rem;
  background: #ebeefe;
  border-radius: 0.35rem;
  color: rgb(253, 175, 123);
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
/* 主讲课程 */
.Boutique_bottom_free {
  width: 100%;
  height: 0.8rem;
  /* border: 1px solid red; */
  margin: 0.8rem 0;
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