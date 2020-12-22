<template>
  <div class="study_wrap">
    <div class="study_top">
      <span
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC"
          style="width: 0.2rem; height: 0.3rem"
          @click="back"
      /></span>
      <p
        style="
          font-size: 0.3rem;
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
        "
      >
        {{ userList.title }}
      </p>
      <span>
        <van-icon name="notes-o" size="20px" @click="StudyCalendar" />
      </span>
    </div>
    <div class="keshis" >
      <span>共{{userList.section_num}}课时</span>
      <p></p>
      <span>已学习{{userList.progress_rate}}%</span>
    </div>
    <div class="study_center">
      <ul>
        <li v-for="(item, index) in showList" :key="index" @click="add">
          <p style="width: 90%; font-size: 0.27rem; margin: 0.4rem 0 0 0">
            {{ item.periods_title }}
          </p>
          <p v-for="(items, index) in item.teachers" :key="index" style="margin:0.2rem 0;color:gray">
            {{ items.teacher_name }}   {{item.start_play}}
          </p>
          <div>
            <span
              style="
                display: inline-block;
                width: 70%;
                height: 0.1rem;
                background: #e9e9e9;
                margin: 0 0.2rem;
              "
            ></span>
            <span style="color: gray">已观看0%</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="study_bottom">
      <div @click="comment">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAE30lEQVRYR7WYXYwTVRTH/+e22x2g0yVoVh9IRGNCiIkPCEGjxkQe/ODFlzUQMDyoaNiklum0sismoyjJMjOdZj8wRCNqDApVNCEGkn3QIMFoEBXF+KIh6wcmfC2702W77dxjLtndlNpu26Xc13s+fnPuOeeeO4SbtCzLiui6voKZtwN4EEBARMeFEN6VK1dOW5ZVquaabgaPZVmarutJZk4AuHXGBxExM/8thOgfGxvzqkHdFCDXdV9n5m0AojU+OE9EO5LJZLZyv+VAjuNsAPA+gLa5os/M50Oh0FrDMH4ul2sZUH9/f7vv+zFN03wppcobY44IKYYiEW1LJpNDLQeyLCus6/oeAAsKhUJC07QJKeUOZjaISKsRKQngVdM0d7UUyPO8xVLKAWbeNG34YKlU2jI5OXlV13WbmV8A0F4JxcyTALamUql9LQMaHBy8pVAoZKWUTxNRpMzwESnlSx0dHWfHx8dVcvcAWFwB9X0kEnkqHo//1RIg27YXAfiIiB4DUA6j7AcAjkopn9M07XKhUFBH9woApaPWBSHEOsMwvmtJlQ0NDd0+MTGxj4gen6uSiGi4vb19Q2dn5+jIyIilckoI8U8oFNqUSCS+bUlj7OvrWxoKhfYw8xNEFK7XWInoaynl1nw+/2s0Gt0opfwjlUqdUE3yhoGy2extpVLpEwD3A6gLoxwysySiY+FweHMikfhzGqIqjNpruA9lMpm7pJT7AaypF5WKfeX8jBBivWEYZ+rpNgTU19e3XAixl4geAhCqZ7R8n5lPEdGLpmmeVAGrp1sXKJPJ3C2lPATgHgCinsHrSpjoZBAE69Pp9O+N6s0FRK7r3qtKm5lXNGpwWk514RPhcHhjIpEYaUa3JpDjOKsBvAVgZTO5Nu18GEDcNM3fmoGpmdTZbHZNEAT7mfnOecAcllJuSafT/zYLUxXIcZz7AHwK4I4mDarufHhqampLb2/v+SZ1Z8X/d2Se560MgmAQwAONGp2eBD8mopeTyeRMr2lU/Tq564Bs296Uz+f3x2KxZcx8gJlXNWBVlfLeYrHY29PTc7kB+TlFZoEymcwqKeUxAKbv++8sXLhwiRDic2ZeTURVy52ZS0T0biQSScXj8bEbhSnPIVXibzPzswAuAnB833disdgKKaUHYG0VZwpG3Wk7TdO80AqYWSDP85YFQXAUwPJpw2oI3xuNRrfn8/lOKeUHAB4tc6rGz51Sykwqlcq3CmYWyHGcZwCoRI7NGGfmKeVUCOHGYrEFo6OjOQCPAFDvKVcI8YZhGFdbCXMNSD3ootHoAIDnq/QcH8AeXddf831/KTO/SUSnNU3zuru71V7LF2UymSXM/AUzq5Gi2ioQ0QE10xSLRe3cuXP+wMBAoVLQtu11RKSeQE3dd2V21JhykBzHUQ3wJwAdFU5UOZeYeUwI8UsQBIl0Ov1jrZC4rqtGC/V0rnth17BxbUwh27bVgH6gQmiciL4BMMzMX/q+/4NlWerCrLl27979ZDgcflhKOe8IMfNxFaH3AGwGoEJ2ipk/UyCRSOTspUuXLtYDKSfs6uoKdXV1zSuvcrkccrlcoIByau5ta2s7VPkkqZIni4ho9ufBvDzPoVQsFseaOm/XdXcxc6rZqbFBcJVDXzUL1M3M6o9FQwN+gyAzYiplPvwPh2MJ5xnUb/8AAAAASUVORK5CYII="
          style="
            width: 0.3rem;
            height: 0.3rem;
            vertical-align: middle;
            margin: 0 0.1rem;
          "
        />
        <span>写评论</span>
      </div>
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAACi0lEQVRYR+1Yv4sTURD+Ztc1WbN7igimEsFC8aorhPSCxXGFIIk/GuUUm5w27xASVLaxSG436J6oEfUfSKeFfSoRbSzEKld6FuYsRJOV3ZEniZx4Sd7eu4ND3G553zf7zbw3M2+WgiA4CeAxMx8GYGD08x3Ac9u2r5TL5a9DmO/7x4noFDNnx3BVlhIArygIgpWBGBUSiEgIIRoSHIZhJoqiRwAuKZEng76Q7/tSGU3G/kYsLy4uXpdvnuftcV33GTOfTcEfC5WCOI0xIrovhLgmOY1Gw2bmJwDOM3Map0Z98oeWIM/zDMdxThPRGWbelcaxDbBsGMY7LUHSaLFYNKenp3PZbFY7Qp1O55u2IM2o/EXXFiQjNDMzs8+yLFNHXCaT4W63u6YlSJ6hXC63QERXAWgJks4Q0ZvUaU9Ey0KIbU37VQAHVcNNRDeFEHe2rQ4FQTDPzHcBuAqi3tq2PVcul6UTw0r9AMC8AlcF0v2Vqs1mc2+/3z9gmubI1I3juJfP5z+WSqV4vWXf948R0exW9DIiamvXDhW302D+C5oUrZ0ZoTAMp+I43s/MIy9olmX12u32p1ar9cehnuRx2nVaWlq6YBjGQ2aeUiC/jqJotlqtfh7UIcN13QVmvgVA68ZIRAkzv5CVWqswOo7zFMA5BWdUIMmObB2bvjHKO3W/378H4CIR6SaI1NHV6vZyD2q12lHTNAsALJU9GYVhZinovbYgHREbcf89QfV6/QgRnSAi7S1LkuSDVoQ8z9vtOE59MCiOm3pVdlaeodXUaQ9g2wfFFQByrld61o/ScnLd8sIYBMGc9JqZD4372cDMPcMwXkZRdLlSqawNZ7JCoXCDmW/rtg4AibT/E2rjPaJgEXouAAAAAElFTkSuQmCC"
          style="
            width: 0.3rem;
            height: 0.3rem;
            vertical-align: middle;
            margin: 0 0.1rem;
          "
        />
        <span @click="Coursedetail">课程详情</span>
      </div>
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAADAUlEQVRIS+2WTWgTQRTH/y9pajWV4geIHsxBUUE96EEUFQ96EvHrUJEq4kFKrZQmO6tCUVcFRXd2EgJVgigi+EFA9KAeRBBF0CIVBLUF8VAselAQ29RYTebJlE1pobXbNsfuaffte++3Mzsz/z8h4CWlnAvgGhFtY2YiItZaPyWiPUKI70HaUJAkk5NMJtcXi8UsgAWlGmb+QUTbhRAvgvShTCYzI5fLrQMwbYyCKDM3ANg0MCxmBtBGREkAfWPU9kcikdfked4TZt4c5MsmmfOcXNdtJ6LVk2wUpPwtKaUWM/OGANMYpOFoOf3M/CrwApkMqVQ7CMtms+Gurq4q8yIWi/2ura0tThQwWq9BmOu6W/yVBSI6ZlnWo4nClFIbtdaXTH04HD4ej8cfmvtBmJRyN4C7JsjMdbZt3yrB0un0tEKhsEZr/U0I0VmKm/8NYH5PT0+74zi/SnHP87Yy8wAAwD4hxM3AMKXULq31bQA/ASw3J4ZSarbW+h2AOUR0yLKsG2WBSSmPArhgmoVCoRWJROJ9KpVaWigUSqM8I4Q4VS7YcQDn/Sleadv2OynlMgAdfuysbdsnp2D432qUUk5N48AamdQ+m5rGsuwzpZSttb7ou4EVQogPnuctAdBpzA8zn7Zt2ykLTEppxPU6EX2pqqra2tjYmPO9ywNmXhgKhQ4nEonHZYEZferu7o7l8/l8S0vL11LTVCo1T2sdjUajn+vr6/8Ghrmuu4OI7g9IAdGBoaf4eHVNSrkTwD3/3Nxr2/adYRLjed4qZn7jN74uhDg4XsiQkV3ybR8qKirWNjc3tw2DZTKZSG9v70fjCowPZOZ4X1/fVcdxdFCo4zihmpqaumKxaFS6GkB3Lpdb5DjOn2Ew8yCl3A/giu+0jAfpYOZPRBTEj4QAGOU20lMBoJ+I4pZlXS597DB3pZSazswnmPkIgJlBRzRCXp6I0pFI5FxTU1PPiDATbG1trc7n8+uJqMH3k7OMQAcAGzv+A8DLcDh8ubKy8pnZIkPr/gEjO6imaFb4ZAAAAABJRU5ErkJggg=="
          style="
            width: 0.3rem;
            height: 0.3rem;
            vertical-align: middle;
            margin: 0 0.1rem;
          "
        />
        <span>移除列表</span>
      </div>
    </div>
    <!-- 写评论 -->
    <van-dialog v-model="show" show-cancel-button>
      <div class="issue">
        <div class="start">
          星级: <van-rate v-model="value" size="13px" color="orange" />
        </div>
        <div class="content">
          <p style="margin 0 0.2rem;font-size:0.28rem">内容:</p>
          <textarea cols="40" rows="7" style="resize: none"></textarea>
        </div>
        <div class="btns"><button class="btn">发布</button></div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import { xuexi } from "../../../api/api";
export default {
  data() {
    return {
      show: false,
      value: 3,
      val1: this.$route.query.val1,
      userList: {},
      showList: [],
    };
  },
  mounted() {
    // console.log(this.list);
    // this.userList=this.list.course
    xuexi(this.val1).then((res) => {
      if (res.data.code == 200) {
        console.log(res.data.data);
        this.userList = res.data.data.course;
        this.showList = res.data.data.periods;
      }
    });
  },
  methods: {
    StudyCalendar() {
      this.$router.push("/StudyCalendar");
    },
    Coursedetail() {
      this.$router.push("/Coursedetail");
    },
    comment() {
      this.show = true;
    },
    add() {
      this.$router.push("/video");
    },
    back() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
  .keshis{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 1rem;
    /*border: 1px solid red;*/
    box-sizing: border-box;
    padding: 0 0.3rem;
    align-items: center;
  }
  .keshis>p{
    width: 70%;
    height: 0.08rem;
    background: #E9E9E9;
  }
.study_center {
  width: 95%;
  margin: 0 auto;
}
.study_center ul {
  width: 100%;
}
.study_center ul li {
  width: 100%;
  height: 2rem;
  box-sizing: border-box;
  margin: 0.2rem 0;
  padding: 0 0.2rem;
  border: 2px solid #e9e9e9;
}
.study_center ul li > div {
  display: flex;
  align-items: center;
  margin: 0rem 0;
}

.issue {
  height: 4.4rem;
  box-sizing: border-box;
  padding: 0 0.2rem;
}
.start {
  margin: 0.5rem 0.2rem;
}
.content {
  display: flex;
  margin: 0.5rem 0.2rem;
}
.study_top {
  width: 100%;
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.2rem;
  border-bottom: 1px solid #eee;
}
.study_bottom {
  width: 100%;
  height: 0.8rem;
  position: fixed;
  bottom: 0rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.2rem;
  align-items: center;
}
.btns {
  width: 100%;
  height: 0.5rem;
  text-align: center;
}
.btn {
  background: #eb6100;
  color: #fff;
  border: none;
  outline: none;
  width: 1rem;
  height: 0.5rem;
  /* margin-left: 0 2rem; */
}
</style>