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
        <div class="attentions">
          <div class="attention_left">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
              style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
            />
            <div class="attention_left_div">
              <div class="attention_left_h">
                <h3>杨德胜</h3>
                <p style="color: rgba(246, 195, 161)">M20</p>
              </div>
              <span style="color: gray">男 30年教龄</span>
            </div>
          </div>
          <div class="attention_right">
            <button>关注</button>
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
          <van-tab title="讲师介绍">
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
          <van-tab title="主讲课程"> </van-tab>
          <van-tab title="学员评价">
            <div class="imgs">
              <img src="../../../assets/pinglun.png" alt="" />
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <button class="btn">立即预约</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    // 点击返回
    back() {
      window.history.back();
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
  width: 100%;
  height: 2.7rem;
  position: relative;
  background: #fff;

  margin: -1.5rem auto;
}
.attentions {
  width: 100%;
  height: 1.5rem;
  background: #fff;

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
  height: 0.8rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.3rem;
  align-items: center;
}
.attention_bottoms span{
  display: inline-block;
  background: #FFE4D3;
  color: #EA7A2F;
  padding: 0.1rem 0.2rem;
  border-radius: 0.35rem;
  font-size: 0.25rem;

}
</style>