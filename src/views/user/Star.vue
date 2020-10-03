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
              <h3>{{item.name}}</h3>
              <p
                style="
                  color: gray;
                  width: 250px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                "
              >　{{item.title}} </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import title from "./components/Title";
export default {
  data() {
    return {
      title: "我的收藏",
      details: true,
      isShow: true,
      list: [],
    };
  },
  mounted() {
    let list = localStorage.showList;
    if (list) {
      this.list = JSON.parse(list);
      this.isShow = false;
    }
  },
  components: {
    "my-title": title,
  },
  methods: {
    tearch() {
      this.$router.push("/tearch")
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
</style>