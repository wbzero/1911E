<template>
    <div>
        <van-popup v-model="show" :overlay="false" position="bottom">
            <div class="first_popup">
                <div class="top">
                    <div>给我们留言</div>
                    <div>
                        <van-icon name="arrow-down" size="20" @click="back" />
                    </div>
                </div>
                <div class="main">
                    您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题
                </div>
                <div>
                    <p style="margin:.1rem 0rem;box-sizing:border-box;padding-left:.3rem;font-size:.16rem;">手机</p>
                    <van-field type="tel" placeholder="请输入" />
                    <p style="margin:.1rem 0rem;box-sizing:border-box;padding-left:.3rem;font-size:.16rem;">留言内容<span
                            style="color:red;">*</span></p>
                    <van-field rows="3" autosize type="textarea" placeholder="请输入" />
                    <p style="margin:.3rem 0rem;box-sizing:border-box;padding:0rem .3rem;font-size:.16rem;">
                        <van-button type="primary" size="normal" style="background:#187AFB">提交</van-button>
                    </p>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    export default {
        props:{
            show:{
                type:Boolean,
                required:true
            }
        },
        methods: {
            back(){
                this.$emit('back')
            }
        },
    }
</script>

<style scoped lang='scss'>

</style>