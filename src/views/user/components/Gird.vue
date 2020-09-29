<template>
  <div @click="goto">
    <p class="num">{{item.num}}</p>
    <p class="title">{{item.title}}</p>
    <p class="bot">{{item.dispa}}</p>
  </div>
</template>

<script>
export default {
  props:{
    item:Object
  },
  methods:{
    goto(){
      this.$emit("goto")
    }
  }

}
</script>

<style scoped>
.num{
  font-size: 0.5rem;
  color: #EB6100;
}
.title{
  font-size: 0.3rem;
}
.bot{
  color:gray;
}
</style>