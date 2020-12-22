<template>
  <div class="information_wrap">
    <div class="information_top">
      <img :src="list.thumb_img" style="width: 100%; height: 100%" />
    </div>
    <p
      style="
        margin: 0.2rem 0;
        width: 92%;
        margin: 0.3rem 0 0.2rem 4%;
        font-size: 0.5rem;
      "
    >
      {{list.title}}
    </p>
    <div class="information_con">
      <span>{{list.click_rate}}次预览</span>
      <span>{{Number(list.created_at)|moment}}</span>
    </div>
    <div class="information_text">
        {{list.description}}
    </div>
    <div class="information_bot" v-html="list.content">

    </div>
  </div>
</template>

<script>
import { zixun } from "../../../api/api";
export default {
  data() {
    return {
      val: this.$route.query.val,
      list: {},
    };
  },
  async mounted() {
    var res = await zixun({
      information_id: this.val,
    });
    if (res.code == 200) {
      console.log(res.data);
      this.list = res.data;
    }
  },
};
</script>

<style scoped>
.information_bot{
    width: 92%;
    margin: 1rem auto;
    /* border: 1px solid red; */
}
.information_bot>>>p{
    font-size: 0.4rem !important;
}
.information_top {
  width: 100%;
  height: 4rem;
}
.information_con {
  width: 92%;
  /* height: 1rem; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
}
.information_text{
    width: 75%;
    /* height: 3rem; */
    /* border: 1px solid red; */
    margin: 0.5rem auto 0rem;
    font-size: 0.32rem;
    color: gray;
    text-align: center;
}
</style>