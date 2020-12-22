<template>
    <div>
        <van-nav-bar
                title="修改个人信息"
                left-text="返回"

                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        >
            <template #right>
                <div style="color: #1989FA" >
                    保存
                </div>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
    import  {grade} from "../../../api/api"
    export default {
       async mounted() {
            var res=await grade()
           console.log(res)
        },
        data(){
            return{

            }
        },
        methods:{
            onClickLeft() {
                window.history.back()
            },
            onClickRight() {

            },
        }
    }
</script>

<style scoped>

</style>