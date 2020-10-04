 <template>
  <div>
    <div class="index_daohang">
      <!-- 头部 -->
      <van-nav-bar  class="index_toubu">
        <template #title>
         <span style="font-size: 4.8vw;color:#595959;">特色课</span>
        </template>
        <template #right>
          <van-icon name="search" size="23" color="gray" @click="search" />
        </template>
      </van-nav-bar>

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
              <van-button type="default">重置</van-button>
              <van-button class="sure" type="default">确认</van-button>
            </div>
          </div>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item title="排序" v-model="value" :options="option" />
        <!-- 筛选 -->
        <van-dropdown-item title="筛选" ref="item">
          <div class="choose">
            <div class="tmk-item">
              <span>全部</span>
              <span>大班课</span>
              <span>小班课</span>
              <span>公开课</span>
              <span>点播课</span>
              <span>面授课</span>
              <span>音频课</span>
              <span>系统课</span>
              <span>图文课</span>
              <span>会员课</span>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <div class="hezi"></div>

    <div class="neirong">
      <!-- 内容 -->
      <div
        class="index_nrirong"
        v-for="(item, index) in list2"
        :key="index"
        @click="Coursedetail(item.id)"
      >
        <div class="index_nrirong_one">
          <div class="index_neirong_two">
            <div style="font-size: 0.3rem">
              {{ item.title }}
            </div>
            <div>
              <span
                class="iconfont icon-zhongbiao"
                style="font-size: 0.25rem; color: gray"
                >共8课时</span
              >
            </div>
            <br />
            <div class="why">
              <span style="display: flex">
                <span>
                  <img
                    :src="item.img"
                    alt=""
                    style="width: 0.5rem; height: 0.5rem"
                /></span>
                <span
                  style="margin-left: 0.1rem; font-size: 0.25rem; color: gray"
                  >{{ item.name }}</span
                >
              </span>
              <span
                ><img
                  src="http://localhost:8080/img/11.png"
                  alt=""
                  v-show="show"
                  style="width: 1.3rem; height: 1.3rem"
              /></span>
            </div>
          </div>

          <div class="index_neirong_yi">
            <span style="font-size: 0.24rem; color: gray"
              >{{ item.baoming }}人已报名</span
            >
            <span style="font-size: 0.3rem; color: #44a426">{{
              item.jiage
            }}</span>
          </div>
        </div>
      </div>

      <div class="neirong">
        <!-- 内容 -->
        <div
          class="index_nrirong"
          v-for="(item, index) in list3"
          :key="index"
          @click="tiao(item.id)"
        >
          <div class="index_nrirong_one">
            <div class="index_neirong_two">
              <div style="font-size: 0.3rem">
                {{ item.title }}
              </div>
              <div>
                <span
                  class="iconfont icon-zhongbiao"
                  style="font-size: 0.25rem; color: gray"
                  >共8课时</span
                >
              </div>
              <!-- <br /> -->
              <div class="why">
                <span style="display: flex">
                  <span>
                    <img
                      :src="item.img"
                      alt=""
                      style="width: 0.5rem; height: 0.5rem"
                  /></span>
                  <span
                    style="margin-left: 0.1rem; font-size: 0.25rem; color: gray"
                    >{{ item.name }}</span
                  >
                </span>
                <span
                  ><img
                    src="http://localhost:8080/img/11.png"
                    alt=""
                    v-show="show"
                    style="width: 1.3rem; height: 1.3rem"
                /></span>
              </div>
            </div>

            <div class="index_neirong_yi">
              <span style="font-size: 0.24rem; color: gray"
                >{{ item.baoming }}人已报名</span
              >
              <span style="font-size: 0.3rem; color: red">
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                  style="width: 0.24rem; height: 0.24rem"
                  alt=""
                />
                {{ item.jiage }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="hezi1">没有更多内容啦！！！</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      is: 0,
      is1: 0,
      acti: 0,
      list2: [],
      list3: [],
      list: ["初一", "初二", "初三", "高一", "高二"],
      list1: ["语文", "数学", "英语", "物理", "化学"],

      isshow: true,
      value: 0,
      option: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
    };
  },
  mounted() {
    // let list2 = localStorage.list2;
    // if (list2) {
    //   this.list2 = JSON.parse(list2);
    // }
    console.log(this.show);

    axios.get("/data2.json").then((res) => {
      console.log(res.data.data);
      this.list2 = res.data.data;
      this.list3 = res.data.data3;
      // localStorage.list2 =JSON.stringify(this.list2)
    });
  },
  methods: {
    btn(index) {
      this.is = index;
    },
    btn1(index) {
      this.is1 = index;
    },
    search() {
      this.$router.push({
        path: "/search",
      });
    },

    // 精品课程
    Coursedetail(index) {
      console.log(index);
      this.$router.push({
        path: "/Coursedetail",
        query: {
          val1: index,
        },
      });
    },

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
body {
  font-size: 0.3rem;
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
  margin: 0 5.13333vw 1.86667vw 0;
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