<template>
  <div class="box_wrap">
    <!-- 明星讲师 -->
    <div class="mingxing" v-if="dataType == 3">
      <ul>
        <li
          v-for="(item, index) in dataList"
          :key="index"
          @click="tearch(item.teacher_id)"
        >
          <img
            :src="item.teacher_avatar"
            alt=""
            style="width: 0.7rem; height: 0.7rem; border-radius: 50%"
          />
          <div style="margin: 0 0.2rem">
            <p>{{ item.teacher_name }}</p>
            <span
              style="color: gray; display: inline-block; margin: 0.1rem 0"
              >{{ item.introduction }}</span
            >
          </div>
        </li>
      </ul>
    </div>
    <!-- 精品课程 -->
    <div class="course" v-if="dataType == 1">
      <ul>
        <li
          v-for="(item, index) in dataList"
          :key="index"
          @click="Coursedetail(item)"
        >
          <img
            :src="item.cover_img"
            alt=""
            style="width: 30%; height: 1.2rem; margin: 0 0.2rem 0 0.2rem"
          />
          <div class="course_right">
            <p style="height: 0.8rem; line-height: 0.8rem">{{ item.title }}</p>
            <div style="margin: 0.4rem 0">
              <span style="color: gray">{{ item.sales_num }}人已报名</span>
              <span style="display: inline-block; color: green" v-if="item.price==0">{{
                item.price | prices
              }}</span>
              <span style="display: inline-block; color: red" v-else>{{
                item.price | prices
              }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 热门资讯 -->
    <div class="zixun" v-if="dataType == 6">
      <ul>
        <li
          v-for="(item, index) in dataList"
          :key="index"
          @click="information(item.id)"
        >
          <img
            :src="item.thumb_img"
            alt=""
            style="width: 30%; height: 1.2rem; margin: 0 0.2rem 0 0.2rem"
          />
          <div class="zixun_right">
            <p style="height: 0.8rem; line-height: 0.8rem">{{ item.title }}</p>
            <span
              style="
                display: inline-block;
                width: 200px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              {{ item.description }}
            </span>
            <div style="margin: 0.2rem 0">
              <span style="color: gray">{{ item.click_rate }}</span>
              <span style="color: gray">{{
                Number(item.created_at) | moment
              }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 推荐课程 -->
    <!-- <div class="kecheng" v-if="dataType==1">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">
          <img
            :src="item.cover_img"
            alt=""
            style="width: 30%; height: 1.5rem"
          />
          <div class="course_right">
            <p style="height: 0.8rem; line-height: 0.8rem">{{item.title}}</p>
            <div style="margin: 0.4rem 0">
              <span>{{item.sales_num}}已报名</span>
              <span>{{item.price}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div> -->
    <!-- 名师阵容 -->
    <!-- <div class="zhenrong">
      <ul>
        <li>
          <img
            :src="item.teacher_avatar"
            alt=""
            style="width: 0.7rem; height: 0.7rem"
          />
          <div style="margin: 0 0.2rem">
            <p>{{item.teacher_name}}</p>
            <span>{{item.introduction}}</span>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    // 讲师详情
    tearch(index) {
      this.$emit("tearch", index);
    },
    Coursedetail(item) {
      this.$emit("Coursedetail", item);
    },
    // 资讯
    information(index) {
      this.$emit("information", index);
    },
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
  props: {
    dataList: {
      type: Array,
    },
    dataType: {
      type: Number,
    },
  },
  mounted() {},
};
</script>

<style scoped>
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