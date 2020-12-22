<template>
    <div class="characteristic_wrap">
        <div class="characteristic_header">
            <span @click="back">
                <img style="width: 0.2rem;height: 0.3rem;"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="">
            </span>
            <span style="display: inline-block;font-size: 0.35rem">
                我的学习
            </span>
            <span>
               <van-icon name="notes-o" size="20px"/>
            </span>

        </div>
<!--  标签栏-->
        <van-tabs title-active-color="orange" color="orange">
            <van-tab v-for="(item,index) in list" :key="index" >
                <template #title>
                   <div style="font-size: 0.3rem">{{item.name}}</div>
                </template>
                <div class="characteristic_content" v-show="index==0">
                    <ul>
                        <li v-for="(item,index) in userList" :key="index" @click="gostudy(item)">
                        <p style="font-size: 0.3rem;margin: 0.3rem 0 0 0">{{item.title}}</p>
                        <span style="display: inline-block;margin: 0.1rem 0;color: gray;font-size: 0.26rem">{{item.start_play_date|moment}} ~ {{item.end_play_date|moment}} | 共{{item.course_type}}课时</span>
                            <div>
                                <p style="width: 26%;height: 0.05rem;background: #eee"></p>
                                <span style="display: inline-block;margin: 0 0.2rem;color: gray">已学习0%</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="characteristic_contents" v-show="index==1">
                    <img src="../../../assets/tsk.png" style="width: 45%;margin: 1.6rem 0 0 0">
                    <p style="color: gray;margin: 0.1rem 0;font-size: 0.3rem">还没有课程，快去选择课程学习吧</p>
                    <button @click="goLession">选择课程</button>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import {characteristic} from "../../../api/api"
    export default {

        data(){
            return{
                list:[],
                userList:[]
            }
        },
        async mounted(){
            var res=await characteristic()

            if(res.data.code==200){
                console.log(res.data.data)
                this.list=res.data.data.typeNum
                this.userList=res.data.data.courseList
            }
        },
        methods:{
            back(){
                window.history.back()
            },
        //  点击跳转
            gostudy(item){
                this.$router.push({
                    path:"/study",
                    query:{
                        val1:item.course_id,
                        type:item.course_type
                    }
                })
            },
        //    跳转特色课
            goLession(){
                this.$router.push({
                    path:"/lessone"
                })
            }
        }
    }
</script>

<style scoped>
    /*面授课*/
    .characteristic_contents{
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .characteristic_contents button{
        background: #EB6100;
        color: white;
        outline: none;
        border: none;
        width: 1.8rem;
        height: 0.6rem;
        font-size: 0.3rem;
        margin: 0.6rem 0;
        border-radius: 0.1rem;
    }
    /*关于特色课*/
    .characteristic_content{
        width: 95%;
        margin: 0 auto;

    }
    .characteristic_content ul{}
    .characteristic_content ul li{
        margin: 0.2rem 0;
        width: 100%;
        height: 2.4rem;
        border: 2px solid #eee;
        border-radius: 0.1rem;
        box-sizing: border-box;
        padding: 0 0.3rem;

    }
    .characteristic_content ul li>div{
        margin: 0.3rem 0;
        display: flex;
        align-items: center;
    }
    .characteristic_header{
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        padding: 0 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>