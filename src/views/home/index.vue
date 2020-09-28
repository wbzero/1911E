<template>
  <div class="home_wrap">
    <!-- 头部轮播 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :show-indicators="false"
    >
      <van-swipe-item>
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg"
          style="width: 100%; height: 100%"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg"
          alt=""
          style="width: 100%; height: 100%"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg"
          alt=""
          style="width: 100%; height: 100%"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg"
          alt=""
          style="width: 100%; height: 100%"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 特色课、一对于辅导、学习日历 -->
    <div class="characteristic">
      <ul>
        <li @click="cousers">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAFZUlEQVRoQ+1bW2xUVRRd68xMeZPaFESeBkuLhkekk6IfxDEEMQqUmWGMwcQPE5FEo9GYGONP/TIh8UH88BsNwTDObR0CGsUImGDAGVEQIn1JIBYqBSwtr5m5Z5tbaDLYoXPb28d8nPs1ybl7n7PXXWedk8leRN6zfv3pSr/f9wypN4uwlhAheJKQvVnNfblc2fkLFy72ptPBbH5cqf0OhcQ/ZcqJaWVl02dRsmtJrtPQywmQwG+AfJG1M98mk0s7+9dO50dDg6jjx5vrofE2qFYC4htYnPQC6gREpwl1BD5/KpF48DRAKQ0ghNFoexVsvVKAWlCCAJYDmDZwfbQBSYPqo2XLHoo3NFD3AbEp3FKvIZ8CmFesKBE4hfcQuASgTSi7/f7pTfH4AxeLxY7G+MaNV8qV6opSEBVIjQgqSU4FRBWbTwSdCmproqmqibG1Jyv05EBCgFCxwHuNk8hCuF+RO5Dhz7dU9koyWXMNoB5uzsJxomKxi5Ntu7tcCR63oV8g1NOATPAwz8GcrTczGm2Lira/BOD3kOxOaN82+UegjwE4qrRKZcVOJ5OLO7zk3rCh/X6lsisUVJ1QgnSoD84CpI/RHp8ciJcZibRaEB32mGxAuAhyJLodYEB1REQn/P7Md/H4koybuUKhH/0VFfNDgH4eIo8BmCki95EcgQ/2/xWovYyEW/4GZLabxXl/hx0UvHnmXHfjvU6eWEx8OtuyUYhtABZ6n9NNBl5gJNx8tbCyukkwrHe6QLXFsqoaC0WHw+1riNxOADOGlX14Qb0OI256FJuhT00esqxFTxQGonk/gdVDT+op4ta4AEHiWsKqnlpo6ZFwcw+AgmOeSh00mOMFBHXCWlTg0gZEIy22SPE7wMiCYoDoP/YNI24jYRhhGHG3xhhGGEYYRhQ8d83WMFvDbA2zNQa7lBuNMBphNMJohNEIF39dGLE0YmnE0oilEUsjli4QMGJpxNKIpRFLF1JhbpZGLI1YGrE0YmnE0gUC+WI55j1UIEuuUaTHaSY7BeBh9+h5f7MEgWhmJNKyGyIx7+W5zzAYEJFws9OtOxKNpO4XBCQZibRththOO9+YPSXHCGIrY+va5tsB+zCAOWOFRCkBIYIOZfMphkJ/Tawoz34G4kUARTvaRwKsUgHCcRoQ2JHT+vXbNoX69lVa5XaNFStKBQgAl0GELav6UB8QfQ3g5XNfA+XjkfjixXKUChCK8l7X5Y5tBw48mbtLnaPh5u0CbAEwsVgxXsZL4NS4CeJzy6p+pb+Ou4CIxQ5PyuUq3yL4BiCj1hQ+zoz4F4IPc1pvTyYXO+3Ofc+A89oBQzIzH9VKPgBk1Wic6eMEhGOqOQLiHZ9v0i/x+Lwb+ay+58XF8U3YduuzFHlVgKUQTAc5yY1Xqti2GQsg7pwI10H2CORPQH9y9mzNvnSaBR2Krm5wkcipBSKBOooESdQKuAKQ8uGyZRSBcL56twC/UyRFqKOiJGVZ1e1FP06xF/LHa2tTgTlzJlQEAhNna40QgSggdQACQ8kDoNdqrC5gQwSGaVPIkvhVNCz6yr6/caP3fGfnzUtD8ae6YsRgRcZirVW2Lc9BY5NAHLvkNBKDue4cw+QPVlP1mkJ5I+HT3wBcOzjbJCPCq1ToANhIqp2JxMJWLx5Uz0D0F+O4b2eUn1liq1wQIkEI60A8MsAdRLQqW1766uuanwoBEY22BSF6l4hU5Y87ZjkQfxBMQUuKwqNqwq2Tbs1yxRg7YkDkT+ScPJnMzMoyxQU29DpA6gHMFeCYz+d7v6vr7EHnElN4caLC4ZbVhLwL0HH1ngO4F0BSa7ZrPfnSnj2zrxcrbKjj/wFPducAYoibwgAAAABJRU5ErkJggg=="
            style="width: 0.5rem; height: 0.5rem"
            alt=""
          />
          <p>特色课</p>
        </li>
        <li @click="oto">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg=="
            alt=""
            style="width: 0.5rem; height: 0.5rem"
          />
          <p>一对一辅导</p>
        </li>
        <li @click="StudyCalendar">
          <img
            src="data:image/png;base64,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"
            alt=""
            style="width: 0.5rem; height: 0.5rem"
          />
          <p>学习日历</p>
        </li>
      </ul>
    </div>
    <!-- 名师阵容 -->
    <div class="battle_array">
      <div class="battle_array_top">名师阵容</div>
      <div class="battle_array_bottom">
        <ul>
          <li v-for="(item, index) in 3" :key="index" @click="tearch">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
              alt=""
              style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
            />
            <div class="battle_array_bottom_right">
              <h3>杨德胜</h3>
              <p
                style="
                  color: gray;
                  width: 250px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                "
              >
                　杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
                　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 精品课程 -->
    <div class="Boutique">
      <div class="Boutique_top">精品课程</div>
      <div class="Boutique_bottom">
        <ul>
          <li v-for="(item, index) in 7" :key="index" @click="Coursedetail">
            <div class="Boutique_bottom_top">
              <p>每时每课特级教师-自主招生冲刺讲座-1代数式求值1</p>

              <span style="color: gray">共一课时</span>
            </div>

            <div class="Boutique_bottom_img1">
              <img
                src="../../assets/logo.png"
                alt=""
                style="width: 0.5rem; height: 0.5rem"
              />
              <p>杨德胜</p>
            </div>
            <div class="Boutique_bottom_free">
              <span style="color: gray; font-size: 0.3rem">100人已报名</span>
              <span style="color: green; font-size: 0.3rem">免费</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 推荐课程 -->
    <div class="Boutiques">
      <div class="Boutique_tops">推荐课程</div>
      <div class="Boutique_bottoms">
        <ul>
          <li v-for="(item, index) in 7" :key="index" @click="Coursedetail">
            <div class="Boutique_bottom_tops">
              <p>每时每课特级教师-自主招生冲刺讲座-1代数式求值1</p>

              <span style="color: gray">共一课时</span>
            </div>

            <div class="Boutique_bottom_img1s">
              <img
                src="../../assets/logo.png"
                alt=""
                style="width: 0.5rem; height: 0.5rem"
              />
              <p>杨德胜</p>
            </div>
            <div class="Boutique_bottom_frees">
              <span style="color: gray; font-size: 0.3rem">100人已报名</span>
              <span style="color: green; font-size: 0.3rem">免费</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 明星讲座 -->
    <div class="dramatic_decline">
      <div class="dramatic_decline_top">明星讲师</div>
      <div class="dramatic_decline_bottom">
        <ul>
          <li v-for="(item, index) in 7" :key="index" @click="Lecturer">
            <img
              src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
              alt=""
              style="width: 0.7rem; height: 0.7rem"
            />
            <div class="battle_array_bottom_right">
              <div class="battle_array_bottom_right_div">
                <h3>杨德胜</h3>
                <span style="color: #ed8c4c; margin: 0 0.2rem">m10</span>
              </div>

              <p
                style="
                  margin: 0.1rem 0;
                  color: gray;
                  width: 250px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                "
              >
                中学一级教师，16年教学经验。学校骨干教师，有丰富的教学经验及毕业班经验。擅长阅读写作教学，针对中考题型有独到的答题技巧和系统的作文教学。
                6年网课教学经验，课中能很好的跟学生沟通互动，把握学生上课情况。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cousers() {
      this.$router.push("/cousers");
    },
    StudyCalendar() {
      this.$router.push("/StudyCalendar");
    },
    oto() {
      this.$router.push("/Oto");
    },
    // 讲师详情
    tearch(){
        this.$router.push("/tearch")
    },
    // 精品课程
    Coursedetail(){
        this.$router.push("/Coursedetail")
    },
    Lecturer(){
        this.$router.push("/Lecturer")
    }
  },
};
</script>

<style scoped >
/* 明星讲师 */
.dramatic_decline {
  width: 100%;
}
.dramatic_decline_top {
  width: 95%;
  height: 0.5rem;
  /* background: #ffff; */
  line-height: 0.5rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 0.25rem;
  border-left: 4px solid #eb6100;
}
.dramatic_decline_bottom ul {
  width: 100%;
}
.dramatic_decline_bottom ul li {
  width: 100%;
  height: 1.7rem;
  background: #fff;
  margin: 0.2rem 0;
  display: flex;

  align-items: center;
  box-sizing: border-box;
  padding: 0 0.3rem;
}
.battle_array_bottom_right_div {
  display: flex;
  align-items: center;
}
.home_wrap {
  width: 100%;
  height: 90vh;
  background: #f0f2f5;
  overflow: scroll;
}
/* .wrap_box{
    width: 100%;
    
    
} */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 4.3rem;
  text-align: center;
  /* #F0F2F5 */
}
.characteristic {
  width: 100%;
  height: 2rem;
  /* border: 1px solid red; */
  box-sizing: border-box;
  position: relative;
  top: -0.5rem;
}
.characteristic ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.characteristic ul li {
  width: 2rem;
  height: 2rem;
  background: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
}
.characteristic ul li p {
  margin: 0.2rem 0;
  color: gray;
}
.battle_array {
  width: 100%;
}
.battle_array_top {
  width: 95%;
  height: 0.5rem;
  /* background: #ffff; */
  line-height: 0.5rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 0.25rem;
  border-left: 4px solid #eb6100;
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
.Boutique_bottom_free {
  width: 100%;
  height: 0.8rem;
  /* border: 1px solid red; */
  margin: 0.4rem 0;
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
  margin: 0.3rem auto;
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

/* 推荐课程 */
.Boutique_bottom_frees {
  width: 100%;
  height: 0.8rem;
  /* border: 1px solid red; */
  margin: 0.4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
}
.Boutique_bottom_img1s {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.6rem;
}
.Boutique_bottom_img1s p {
  margin: 0 0.3rem;
  color: gray;
}
.Boutiques {
  width: 100%;
  /* background: skyblue; */
}
.Boutique_tops {
  width: 95%;
  height: 0.5rem;
  /* background: #ffff; */
  line-height: 0.5rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 0.25rem;
  border-left: 4px solid #eb6100;
}
.Boutique_bottoms {
  width: 95%;
  margin: 0.3rem auto;
  overflow: hidden;
}
.Boutique_bottoms ul {
  width: 100%;
}
.Boutique_bottoms ul li {
  width: 100%;
  height: 4rem;
  background: #fff;
  margin: 0.2rem 0;
  box-sizing: border-box;
  padding: 0 0.25rem;
  overflow: hidden;
}
.Boutique_bottom_tops {
  margin: 0.3rem 0;
}
.Boutique_bottom_tops p {
  font-size: 0.4rem;
}
</style>