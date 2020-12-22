<template>
    <div class="orderList_wrap">
        <div class="orderList_top">
            <div class="orderList_top_list">
                <img @click="back" style="width:0.2rem;height: 0.3rem;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC" alt="">
                <span style="display: inline-block;color: #fff;font-size: 0.35rem">订单详情</span>
                <span></span>
            </div>
            <p class="order_accomplish">交易完成</p>
        </div>
        <div class="order_content">
            <div class="order_contetn_title">
                {{list.shop_name}}
            </div>
            <div class="order_contetn_top">
               <div>
                   <span>订单编号:</span>
                   <span>{{list.order_number}}</span>
               </div>
                <div>
                    <span>下单时间:</span>
                    <span>{{list.created_at|times}}</span>
                </div>
                <div>
                    <span>支付方式:</span>
                    <span>{{list.pay_type|modeOfPayment}}</span>
                </div>
            </div>
            <div class="order_contetn_bottom">
                <div>
                    <span>商品原价:</span>
                    <span>
                        <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                             style="width: 0.2rem;height: 0.2rem;"> 0
                    </span>
                </div>
                <div>
                    <span>优惠券:</span>
                    <span>
                        - <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                             style="width: 0.2rem;height: 0.2rem;"> 0
                    </span>
                </div>
                <div>
                    <span>实付金额:</span>
                    <span>
                        <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                             style="width: 0.2rem;height: 0.2rem;"> 0
                    </span>
                </div>
            </div>
            </div>
        </div>

</template>

<script>
    import {order, orderListAll} from "../../../api/api";

    export default {
        //过滤我们的支付方式
        filters:{
            modeOfPayment(val){
                if(val==1){
                    return "微信"
                }else if(val==2){
                    return "支付宝"
                }else if(val==3||val==0){
                    return "虚拟币支付"
                }else if(val==4){
                    return "苹果支付"
                }else if(val==5){
                    return "兑换"
                }else if(val==6){
                    return "赠送"
                }else if(val==7){
                    return "优惠券支付"
                }
            },
        },
        data(){
            return{
                list:{}
            }
        },
        mounted() {
            let obj={
                order_id:this.$route.query.id
            }
            orderListAll(obj).then(res=>{
                console.log(res.data)
                this.list=res.data
            })
        },
        methods:{
            back(){
                window.history.back()
            }
        }
    }
</script>

<style scoped>
    .orderList_wrap{
        width: 100%;
        height: 100vh;
        background: #F0F2F5;
    }
    /*订单详情*/
    .order_content{
        width: 95%;
        margin: 0.2rem auto;
        height: 5.2rem;
        background: #fff;
         border-radius: 0.1rem;
        box-sizing: border-box;
        padding: 0.25rem 0.2rem;
    }
    .order_contetn_title{
        width: 100%;
        height: 1.1rem;
        font-size: 0.3rem;
        border-bottom: 1px solid #eee;
    }
.order_contetn_top{
    width: 100%;
    height: 1.9rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    padding: 0.2rem 0;
}
.order_contetn_top div{
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
}
.order_contetn_bottom{
    width: 100%;
    height: 1.9rem;
    /*border-bottom: 1px solid #eee;*/
    box-sizing: border-box;
    padding: 0.2rem 0;
}
.order_contetn_bottom div{
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
}

.orderList_top{
    width: 100%;
    height: 2.3rem;
    background: linear-gradient(#61B1FB,#5187E7);
    box-sizing: border-box;
    padding: 0.15rem 0.3rem;
    text-align: center;
}
.orderList_top_list{
    width: 100%;
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
.orderList_top>div{}
.orderList_top .order_accomplish{
    margin: 0.7rem 0;
    color: #fff;
}

</style>