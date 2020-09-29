<template>
  <div>
<van-nav-bar title="课程详情"  left-arrow class="kecheng">
  <template #right>
    <van-icon name="scan" @click="showPopup" size="0.4rem" color="gray"/>
  </template>
   <template #left>
    <van-icon name="arrow-left" @click="left" size="0.35rem" color="gray"/>
  </template>
</van-nav-bar>
<van-popup v-model="show"> <img src="http://localhost:8080/img/1.png" alt=""></van-popup>
        <div class="courses_one">
          <div class="courses_xiang">
         <div class="courses_xiang_one">
           <span>李老师16号到22号地理大学大课堂开课啦</span>
           <span><van-icon name="star-o" /></span>
         </div>
         <br>
         <div style="color:#EC680B">免费</div><br>
         <div>共8课时|119人已报名</div><br>
         <div>开课时间：2020.03.16 18：30-2020.03.22 15：00</div>
       </div>


        <div class="couses_jiaoxue">
           <div class="couses_jiaoxue_one">
            <p>教学团队</p>
                 <div>
                   <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
                   <div>李青</div>
                 </div>
            </div>
        </div>
    </div>


         <div class="jieshao" >课程介绍</div>

         <div class="courses_dagang">
           <div class="courses_dagang_one">课程大纲</div>
             <div class="couses_huifang"  v-for="i in 10" :key="i">
                <div style="margin-left:0.4rem" class="courses_two"  @click="pinglun">
                   <span style="font-size:0.4rem;color:#EB6100">·</span>
                   <span><van-tag type="warning">回放</van-tag></span>
                   <span>第一讲第一课时</span>
                 </div>
     
                 <div class="courses_liqing" style="margin-left:0.7rem">
                   <span>李青</span>
                   <span>03月16日 18:30-19:30</span>
                 </div>
             </div>
         </div>

         

          <div class="courses_dagang">
           <div class="courses_dagang_one">课程评论</div>
             <div class="couses_huifang"  v-for="i in 10" :key="i">
                <div style="margin-left:0.4rem" class="courses_two" >
                   <span style="font-size:0.3rem;color:#EB6100">
                     <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20206kRSVtmcMX1589444592.jpg" @click="jiangshi" alt="">
                   </span>
                   <span style="font-size:0.24rem">15910732068</span>
                   <span style="font-size:0.3rem">⭐⭐⭐⭐⭐</span>
                   <span style="font-size:0.24rem">2020-04-23 14：36</span>
                 </div>
     
                 <div class="courses_liqing" style="margin-left:0.7rem">
                   <span>好</span>
                 </div>
             </div>
         </div>


         



<div style="height: 1rem;"></div>

    <van-goods-action>
      <div class="courses_baoming" @click="baoming" v-show="isshow==true">立即报名</div>
    </van-goods-action>
     <!-- <van-goods-action>
      <div class="courses_baoming" @click="xuexi" v-show="isshow==false">立即学习</div>
    </van-goods-action> -->

  </div>
</template>

<script>
export default {
  data(){
    return{
      show: false,
      isshow:true

    }
  },
  methods:{
    left(){
      window.history.back(-1)
    },
    showPopup() {
      this.show = true;
    },
    baoming(){
       this.$toast.success('报名成功')
    //  if(this.isshow==true){
    //     this.$toast.success('报名成功')
    //     this.isshow==false
    //  }else if(this.isshow==false){
    //     this.$toast.success('报名成功')


    //  }
    },
    xuexi(){
      this.$toast.success('报名成功');
      this.isshow=true
    },

    pinglun(){
      this.$toast.success('视频未生成');
    },
    jiangshi(){
      this.$router.push({
        path:"/Lecturer"
      })
    }

  }

}
</script>

<style scoped>
img{
  width: 3.5rem;
  height: 3.5rem;
}
.courses_xiang{
  width: 100%;
  height: 3.3rem;
  font-size: 0.31rem;
  background: #fff;
   box-sizing: border-box;
  padding: 0.2rem 0.2rem ;
  border-bottom: 0.2rem solid #F0F2F5;
}
.courses_xiang_one{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.courses_one{
  width: 100%;
  background: #F0F2F5;
  box-sizing: border-box;
  padding: 0.2rem 0rem ;
  

  
}
.courses_baoming{
  width: 100%;
  height: 1.2rem;
  background: #EB6100;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.4rem;
}
.couses_jiaoxue{
  width: 100%;
  height: 2.7rem;
  font-size: 0.3rem;
  background: #fff;
  box-sizing: border-box;
  padding: 0.2rem;
 
}

.couses_jiaoxue img{
  width: 1rem;
  height: 1rem;
}
.kecheng{
  width: 100%;
  border-bottom:0.01rem solid #eee ;
  box-sizing: border-box;
  padding: 0.2rem;

}
.jieshao{
  width: 100%;
  height: 1.5rem;
  box-sizing: border-box;
  padding: 0.2rem 0.2rem;
  border-bottom: 0.2rem solid #F0F2F5;
  
  font-size: 0.3rem;
}
.courses_dagang{
  width: 100%;
  /* height: 1rem; */
  font-size: 0.3rem;
  border-bottom: 0.2rem solid #F0F2F5;


}
.courses_dagang_one{
  width: 100%;

  box-sizing: border-box;
  padding: 0.2rem 0.2rem;
  /* border-bottom: 0.2rem solid #F0F2F5; */
}

.courses_liqing{
  font-size: 0.24rem;
  color: gray;

}
.courses_liqing span{
  margin-left: 0.2rem;
}
.courses_two span{
  margin-left: 0.1rem;
}
.courses_two img{
  width: 0.3rem;
  height: 0.3rem;
}
.couses_huifang{
  width: 100%;
  height: 1rem;
}
</style>