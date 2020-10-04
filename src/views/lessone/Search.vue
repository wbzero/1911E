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
    <div @click="onSearch" v-if="isshow">搜索</div>
    <div @click="fanhui" v-else style="color:#eee">取消</div>
  </template>
</van-search>




     <div>
         <div class="search_lishi">
             <span style="">历史搜索</span>
             <span><van-icon name="delete" @click="del" color="#eee"/></span>
         </div>

          <div class="search_jilu">
              <van-tag plain type="primary" round  text-color="#000" v-for="(item,index) in list" :key="index">{{item}}</van-tag>
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
            show:false,
            isshow:false
        }
    },
    created(){
       let list=localStorage.list
       if(list){
           this.list=JSON.parse(list)
       }
    },
    watch:{
        value(a){
            console.log(a)
            if(a.length==0){
                this.isshow = false
            }else{
                this.isshow = true
            }
        }
    },
    methods:{
        onSearch(){
            this.list.push(this.value)
            this.value=""
            if(this.value!=""){
                console.log(111)
            }else{
                console.log(222)
            }
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