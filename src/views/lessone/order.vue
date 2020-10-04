<template>
  <div>
    <van-nav-bar style="border-bottom:0.01rem solid #eee;height: 11.73333vw;">
       <template #left>
           <van-icon name="arrow-left" @click="fanhui" class="fanhui"/>
       </template> 
            <template #title>
              <span style="font-size: 4.8vw;color: #595959;">确认订单</span>
            </template> 
    </van-nav-bar>



    <div class="dingdan">
         <div class="dingdan_qw">
             <div class="dingdan_one">
                <p>初中重点几何知识点——第九讲： 用描点法 <span style="color:gray;">1.00</span></p>
                <p>画出二次函数y＝－x^2的图象</p>
                <p style="font-size:0.24rem;color:gray">授课老师：马学斌</p>
             </div>
         </div>

        <div class="dingdan_as">
             <div class="dingdan_two">
             <div>优惠券</div>
             <div style="color:gray">无可用</div>
         </div>

        </div>

         <div class="dingdan_therr">
             <p>
                 <span class="jiage">商品价格</span>
                 <span>
                     <span><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" style="width:0.24rem;height:0.24rem" alt=""></span>
                     <span style="color:gray;margin-left:0.1rem">1.00</span>
                 </span>
             </p>

             <p>
                 <span class="jiage">优惠券金额</span>
                 <span>
                    <span><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" style="width:0.24rem;height:0.24rem" alt=""></span>
                    <span style="color:gray;margin-left:0.1rem">0</span>
                 </span>
             </p>


             <p>
                 <span class="jiage">合计</span>
                 <span>
                     <span><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" style="width:0.24rem;height:0.24rem" alt=""></span>
                     <span style="color:red;margin-left:0.1rem">1.00</span>
                 </span>
             </p>

         </div>
    </div>







     

      <div class="price_btn" >
        <div class="price_btn_one">
              <span style="font-size:0.24rem;color:gray;margin-left:0.6rem">实付价格</span>
              <span> <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" style="width:0.24rem;height:0.24rem" alt=""></span>
              <span style="font-size:0.5rem;color:red">1.00</span>
       </div>
          <div class="pi_price">
              <div style="font-size:0.38rem;" @click="dingdan">提交订单</div>
             
          </div>
      </div>





  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        fanhui(){
            window.history.back(-1)
        },
        dingdan(){
            this.$dialog.confirm({
              title: '提示',
              message: '很抱歉，学习的余额不足，无法完成支付',
          })
          .then(() => {
            this.$router.push({
                path:"/currency"
            })
            
          })
        }
    }
};
</script>

<style scoped>
.fanhui{
    font-size:0.4rem;
    color:gray

}
.dingdan{
    height: 85vh;
    width: 100%;
    background: #F0F2F5;
}
.dingdan_qw{
     box-sizing: border-box;
    padding: 0.2rem 0.2rem;

}
.dingdan_as{
      box-sizing: border-box;
    padding: 0.3rem 0rem;

}
.dingdan_one{
    width: 100%;
    height: 2.5rem;
    background: #fff;
    font-size: 0.27rem;
    border-radius:0.1rem ;
    box-sizing: border-box;
    padding: 0.1rem 0.2rem;
}
.dingdan_two{
    width: 100%;
    height: 1rem;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.2rem 0.2rem;
    background: #fff;

}
.dingdan_therr{
     width: 100%;
    height: 2.3rem;
    background: #fff;
    box-sizing: border-box;
    padding: 0.2rem 0.2rem;
    font-size: 0.3rem;
    

}
.dingdan_therr p{
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.jiage{
    color: gray;
    font-size: 0.24rem;

}


.price_btn{
     display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15vw;
    background: #fff;
    border-top:0.01rem solid #eee;
    box-sizing: border-box;
}
.pi_price{
    width: 30%;
    height: 15vw;
    background:#EB6100;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.price_btn_one{
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.3rem;
}
.price_btn_one span{
 margin-left: 0.1rem;
}
</style>