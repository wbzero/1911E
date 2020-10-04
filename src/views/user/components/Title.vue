<template>
  <div class="title-box">
      <div><van-icon name="arrow-left" @click="back"/></div>
      <div>{{title}}</div>
      <div><span v-show="details">余额明细</span> </div>
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        details:Boolean,
    },
    methods:{
        back(){
            window.history.back()
        }
    }

}
</script>

<style scoped>
.title-box{
    width: 100%;
    height: 1rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0rem 0.5rem;
    background-color: #fff;
    
}
.title-box div{
   font-size: 0.3rem;
}
</style>
