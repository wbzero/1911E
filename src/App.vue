<template>
  <div id="app">

    <router-view />
<<<<<<< HEAD
    <van-tabbar route active-color="#FEAF7A" v-if="$route.meta.show==true" >
=======
    <van-tabbar route active-color="#FEAF7A" v-if="$route.meta.show==true">
>>>>>>> 78e1040a08a7e7f1025604419c7a8d0787b53c99
      <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item to="/lessone" icon="column">课程</van-tabbar-item>
      <van-tabbar-item to="/course" icon="youzan-shield">约课记录</van-tabbar-item>
      <van-tabbar-item to="/practice" icon="todo-list">练习</van-tabbar-item>
      <van-tabbar-item to="/user" icon="smile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">

</style>
