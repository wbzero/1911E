<template>
  <div class="setting_wrap">
      <div class="setting_top">
        <div>
          <van-icon name="arrow-left" @click="back" size="22" />
        </div>
        <div>
          设置
        </div>
        <div></div>
      </div>
      <div>
        
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    back(){
      this.$router.go(-1)
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
.setting_top{
  width: 100%;
  background-color: #fff;
  font-size: .18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>