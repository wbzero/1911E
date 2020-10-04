<template>
  <div>
    <van-nav-bar
      title="题库选择"
      left-arrow
      size="24"
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <van-search v-model="value" placeholder="请输入题库名称关键词" />
      <el-row class="tac">
              <el-col :span="6">
                  <el-menu
          default-active="0"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
                      <el-menu-item index="0" @click="go('/item7_1')">
                          <span slot="title">求导题库</span>
                        </el-menu-item
          >
                      <el-menu-item index="1" @click="go('/item7_2')">
                          <span slot="title">极限题库</span>
                        </el-menu-item
          >
                      <el-menu-item index="2" @click="go('/item7_3')">
                          <span slot="title">生物</span>
                        </el-menu-item
          >
                      <el-menu-item index="3" @click="go('/item7_4')">
                          <span slot="title">化学</span>
                        </el-menu-item
          >
                      <el-menu-item index="4" @click="go('/item7_5')">
                          <span slot="title">数学</span>
                        </el-menu-item
          >
                      <el-menu-item index="5" @click="go('/item7_6')">
                          <span slot="title">物理</span>
                        </el-menu-item
          >
                      <el-menu-item index="5" @click="go('/item7_7')">
                          <span slot="title">英语</span>
                        </el-menu-item
          >
                    </el-menu
        >

                </el-col
      >
              <el-col :span="18"><router-view /> </el-col>       </el-row
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      value:''
    };
  },
  // mounted() {
  //   this.$axios.get("http://localhost:8080/data.json").then((res) => {
  //     console.log(res.data);
  //     this.list = res.data;
  //   });
  // },
  methods: {
    go(str) {
      console.log(str);
      this.$router.push({
        path: str,
      });
    },
    handleOpen(key, keyPath) {
      console.log(111);
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(222);
      console.log(key, keyPath);
      this.index = key;
    },
    onClickLeft(){
      this.$router.push({
        path:'/practice'
      })
    }
  },
};
</script>

<style scoped>
</style>