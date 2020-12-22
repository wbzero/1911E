<template>
    <div class="tag_wrap">
        <van-nav-bar
                title="标题"
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

        <input type="text" v-model="value" class="tex" placeholder="最多可以输入15个字符" maxlength="15">
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import {niCheng} from "../../../api/api"
    export default {
        data(){
            return{
                    value:this.$route.query.nickname
            }
        },
        methods: {
            onClickLeft() {
                window.history.back()
            },
            onClickRight() {
                Toast('按钮');
            },
            queding(){
                let obj={
                    nickname:this.value
                }
                niCheng(obj).then(res=>{


                        this.$router.push({
                            path:"/info"
                        })

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