<template>
  <div class="box">
    <my-title :title="title" />
    <div>
      <van-empty
        v-if="this.showList.length == 0"
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="暂无关注"
      />
    </div>
    <!--  -->
    <div class="course">
      <ul>
        <li
          v-for="(item, index) in showList"
          :key="index"
          @click="Coursedetail(item)"
        >
          <img
            :src="item.teachersAvatar"
            alt=""
            style="width: 30%; height: 1.2rem; margin: 0 0.2rem 0 0.2rem"
          />
          <div class="course_right">
            <p style="height: 0.8rem; line-height: 0.8rem">{{ item.title }}</p>
            <div style="margin: 0.4rem 0">
              <span style="color: gray">{{ item.sales_num }}人已报名</span>
              <span style="display: inline-block; color: green">{{
                item.price | prices
              }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dataTypes from "../home/components/IndexItem";
import title from "./components/Title";
import { shoucangs } from "../../api/api";
export default {
  components: {
    dataTypes,
  },
  filters: {
    prices(val) {
      let str = "";
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
      title: "我的收藏",
      details: true,
      isShow: true,
      list: [],
      showList: [],
    };
  },
  async mounted() {
    var obj = {
      page: 1,
      limit: 10,
      type: 1,
    };
    var res = await shoucangs(obj);

    if (res.data.code == 200) {
      console.log(res.data.data.list);
      this.showList = res.data.data.list;
    }
  },
  components: {
    "my-title": title,
  },
  methods: {
    tearch() {
      this.$router.push("/tearch");
    },
    Coursedetail(item) {
      console.log(item);
      this.$router.push({
        path: "/Coursedetail",
        query: {
          val1: item.course_id,
          course_type: item.course_type,
        },
      });
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
.battle_array_bottom {
  width: 95%;
  margin: 0.3rem auto;
}
.battle_array_bottom ul {
  width: 100%;
}
.battle_array_bottom ul li {
  width: 100%;
  height: 1.5rem;
  background: #fff;
  margin: 0.2rem 0;
  display: flex;

  align-items: center;
  box-sizing: border-box;
  padding: 0 0.3rem;
}
.battle_array_bottom_right {
  margin: 0 0.2rem;
}
.battle_array_bottom ul li p {
  color: gray;
}
/* 名师阵容 */
.zhenrong {
  width: 95%;
  margin: 0 auto;
}
.zhenrong ul li {
  width: 100%;
  height: 1.5rem;
  display: flex;
  box-sizing: border-box;
  padding: 0 0 0 0.3rem;
  background: #fff;
  align-items: center;
  margin: 0.2rem 0;
}
/* 明星讲师 */
.mingxing {
  width: 95%;
  margin: 0 auto;
}
.mingxing ul li {
  width: 100%;
  height: 1.5rem;
  display: flex;
  box-sizing: border-box;
  padding: 0 0 0 0.3rem;
  background: #fff;
  align-items: center;
  margin: 0.2rem 0;
}
/* 热门资讯 */
.zixun {
  width: 95%;
  margin: 0 auto;
}
.zixun ul li {
  width: 100%;
  height: 1.7rem;
  background: #fff;
  display: flex;
  margin: 0.2rem 0;
  align-items: center;
}
.zixun_right {
  width: 70%;
  height: 100%;
}
.zixun_right div {
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem 0 0;
  align-items: center;
  height: 0.2rem;
}
/* 课程 */
.kecheng {
  width: 95%;
  margin: 0 auto;
}
.kecheng ul li {
  width: 100%;
  height: 1.7rem;
  background: #fff;
  display: flex;
  margin: 0.2rem 0;
  align-items: center;
}
.kecheng_right {
  width: 70%;
  height: 100%;
}
.kecheng_right div {
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem 0 0;
  align-items: center;
  height: 1rem;
}

.course {
  width: 95%;
  margin: 0 auto;
}
.course ul li {
  width: 100%;
  height: 1.7rem;
  background: #fff;
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
}
.course_right {
  width: 70%;
  height: 100%;
}
.course_right > div {
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem 0 0;
  align-items: center;
}
</style>