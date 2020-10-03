<template>
  <div>
      <van-search
  v-model="value"
  show-action
  placeholder="请输入搜索关键词"
>
 <template #left>
   <van-icon name="arrow-left" @click="fanhui" size="0.4rem"/>
  </template>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>




     <div>
         <div class="search_lishi">
             <span style="">历史搜索</span>
             <span><van-icon name="delete" @click="del"/></span>
         </div>

          <div class="search_jilu">
              <van-tag type="primary" v-for="(item,index) in list" :key="index">{{item}}</van-tag>
          </div>
     </div>

<van-empty description="没有更多内容！ "  v-show="show"/>


  </div>
</template>

<script>
export default {
    data(){
        return{
            value:"",
            list:[],
            show:false
        }
    },
    created(){
       let list=localStorage.list
       if(list){
           this.list=JSON.parse(list)
       }
    },
    methods:{
        onSearch(){
            this.list.push(this.value)
            this.value=""
            localStorage.list=JSON.stringify(this.list)
          this.show=true

        },
        fanhui(){
            window.history.back(-1)
            
        },
        del(){
            this.list=[]
            localStorage.list=JSON.stringify(this.list)

        }
    }

}
</script>

<style scoped>
.search_lishi{
    display: flex;
   justify-content: space-between;
    align-items: center;
    font-size: 0.3rem;
    box-sizing: border-box;
    padding: 0.2rem 0.2rem;
}
.search_jilu{
     box-sizing: border-box;
    padding: 0.2rem 0.2rem;
}

</style>