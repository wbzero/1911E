<template>
    <div class="tag_wrap">
        <van-nav-bar
                title="修改个人信息"
                left-text="返回"

                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        >
            <template #right>
                <div style="color: #1989FA" @click="queding">
                    保存
                </div>
            </template>
        </van-nav-bar>
<!--选择男女-->
        <van-radio-group v-model="radio">
            <van-cell-group>
                <van-cell title="男" clickable @click="radios('0')">
                    <template #right-icon>
                        <van-radio name="0" />
                    </template>
                </van-cell>
                <van-cell title="女" clickable @click="radios('1')">
                    <template #right-icon>
                        <van-radio name="1" />
                    </template>
                </van-cell>
            </van-cell-group>
        </van-radio-group>

    </div>
</template>

<script>
    import { Toast } from 'vant';
    import {niCheng} from "../../../api/api"
    export default {
        data(){
            return{
                a:0,
                b:1,
                value:this.$route.query.nickname,
                radio:0
            }
        },
        methods: {
            onClickLeft() {
                window.history.back()
            },
            onClickRight() {

            },
            radios(index){

                this.radio=index
                console.log(this.radio)
            },
            queding(){
                let obj={
                    sex:this.radio
                }
                niCheng(obj).then(res=>{

                    if(res.code==200){
                        this.$router.push({
                            path:"/info"
                        })
                    }
                })
            }
        },
    }
</script>

<style scoped>
    .tex{
        width: 100%;
        height: 0.8rem;
        border: none;
        outline: none;
        background: #fff;
        margin: 0.3rem 0;
    }
    .tag_wrap{
        width: 100%;
        height: 100vh;
        background: #F0F2F5;
    }
</style>