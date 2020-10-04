<template>
    <div>
       <div>
            {{this.$route.query.item}}
       </div>
        <button @click="add">123</button>
    </div>  
</template>

<script>
    export default {
        data(){
            return{
                it:{},
                list2:[]
            }
        },
        mounted(){
            let list2 = localStorage.list2;
        if (list2) {
        this.list2 = JSON.parse(list2);
        }
        },
        methods:{
            add(){
                let it=this.$route.query.item
                console.log(it)

                this.$router.push({
                    path:"/order"
                })
                
            //     this.list2.map(item=>{
            //         if(item.id == this.$route.query.item){
            //             item.boull = true
            //             localStorage.list2 =JSON.stringify(this.list2)
            //         }
            //     })
            //    console.log(1,this.list2)
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>