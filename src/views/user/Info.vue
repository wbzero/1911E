<template>
  <div class="box">

    <my-title :title="title" />
    <div>
      <van-cell is-link border @click="show = true">
        <template #default>
          <span>头像</span>
          <van-image
            style="margin-left: 80%"
            round

            width="0.6rem"
            height="0.6rem"
            :src="list.avatar"
          />
        </template>
      </van-cell>
      <van-cell
        title="昵称"
        is-link
        :value="list.nickname"
        @click="goTag(list.nickname)"
      >
      </van-cell>
      <!--  手机号-->
      <van-cell title="手机号" is-link :value="list.mobile" />
      <!-- 性别-->
      <van-cell title="性别" is-link :value="sex" @click="goSex(list.sex)" />
      <!-- 出生日期-->
      <van-cell title="出生日期" is-link :value="datas" @click="show1 = true" />
      <!-- 所在城市-->
      <van-cell title="所在城市" is-link :value="cityInfos" @click="chengShi"/>
      <!-- 学科-->
      <van-cell title="学科" is-link value="请选择" @click="gosubject"/>
      <!--  年级-->
      <van-cell title="年级" is-link value="请选择" />
    </div>
    <!--弹出层 头像-->
    <van-popup v-model="show" position="bottom" :style="{ height: '26%' }">
      <div class="uploading">
        <van-uploader :after-read="afterRead">
          <p style="font-size: 0.35rem">拍照</p>
        </van-uploader>
      </div>
      <div class="uploading">
        <van-uploader :after-read="afterRead">
          <p style="font-size: 0.35rem">从手机相册选择</p>
        </van-uploader>
      </div>
      <div class="uploading" @click="cancel_button">
        <p style="font-size: 0.35rem">取消</p>
      </div>
    </van-popup>
    <!-- 弹出层2 日期·-->
    <van-popup v-model="show1" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirms"
      />
    </van-popup>
    <!-- 地址 -->
    <van-popup v-model="show2" position="bottom" :style="{ height: '40%' }">
      <van-area title="标题" :area-list="areaList"  @confirm="sides"/>
    </van-popup>
  </div>
</template>

<script>
// 引入地址
import citysList from "../../utils/City"
import { portrait, user, niCheng,city ,cityShi,grade} from "../../api/api";
import { Cell, CellGroup, Popup, Field, Area, Picker } from "vant";
import areat from "../../utils/area"
import title from "./components/Title";
export default {
  components: {
    VanCell: Cell,
    VanCellGroup: CellGroup,
    VanPopup: Popup,
    VanField: Field,
    VanArea: Area,
    VanPicker: Picker,
  },
  async mounted() {
    this.areaList=citysList
    console.log(citysList)
    var res = await user();
    if (res.data.code == 200) {
      this.datas = res.data.data.birthday;
      this.list = res.data.data;
      this.cityInfos=`${this.list.province_name}-${this.list.city_name}-${this.list.district_name}`
      if (this.list.sex == 3) {
        this.sex = "保密";
        console.log(333);

      }
      if (this.list.sex == 0) {
        console.log("000");
        this.sex = "男";

      }
      if (this.list.sex == 1) {
        console.log(111);
        this.sex = "女";

      }
    }
  },
  methods: {
    changeHandle(e){
      console.log(e.target.files[0])
    },
    //点击确认地址
    sides(value){
      console.log(value)
      console.log(this.cityInfo)
      let obj={
        city_id: value[0].code,
        province_id : value[1].code,
        district_id: value[2].code
      }
      niCheng(obj).then(res=>{
      if(res.code==200){
        console.log(this.cityInfos=`${this.list.province_name}-${this.list.city_name}-${this.list.district_name}`)
        this.cityInfos=`${this.list.province_name}-${this.list.city_name}-${this.list.district_name}`
        window.location.reload()
      }
      })


      this.show2=false
    },
    //点击跳转学科
    gosubject(){

      grade().then(res=>{
        console.log(res)
      })
      this.$router.push({
        path:"/subject"
      })
    },
    //点击城市请求
    chengShi(){
      this.show2=true;
       city().then(res=>{
         let obj=areat(res.data.data)
         this.areaList.province_list=obj
         console.log(obj)
       })

    },
    //点击省
    // sheng(picker,value, index){
    //   console.log(value)
    //   this.cityInfo=value
    //   cityShi(value[0].code).then(res=>{
    //     this.areaList.city_list=areat(res.data.data)
    //   })
    //   if(index==1){
    //     cityShi(value[1].code).then(res=>{
    //       this.areaList.county_list=areat(res.data.data)
    //     })
    //   }
    //
    // },
    //取消
    cancel_button() {
      this.show = false;
    },
    //  从相册选择
    afterRead(file) {
      console.log(file.file);
      var files=new FormData()
      files.append('file',file.file)


      portrait(files).then((res) => {
        this.list.avatar=res.data.path
        console.log(res.data.path);

        let obj={
          avatar:res.data.path
        }
        niCheng(obj).then(res=>{

        })
      });


      this.show=false

    },
    //  点击跳转昵称
    goTag(index) {
      console.log(index);
      this.$router.push({
        path: "/tag",
        query: {
          nickname: index,
        },
      });
    },
    //  点击修改性别
    goSex(index) {
      this.$router.push({
        path: "/sex",
        query: {
          value: index,
        },
      });
    },
    //  点击选择时间
    confirms(val) {
      this.show1 = false;
      var d = new Date(val);
      d = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      let obj = {
        birthday: d,
      };
      niCheng(obj).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.datas = d;
        }
      });
    },
  },
  data() {
    return {
      areaList:{
        province_list:{},
        city_list:{},
        county_list:{}
      },
      shi:[],
      qu:[],
      show: false,
      show1: false,
      show2: false,
      tex: "",
      sex: "保密",
      title: "个人信息",
      details: true,
      sasCode: JSON.parse(localStorage.getItem("sascode")) || {},
      list: {},
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      datas: "",
      cityInfo:{},
      cityInfos:"",
      author:""
    };
  },
  components: {
    "my-title": title,
  },
};
</script>

<style scoped>
/*关于点击头像*/
.uploading {
  width: 100%;
  height: 1.1rem;
  border-bottom: 1px solid #eee;
  text-align: center;
  line-height: 1rem;
  box-sizing: border-box;
  font-size: 0.35rem;
}
.box {
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>