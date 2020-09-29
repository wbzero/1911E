<template>
  <div>
    <div class="fudao_body">
      <van-nav-bar title="标题" left-arrow>
        <template #title>
          <span style="color: #727272; font-size: 22px">一对一辅导</span>
        </template>
        <template #left>
          <van-icon class="left" name="arrow-left" />
        </template>
        <template #right>
          <van-icon name="search" class="right" />
        </template>
      </van-nav-bar>
    </div>
    <!--  -->
    <div class="select">
        <span>选择上课时间</span>
        <span>选择老师条件</span>
    </div>
    <!-- 老师名单 -->
    <div class="teachers">
        <div style="height:3px"></div>
        <div class="teacher_s" v-for="i in 10" :key="i" @click="goAppointment">
            <div class="tearch_img">
                <div class="img_img"></div>
                <div class="img_content">
                    <div>名字</div>
                    <div style="color:#B7B7B7;font-size:10px">男 10年教龄</div>
                </div>
            </div>
            <div class="yu_yue">预约</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fudao_body{
    width: 100%;
    position: fixed;
    top: 0;
    background: #fff;
}
.left {
  color: #727272;
  font-size: 25px;
}
.right {
  color: #727272;
  font-size: 25px;
}
.select{
    margin-top: 41px;
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 40px;
    color: #969696;
    font-size: 16px;
}
.teachers{
    width: 100%;
    background: #F0F2F5;
}
.teacher_s{
    width: 95%;
    height: 13vh;
    background: #fff;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 25px 10px;
}
.yu_yue{
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #EB6E17;
    background: #EBEEFE;
    border-radius: 20px;
    font-size: 13px;
}
.tearch_img{
    width: 40%;
    display: flex;
    justify-content: space-between;
}
.img_img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #c4c3c3;
    margin-top: -5px;
}
.img_content{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>