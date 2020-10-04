<template>
  <div>
    <div class="fudao_body">
      <van-nav-bar title="标题" left-arrow>
        <template #title>
          <span style="color: #727272; font-size: 0.45rem">一对一辅导</span>
        </template>
        <template #left>
          <van-icon class="left" name="arrow-left" @click="left" />
        </template>
        <template #right>
          <van-icon name="search" class="right" @click="goSearch" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 选择上课时间 -->
    <div class="select">
      <span class="sele_shijian">
        <van-cell is-link @click="showPopup('w')" style="margin-top: -0.3rem"
          >选择上课时间</van-cell
        >
        <van-popup
          v-model="shows"
          position="bottom"
          :overlay="false"
          :duration="0.001"
          :style="{ height: '87%', width: '100%' }"
        >
          <div style="height: 0.2rem"></div>
          <!-- 日期 -->
          <div class="options_riqi">
            <div style="margin-left: 0.2rem">日期</div>
            <!-- 星期 -->
            <van-row type="flex" justify="space-around" style="margin-left:0.5rem;margin-top:0.2rem;color:#666">
              <van-col span="4">星一</van-col>
              <van-col span="4">星二</van-col>
              <van-col span="4">星三</van-col>
              <van-col span="4">星四</van-col>
              <van-col span="4">星五</van-col>
              <van-col span="4">星六</van-col>
              <van-col span="4">星七</van-col>
            </van-row>
            <!-- 天 -->
            <van-row type="flex" justify="space-around" style="margin-left:0.5rem;margin-top:0.5rem;">
              <van-col span="4"><span style="font-size:0.4rem" class="xing">28</span></van-col>
              <van-col span="4"><span style="font-size:0.4rem" class="xing">29</span></van-col>
              <van-col span="4"><span style="font-size:0.4rem" class="xing">30</span></van-col>
              <van-col span="4"><span style="font-size:0.4rem" class="xing">1 </span></van-col>
              <van-col span="4"><span style="font-size:0.4rem" class="xing">2 </span></van-col>
              <van-col span="4"><span style="font-size:0.4rem" class="xing">3 </span></van-col>
              <van-col span="4"><span style="font-size:0.4rem" class="xing">4 </span></van-col>
            </van-row>
            <van-row type="flex" justify="space-around" style="margin-left:0.5rem;margin-top:0.5rem">
              <van-col span="4"><span style="font-size:0.4rem">5</span></van-col>
              <van-col span="4"><span style="font-size:0.4rem">6</span></van-col>
              <van-col span="4"><span style="font-size:0.4rem">7</span></van-col>
              <van-col span="4"><span style="font-size:0.4rem">8</span></van-col>
              <van-col span="4"><span style="font-size:0.4rem">9</span></van-col>
              <van-col span="4"><span style="font-size:0.4rem">10</span></van-col>
              <van-col span="4"><span style="font-size:0.4rem">11</span></van-col>
            </van-row>
          </div>
          <!-- 时段 -->
          <div class="option_time">
            <div>时段</div>
            <div class="option_times">
              <span class="time_button" @click="start">开始时间</span>
              <span style="margin-top: 0.2rem">-</span>
              <span class="time_button" @click="start">00:00</span>
            </div>
            <!-- 选项过滤器 -->
            <van-datetime-picker
              v-show="picker"
              v-model="currentTime"
              type="time"
              :filter="filter"
              style="z-index: 111"
              @confirm="confirm"
              @cancel="cancel"
              item-height="35"
            />
          </div>

          <!-- 重置 -->
          <div class="reset_yes">
            <span class="chong_zhi" @click="reset">重置</span>
            <span class="que_ding" @click="queding">确定</span>
          </div>
        </van-popup>
      </span>
      <!-- 选择老师条件 -->
      <span class="sele_shijian">
        <van-cell
          is-link
          @click="showPopup('w1')"
          style="margin-top: -0.3rem"
          :closeable="true"
          >选择老师条件</van-cell
        >
        <div>
          <van-popup
            v-model="showss"
            position="bottom"
            :overlay="false"
            :duration="0.001"
            :style="{ height: '87%', width: '100%' }"
          >
            <!-- 选择老师条件 内容 -->
            <div class="teacher_lao">
              <!-- 老师类型 -->
              <div style="padding-top: 0.4rem; padding-left: 0.3rem">
                老师类型
              </div>
              <ul class="lao_ul">
                <li>M1</li>
                <li>M2</li>
                <li>M3</li>
                <li>M4</li>
              </ul>
              <ul class="lao_ul">
                <li>M5</li>
                <li>M6</li>
                <li>M7</li>
                <li>M8</li>
              </ul>
              <ul class="lao_ul">
                <li>M9</li>
                <li>M10</li>
                <li>M11</li>
                <li>M12</li>
              </ul>
              <ul class="lao_ul">
                <li>M13</li>
                <li>M14</li>
                <li>M15</li>
                <li>M16</li>
              </ul>
              <!-- 只看 -->
              <div
                style="
                  border-top: 1px solid rgb(221, 220, 220);
                  margin-top: 0.3rem;
                  padding-top: 0.4rem;
                  padding-left: 0.3rem;
                "
              >
                只看
              </div>
              <div class="zhi_kan">
                <span> <input type="checkbox" class="inp" />已关注 </span>
                <span> <input type="checkbox" class="inp" />上过课 </span>
              </div>
              <!-- 性别 -->
              <div
                style="
                  border-top: 1px solid rgb(221, 220, 220);
                  margin-top: 0.3rem;
                  padding-top: 0.4rem;
                  padding-left: 0.3rem;
                "
              >
                性别
              </div>
              <div class="xing_bie">
                <span>男</span>
                <span>女</span>
              </div>
              <!-- 年级 -->
              <div
                style="
                  border-top: 1px solid rgb(221, 220, 220);
                  margin-top: 0.3rem;
                  padding-top: 0.4rem;
                  padding-left: 0.3rem;
                "
              >
                年级
              </div>
              <ul class="nian_ji">
                <li>小学一年级</li>
                <li>小学二年级</li>
                <li>小学三年级</li>
                <li>小学四年级</li>
              </ul>
              <ul class="nian_ji">
                <li>小学五年级</li>
                <li>小学六年级</li>
                <li>初一</li>
                <li>初二</li>
              </ul>
              <ul class="nian_ji">
                <li>初三</li>
                <li>高一</li>
                <li>高二</li>
                <li>高三</li>
              </ul>
              <!-- 学科 -->
              <div
                style="
                  border-top: 1px solid rgb(221, 220, 220);
                  margin-top: 0.3rem;
                  padding-top: 0.4rem;
                  padding-left: 0.3rem;
                "
              >
                年级
              </div>
              <ul class="xue_ke">
                <li>语文</li>
                <li>数学</li>
                <li>英语</li>
                <li>物理</li>
              </ul>
              <ul class="xue_ke">
                <li>化学</li>
                <li>生物</li>
                <li>信息技术</li>
                <li></li>
              </ul>
              <!-- 重置 -->
            </div>
            <div class="reset_yes">
              <span class="chong_zhi" @click="reset">重置</span>
              <span class="que_ding" @click="queding">确定</span>
            </div>
          </van-popup>
        </div>
      </span>
    </div>
    <!-- 老师名单 -->
    <div class="teachers">
      <div style="height: 0.02rem"></div>
      <div class="teacher_s" v-for="i in 10" :key="i" v-show="show">
        <div class="tearch_img">
          <div class="img_img"></div>
          <div class="img_content">
            <div>名字</div>
            <div style="color: #b7b7b7; font-size: 10px">男 10年教龄</div>
          </div>
        </div>
        <div class="yu_yue" @click="goAppointment">预约</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      shows: false,
      showss: false,
      showww: false,
      picker: false,
      isac: "3",
      isactiv: "m1",
      showw: "",
      value1: 0,
      value2: "a",
      option1: [{ text: "全部商品", value: 0 }],
      option2: [{ text: "默认排序", value: "a" }],
      currentTime: "00:00",
    };
  },
  methods: {
    goAppointment() {
      console.log("dfgn");
      this.$router.push("/appointment");
    },
    left() {
      window.history.back();
    },
    goSearch() {
      this.$router.push("/search");
    },
    showPopup(hh) {
      if (hh == "w") {
        this.shows = !this.shows;
      } else if (hh == "w1") {
        this.showss = !this.showss;
      }
    },
    // showPopup1() {
    //   console.log(222)
    //   this.showss = !this.showss;
    // },
    tian(index) {
      this.isac = index;
    },
    teach(index) {
      console.log(111);
      this.isactiv = index;
    },
    filter(type, options) {
      if (type === "minute") {
        return options.filter((option) => option % 5 === 0);
      }
      return options;
    },
    start() {
      this.picker = !this.picker;
    },
    confirm() {
      this.picker = !this.picker;
    },
    cancel() {
      this.picker = !this.picker;
    },
    reset() {
      this.shows = false;
      this.showss = false;
    },
    queding() {
      this.shows = false;
      this.showss = false;
    },
  },
};
</script>

<style scoped>
.van-dropdown-menu {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0.9rem;
}
.fudao_body {
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 111;
}
.left {
  color: #727272;
  font-size: 0.5rem;
}
.right {
  color: #727272;
  font-size: 0.5rem;
}
.select {
  margin-top: 1rem;
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.3rem 0.6rem;
  color: #969696;
  font-size: 0.3rem;
}
.teachers {
  width: 100%;
  background: #f0f2f5;
}
.teacher_s {
  width: 95%;
  height: 13vh;
  background: #fff;
  border-radius: 0.15rem;
  margin: 0.2rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.5rem 0.3rem;
  z-index: 111;
}
.yu_yue {
  width: 1.2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #eb6e17;
  background: #ebeefe;
  border-radius: 0.3rem;
  font-size: 0.25rem;
  z-index: 1;
}
.tearch_img {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.img_img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #e4e3e3;
  margin-top: -0.1rem;
}
.img_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.van-popup {
  width: 100%;
  height: 100%;
  z-index: 111;
  background: #f0f2f5;
}
.options_riqi {
  width: 95%;
  height: 24vh;
  margin-left: 0.2rem;
  padding-top: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
}
.riqi_xing {
  list-style: none;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.25rem 0.6rem;
  font-size: 0.3rem;
  color: rgb(94, 92, 92);
}
/* .van-row{
  width: 90%;
  height: 3vh;
  border:1px;
} */
.xing:hover{
  display: block;
  width: 0.65rem;
  height: 0.65rem;
  line-height: 0.65rem;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  clear:both;
  background: orange;
}
.riqi_tian {
  /* list-style: none;
  display: flex;
  justify-content: space-around; */
  width: 94%;
  margin-left: 0.1rem;
  color: #222;
  z-index: 111;
}
.riqi_tian li {
  font-size: 0.4rem;
}
.riqi_tian1 {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 104%;
  margin-left: -0.05rem;
  color: #222;
  z-index: 111;
}
.riqi_tian1 li {
  font-size: 0.4rem;
}
.ac {
  width: 0.22rem;
  height: 0.2rem;
  padding-top: 0.18rem;
  padding-bottom: 0.18rem;
  padding-left: 0.2rem;
  padding-right: 0.3rem;
  border-radius: 50%;
  background: orange;
  text-align: center !important;
  line-height: 0.2rem;
  color: #fff;
  z-index: 1111;
}
.options_shiduan {
  width: 95%;
  height: 15vh;
  margin-left: 0.2rem;
  padding-top: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: -5rem;
}
.option_time {
  width: 95%;
  height: 13vh;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.2rem;
  border-radius: 0.1rem;
  margin-top: 0.2rem;
  background: #fff;
}
.option_times {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.2rem 0.3rem;
}
.time_button {
  width: 2rem;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  border: 1px solid #999;
  border-radius: 0.1rem;
  color: #222;
}
.van_tan_btn {
  background: #f5f5f5;
}
.reset_yes {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  background: #fff;
}
.chong_zhi {
  width: 50%;
  color: #eb6e17;
  text-align: center;
  line-height: 6vh;
  font-size: 0.3rem;
}
.que_ding {
  width: 50%;
  color: #fff;
  background: #eb6e17;
  text-align: center;
  line-height: 6vh;
  font-size: 0.3rem;
}
.teacher_lao {
  width: 100%;
  height: 120vh;
  /* border:1px solid red; */
  background: #fff;
}
.lao_ul {
  width: 95%;
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.lao_ul li {
  width: 1.2rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background: #f5f5f5;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  color: rgb(124, 123, 123);
  font-size: 0.3rem;
}
.lao_ul li:hover {
  color: orange;
  background: #ebeefe;
}
.zhi_kan {
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
}
.zhi_kan span {
  font-size: 0.3rem;
}
.inp {
  color: rgb(197, 191, 191);
  margin-right: 0.1rem;
}
.xing_bie {
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
}
.xing_bie span {
  width: 1.2rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background: #f5f5f5;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  color: rgb(124, 123, 123);
  font-size: 0.3rem;
}
.xing_bie span:hover {
  color: orange;
  background: #ebeefe;
}
.nian_ji {
  width: 95%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  z-index: 111;
}
.nian_ji li {
  width: 1.4rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background: #f5f5f5;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  color: rgb(124, 123, 123);
  font-size: 0.26rem;
}
.nian_ji li:hover {
  color: orange;
  background: #ebeefe;
}
.xue_ke {
  width: 95%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  z-index: 111;
}
.xue_ke li {
  width: 1.4rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background: #f5f5f5;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  color: rgb(124, 123, 123);
  font-size: 0.26rem;
}
.xue_ke li:hover {
  color: orange;
  background: #ebeefe;
}
/* .activ {
  color: orange;
  background: #ebeefe;
} */
</style>