<template>
  <div id="app">
    <router-view v-if="$route.meta.show==true" />
    <van-tabbar route active-color="#FEAF7A" >
      <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item to="/lessone" icon="column">课程</van-tabbar-item>
      <van-tabbar-item to="/course" icon="youzan-shield">约课记录</van-tabbar-item>
      <van-tabbar-item to="/practice" icon="todo-list">练习</van-tabbar-item>
      <van-tabbar-item to="/user" icon="smile">我的</van-tabbar-item>
    </van-tabbar>
    <div @mousedown="move"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      positionX:0,
      positionY:0
    }
  },
  methods:{
        move(e){
            let odiv = e.target;        //获取目标元素
            
            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = (e)=>{       //鼠标按下并移动的事件
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;    
                let top = e.clientY - disY;
                
                //绑定元素位置到positionX和positionY上面
                this.positionX = top;
                this.positionY = left;
                
                //移动当前元素
                odiv.style.left = left + 'px';
                odiv.style.top = top + 'px';
            };
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }    
    
    },
}
</script>

<style lang="scss">
</style>
