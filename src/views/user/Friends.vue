<template>
  <div class="box">
    <my-title :title="title" />
    <div>
      <van-empty
        v-if="isShow"
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="暂无关注"
      />
      <div class="battle_array_bottom">
        <ul>
          <li v-for="(item, index) in list" :key="index" @click="tearch">
            <img
              :src="item.img"
              style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
            />
            <div class="battle_array_bottom_right">
              <p style="font-size: 0.3rem">{{ item.name }}</p>
              <p class="titlt">　{{ item.title }}</p>
            </div>
            <div>
              <span class="inr">取消关注</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="div">没有更多了</div>
    </div>
  </div>
</template>

<script>
import title from "./components/Title";
export default {
  data() {
    return {
      title: "我的关注",
      details: true,
      isShow: true,
      list: [
        {
          id: 1,
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          title:
            "每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题",
          name: "杨德胜",
        },
      ],
    };
  },
  mounted() {
    let list = localStorage.userList;
    if (list) {
      this.list = JSON.parse(list);
      this.isShow = false;
    }
    if (this.list != []) {
      this.isShow = false;
    }
  },
  components: {
    "my-title": title,
  },
  methods: {
    tearch() {
      this.$router.push("/tearch");
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
.titlt {
  margin-left: 0.3rem;
  height: 0.6rem;
  line-height: 0.6rem;
  color: gray;
  width: 3.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  width: 60%;
  margin: 0 0.2rem;
}
.battle_array_bottom ul li p {
  color: gray;
}
.inr {
  /* border:0.01rem solid gray; */
  padding: 0.1rem;
  border-radius: 2rem;
  color: #ff944b;
  background-color: #fdefe5;
}
.div {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  color: gray;
}
</style>