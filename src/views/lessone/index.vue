 <template>
  <div class="lessone_wrap">
    <div class="index_daohang">
      <div class="nav_top">
        <div class="searchs"><van-icon name="search" size="12" /></div>
        <input type="text" id="tex" placeholder="搜索课程" @click="search" />
      </div>

      <!-- 筛选导航 -->

      <van-dropdown-menu>
        <!-- 分类 -->
        <van-dropdown-item title="分类">
          <div class="parent-box">
            <div class="tm-kind">
              <p>年级</p>
              <div class="tmk-item tmk_item2">
                <span
                  v-for="(item, index) in list"
                  :key="index"
                  @click="btn(index)"
                  :class="{ zhi: is == index }"
                  >{{ item }}</span
                >
              </div>
            </div>
            <div class="tm-kind">
              <p>学科</p>
              <div class="tmk-item tmk_item1">
                <span
                  v-for="(item, index) in list1"
                  :key="index"
                  @click="btn1(index)"
                  :class="{ zhi1: is1 == index }"
                  >{{ item }}</span
                >
              </div>
            </div>
            <div class="seach-btn">
              <van-button type="default" @click="chong">重置</van-button>
              <van-button class="sure" type="default" @click="chong"
                >确认</van-button
              >
            </div>
          </div>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item
          title="排序"
          v-model="value"
          :options="option"
          @change="sorts(value)"
        />
        <!-- 筛选 -->
        <van-dropdown-item title="筛选" ref="item" v-show="isShows">
          <div class="choose">
            <div class="tmk-item">
              <span
                v-for="(item, index) in arrs"
                :key="index"
                @click="screen(item.id)"
                >{{ item.name }}</span
              >
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <div class="content_text">
      <ul>
        <li
          v-for="(item, index) in userList"
          :key="index"
          @click="goCoursedetail(item)"
        >
          <img
            :src="item.cover_img"
            alt=""
            style="
              width: 2rem;
              height: 1.2rem;
              margin: 0 0.2rem 0 0rem;
              border-radius: 0.2rem;
            "
          />
          <div class="content_div">
            <p style="font-size: 0.3rem">{{ item.title }}</p>
            <div>
              <span style="color: gray">{{ item.has_buy }}万+人已报名</span>
              <span
                style="color: green; font-size: 0.3rem"
                v-if="item.price == 0"
                >{{ item.price | prices }}</span
              >
              <span style="color: red; font-size: 0.3rem" v-else>{{
                item.price | prices
              }}</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="bottom_div">没有更多了</div>
    </div>
  </div>
</template>

<script>
import { curriculum, shuaixuan } from "../../api/api";
import axios from "axios";
export default {
  // 免费
  filters: {
    prices(val) {
      if (val == 0) {
        return "免费";
      } else {
        return "1";
      }
    },
  },
  // Coursedetail
  data() {
    return {
      show: false,
      color: "green",
      is: 0,
      is1: 0,
      acti: 0,
      isShows: true,
      showList: [],
      userList: [],
      colors: "red",
      list: ["初一", "初二", "初三", "高一", "高二"],
      list1: ["语文", "数学", "英语", "物理", "化学"],
      value: "",
      arrs: [],
      isshow: true,
      value: "",
      option: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
    };
  },
  async mounted() {
    var res = await curriculum({
      page: 1,
      limit: 10,
    });
    if (res.data.code == 200) {
      this.showList = res.data.data.list;
      this.userList = res.data.data.list;
      console.log(res.data.data.list);
    }
    // 筛选
    var shai = await shuaixuan();
    if (shai.data.code == 200) {
      console.log(shai.data.data.appCourseType);
      this.arrs = shai.data.data.appCourseType;
    }
  },
  methods: {
    // 点击重置确认
    chong() {
      var obj = {
        page: 1,
        limit: 10,
      };
      curriculum(obj).then((res) => {
        this.showList = res.data.data.list;
        this.userList = res.data.data.list;
      });
    },
    // 点击跳转详情
    goCoursedetail(item) {
      this.$router.push({
        path: "/Coursedetail",
        query: {
          val1: item.id,
          has_buy: item.has_buy,
          course_type:item.course_type
        },
      });
    },
    sorts(index) {
      var obj = {
        page: 1,
        limit: 10,
        course_type: 0,
        order_by: index,
        is_vip: 0,
      };
      curriculum(obj).then((res) => {
        console.log(res.data.data.list);
        this.userList = [];
        this.userList = res.data.data.list;
      });
    },
    // 筛选
    screen(index) {
      var obj = {
        page: 1,
        limit: 10,
        course_type: index,
        is_vip: 0,
      };
      this.isshows = false;
      curriculum(obj).then((res) => {
        console.log(res.data.data.list);
        this.userList = [];
        this.userList = res.data.data.list;
      });
      console.log(index);
    },
    btn(index) {
      this.is = index;
    },
    btn1(index) {
      this.is1 = index;
    },
    search() {
      this.$router.push({
        path: "/searchs",
      });
    },

    // // 精品课程
    // Coursedetail(index) {
    //   console.log(index);
    //   this.$router.push({
    //     path: "/Coursedetail",
    //     query: {
    //       val1: index,
    //       course_type:item.course_type,
    //     },
    //   });
    // },

    tiao(item) {
      this.$router.push({
        path: "/login",
        query: {
          item,
        },
      });
    },
  },
};
</script>

<style scoped >
.bottom_div {
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  color: gray;
}
.content_div {
  width: 70%;
}
.content_div > div {
  display: flex;
  justify-content: space-between;
}
/* 中间内容部分 */
.content_text {
  width: 92%;
  margin: 2.3rem auto;
}
.content_text ul {
  width: 100%;
}
.content_text ul li {
  width: 100%;
  height: 1.7rem;
  /* border: 1px solid red; */
  display: flex;
  box-sizing: border-box;
  padding: 0 0.2rem;
  background: #fff;
  margin: 0.25rem 0;
  align-items: center;
  border-radius: 0.2rem;
}
.content_text ul li p {
  margin: 0 0 0.55rem 0;
}
.nav_top {
  width: 100%;
  height: 1rem;
  margin: 0rem auto;
  position: relative;
  background: white;
  z-index: 3000;
}
.searchs {
  position: absolute;
  left: 2.8rem;
  top: 0.225rem;
}
#tex {
  width: 95%;
  margin: 0 2.5%;
  height: 0.7rem;
  border: 1px solid gray;
  border-radius: 0.3rem;
}
#tex::placeholder {
  text-align: center;
}
body {
  font-size: 0.3rem;
}
.lessone_wrap {
  width: 100%;
  height: 90vh;
  overflow: scroll;
  background: #f7f8fa;
}
.tmk-item span:hover {
  color: red;
}

.zhi {
  color: red !important;
}
.zhi1 {
  color: red !important;
}
.neirong {
  width: 100%;
  height: 100%;
}
.index_toubu {
  border-bottom: 0.01rem solid #eee;
}

.index_nrirong {
  width: 100%;

  background: #f0f2f5;
  box-sizing: border-box;
  padding: 0.3rem 0.3rem;
  overflow: scroll;
}
.index_nrirong_one {
  width: 100%;
  height: 3.79rem;
  background: #fff;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0.23rem 0.24rem;
  border-radius: 0.1rem;
}
.index_fenlei {
  font-size: 0.3rem;
}
.inex_fenlei_one {
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
}

.inex_fenlei_one span {
  width: 1rem;
  height: 0.3rem;
  background: gray;
  margin-left: 0.2rem;
}
.index_neirong_two {
  font-size: 0.3rem;
  border-bottom: 0.01rem solid #eee;
}
p {
  display: flex;
}
img {
  width: 0.4rem;
  height: 0.4rem;
}
.index_neirong_yi {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.index_daohang {
  width: 100%;
  position: fixed;
}
.hezi {
  width: 100%;
  height: 2rem;
  background: #fff;
}
.hezi1 {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.26rem;
  color: gray;
}
.parent-box {
  width: 100%;
  padding-left: 4vw;
  padding-bottom: 2vw;
}
.tm-kind {
  padding-bottom: 2.6vw;
  border-radius: 1px solid #f1f1f1;
}
.tm-kind p {
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-weight: 400;
  color: #595959;
}
.tmk-item span {
  margin: 0.2rem 5.13333vw 1.86667vw 0;
  display: inline-block;
  width: 18.4vw;
  height: 8.8vw;
  background: #f5f5f5;
  border-radius: 0.8vw;
  font-size: 3.46667vw;
  font-weight: 400;
  color: #646464;
  text-align: center;
  line-height: 8.8vw;
  overflow: hidden;
}
.seach-btn {
  padding: 4vw 0;
  display: flex;
  justify-content: space-around;
}
.seach-btn button {
  width: 45vw;
  height: 8.8vw;
  border-radius: 1vw;
  font-size: 3.4vw;
}
.seach-btn .sure {
  background-color: #eb6100;
  color: #fff;
}
.choose {
  padding-left: 4vw;
}
.why {
  width: 100%;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
}
</style>