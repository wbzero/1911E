<template>
  <div id="app">

    
    <van-tabbar route active-color="#FEAF7A" v-if="$route.meta.show==true">
      <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item to="/lessone" icon="column">课程</van-tabbar-item>
      <van-tabbar-item to="/course" icon="youzan-shield">约课记录</van-tabbar-item>
      <van-tabbar-item to="/practice" icon="todo-list">练习</van-tabbar-item>
      <van-tabbar-item to="/user" icon="smile">我的</van-tabbar-item>
    </van-tabbar>

    <router-view  />
  </div>
</template>

<style lang="scss">

</style>
