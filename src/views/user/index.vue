<template>
    <div class="user_body">
        <div class="bgcolor"></div>
        <div class="main_box">
            <div class="top_title">
                <van-row class="top_title_user" align="center">
                  <van-col span="8"> 
                      <van-image
                      style="margin-left: 1rem;"
                      round
                      width="1rem"
                      height="1rem"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                  </van-col>
                  <van-col span="8">131*********9554</van-col>
                  <van-col span="8" ></van-col>
                </van-row>
                
            <div class="top_title_gird">
                <my-gird class="indexs" v-for="(item,index) in gird"
                 :key="index"
                 :item="item"

                 />
            </div>
            </div>
            <div class="odds">
                <div class="odds_left"><van-icon name="bill-o" /></div>
                <div class="odds_center">
                    <p>邀请好友注册APP,享多重好礼</p>
                    <p>限时特惠，多邀多得</p>
                </div>
                <div class="odds_left"><van-icon name="arrow" /></div>
            </div>
            <div class="courses">
                <div class="course_title">课程相关</div>
                <div class="primary">
                    <van-grid>
                      <van-grid-item icon="friends" text="关注的老师" />
                      <van-grid-item icon="star" text="我的收藏" />
                    </van-grid>
                    
                </div>
            </div>
             <div class="courses">
                <div class="course_title">订单相关</div>
                <div class="primary">
                    <van-grid>
                      <van-grid-item icon="bill" text="课程订单" />
                      <van-grid-item icon="bill" text="会员订单" />
                      <van-grid-item icon="bill" text="约课订单" />
                    </van-grid>
                    
                </div>
            </div>
             <div class="courses">
                <div class="course_title">我的账户</div>
                <div class="primary">
                    <van-grid>
                      <van-grid-item icon="coupon" text="优惠券" />
                      <van-grid-item icon="card" text="学习卡" />
                      <van-grid-item icon="diamond" text="会员" />
                    </van-grid>
                    
                </div>
            </div>
             <div class="courses">
                <div class="course_title">自助服务</div>
                <div class="primary">
                    <van-grid>
                      <van-grid-item icon="friends" text="我的消息" />
                      <van-grid-item icon="star" text="意见反馈" />
                      <van-grid-item icon="star" text="在线服务" />
                      <van-grid-item icon="star" text="设置" />
                    </van-grid>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gird from "./components/Gird"
    export default {
        data() {
            return {
                gird:[
                    {
                      num:0,
                      title:"我的特色课",
                      dispa:"已购特色课程的学习"
                    },
                     {
                      num:0,
                      title:"一对一辅导",
                      dispa:"我的一对一老师辅导"
                    },
                     {
                      num:0.00,
                      title:"剩余学习币",
                      dispa:"查看剩余学习币"
                    }
                ]
            }
        },
        components:{
           "my-gird": gird
        }

    }
</script>

<style scoped lang='scss'>
.user_body{
    width: 100%;
    height: 100%;
    position: relative;
    
  .bgcolor{
      width: 100%;
      height: 5rem;
      background-color: #FC5500;
      border-radius: 40%;
      position: absolute;
      top:-2.5rem;
  }
  .main_box{
      width: 90%;
      height: 90vh;
      position: absolute;
      margin-left: 5%;
      top:1rem;
      .top_title{
          width: 100%;
          height: 3rem;
          background: #fff;
          border-radius:3%;
          .top_title_user{
              width: 100%;
              height: 50%;
              display: inline-flex;
              align-items: center;
          }        
        
    
      .top_title_gird{
          width: 100%;
          height: 50%;
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
        .indexs{
            width: 100%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }  
     }
      }
      .odds{
          width: 100%;
          height: 1rem;
          border-radius: 50px;
          background: #FC5500;
          margin-top: 0.5rem;
          display: inline-flex;
          align-items: center;
          .odds_left{
              width: 20%;
              font-size: 0.6rem;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              color: #fff;
          }
          .odds_center{
              width: 60%;
              height: 100%;
              color: #fff;
              display: inline-flex;
              flex-direction: column;
              justify-content: center;
              align-items: start;
          }
      }
      .courses{
          width: 100%;
          height: 2.5rem;
          margin-top: 0.3rem;
          border-bottom: 0.01rem solid #eee;
          .course_title{
              width: 100%;
              height: 0.7rem;
              display: inline-flex;
              align-items: center;
              box-sizing: border-box;
              padding: 0px 0.1rem;
              font-size: 0.3rem;

          }
          .primary{
              width: 100%;
              height: 1.3rem;

          }
      }
  }
}
</style>