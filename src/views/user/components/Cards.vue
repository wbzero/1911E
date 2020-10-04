<template>
  <div class="cards-box">
      <div class="title">
          <span class="title-left">订单编号：</span>
          <span class="title-center">2020092815005980400</span>
          <span style="color:#EE9355;">交易完成</span>
      </div>
      <div class="main">
        <div style="height:0.4rem;margin-top:0.1rem;">李老师16号地理大课堂开课啦</div>
        <div style="color:gray;height:0.3rem;margin-top:0.1rem;">时间：2020.09.28 15:00</div>
        <div style="color:gray;height:0.3rem;margin-top:0.1rem;">实付款:<span style="font-size:0.3rem;color:#000; font-weight: 800;">0</span> </div>
        <div style="margin-top:0.4rem;float: right;"><span class="btu">加入学习</span></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cards-box{
    width: 98%;
    height: 3.5rem;
    background: #fff;
    border-radius: 0.1rem;
    margin-left: 2%;
    box-sizing: border-box;
    padding: 0.2rem;
    margin-top: 0.3rem;
   
}
.title{
    width: 100%;
    height: 0.6rem;
    border-bottom: 0.01rem solid #eee;
    display: inline-flex;
    align-items: center;
    
}
.title-left{
    width: 19%;
}
.title-center{
    width: 65%;
}
.btu{
    padding: 0.2rem;
    border: 0.01rem solid #FFAE01;
    color:#FFAE01;
    border-radius: 1rem;
}
</style>