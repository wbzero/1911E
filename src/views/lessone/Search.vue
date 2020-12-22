<template>
  <div>
    <van-search
      v-model="value"
      @keypress.enter="onSearch"
      show-action
      placeholder="请输入搜索关键词"
    >
      <template #left>
        <van-icon name="arrow-left" @click="fanhui" size="0.4rem" />
      </template>
      <template #action>
        <div @click="onSearch" v-if="isshow">搜索</div>
        <div @click="fanhui" v-else style="color: #eee">取消</div>
      </template>
    </van-search>

    <div v-if="shows1">
      <div class="search_lishi">
        <span style="">历史搜索</span>
        <span><van-icon name="delete" @click="del" color="#eee" /></span>
      </div>

      <div class="search_jilu">
        <van-tag
          plain
          type="primary"
          round
          text-color="#000"
          v-for="(item, index) in list"
          :key="index"
          @click="onSearchs(item, index)"
          >{{ item }}</van-tag
        >
      </div>
    </div>
    <!-- 搜索的内容 -->
    <div class="content_text" v-if="shows2">
      <ul>
        <li
          v-for="(item, index) in showList"
          :key="index"
          @click="goCoursedetail(item.id)"
        >
          <img
            :src="item.cover_img"
            alt=""
            style="
              width: 2rem;
              height: 1.2rem;
              margin: 0 0.2rem 0 0rem;
              border-radius: 0.2rem;
            "
          />
          <div class="content_div">
            <p style="font-size: 0.3rem">{{ item.title }}</p>
            <div>
              <span style="color: gray"
                >{{ item.total_periods }}万+人已报名</span
              >
              <span style="color: green; font-size: 0.3rem">{{
                item.price | prices
              }}</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="imhss" v-show="showList.length == 0">
        <img src="../../assets/shuju.jpg" alt="" />
      </div>
    </div>

    <van-empty description="没有更多内容！ " v-show="show" />
  </div>
</template>

<script>
import { curriculum } from "../../api/api";
export default {
  data() {
    return {
      value: "",
      list: JSON.parse(localStorage.getItem("list")) || [],
      show: false,
      isshow: false,
      shows1: true,
      shows2: false,
      showList: [],
    };
  },
  //   async mounted() {
  //     var res = await curriculum({
  //       page: 1,
  //       limit: 10,
  //     });
  //     if (res.data.code == 200) {
  //       this.showList = [];
  //       res.data.data.list.filter((item) => {
  //         // if (item.title.indexOf(this.value) != -1) {
  //         this.showList.psuh(item);
  //         console.log(item);
  //         // }
  //       });
  //     }
  //   },
  filters: {
    prices(val) {
      if (val == 0) {
        return "免费";
      } else {
        return "1";
      }
    },
  },
  created() {
    let list = localStorage.list;
    if (list) {
      this.list = JSON.parse(list);
    }
  },
  watch: {
    value(a) {
      if (a.length == 0) {
        this.isshow = false;
        this.shows1 = true;
        this.shows2 = false;
      } else {
        this.isshow = true;
        this.shows1 = false;
      }
    },
  },
  methods: {
    // 点击跳转详情
    goCoursedetail(index) {
      this.$router.push({
        path: "/Coursedetail",
        query: {
          val1: index,
        },
      });
    },
    onSearchs(item, index) {
      this.shows1 = false;
      this.value = item;
      console.log(item);
      let obj = {
        limit: 10,
        page: 1,
        course_type: 0,
        keywords: this.value,
      };
      curriculum(obj).then((res) => {
        console.log(res.data.data.list);

        this.showList = [];
        this.showList = res.data.data.list;
      });
      this.shows2 = true;
    },
    onSearch() {
      let obj = {
        limit: 10,
        page: 1,
        course_type: 0,
        keywords: this.value,
      };
      curriculum(obj).then((res) => {
        console.log(res.data.data.list);

        this.showList = [];
        this.showList = res.data.data.list;
      });
      this.shows2 = true;
      if (this.value.trim() != "") {
        console.log(this.list);
        if (this.list.includes(this.value)) {
          return;
        }
        this.list.push(this.value);
        localStorage.list = JSON.stringify(this.list);
      }
    },
    fanhui() {
      window.history.back(-1);
    },
    del() {
      this.list = [];
      localStorage.list = JSON.stringify(this.list);
    },
  },
};
</script>

<style scoped>
.imhss {
  width: 3.5rem;
  height: 4rem;
  margin: 0 auto;
}
.imhss > img {
  width: 100%;
  height: 100%;
}
.search_lishi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;
  box-sizing: border-box;
  padding: 0.2rem 0.2rem;
}
.search_jilu {
  box-sizing: border-box;
  padding: 0.2rem 0.2rem;
}

.content_text {
  width: 92%;
  margin: 0rem auto;
}
.content_text ul {
  width: 100%;
}
.content_text ul li {
  width: 100%;
  height: 1.7rem;
  /* border: 1px solid red; */
  display: flex;
  box-sizing: border-box;
  padding: 0 0.2rem;
  background: #fff;
  margin: 0.25rem 0;
  align-items: center;
  border-radius: 0.2rem;
}
.content_text ul li p {
  margin: 0 0 0.55rem 0;
}
.content_div {
  width: 70%;
}
.content_div > div {
  display: flex;
  justify-content: space-between;
}
</style>