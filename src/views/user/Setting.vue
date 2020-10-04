<template>
  <div class="setting_wrap">
      <my-title title="设置" />
      <div class="setting_main">
        <van-cell title="单元格" is-link @click="goto" />

      </div>
  </div>
</template>

<script>
import Title from './components/Title'
export default {
  components:{
    'my-title':Title
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    goto(){
      this.$router.push('/service')
    }
  },
}
</script>

<style scoped>
.setting_wrap{
  width: 100%;
  height: 100vh;
  background-color: #EFF1F4;
}
.setting_main{
  width: 100%;
  height: 3rem;
  margin-top: .2rem;
  background-color: #EFF1F4;
}
</style>