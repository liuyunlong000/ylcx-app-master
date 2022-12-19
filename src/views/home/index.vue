<template>
  <div class="main">
    <div class="section1">
      <section class="banner-box">
        <div
          class="banner-list"
          @mouseenter="clearTimer"
          @mouseleave="setTimer"
        >
          <div class="banner" v-for="(item, index) in bannerList" :key="index">
            <img
              :src="item.imgUrl"
              alt=""
              :class="activeIndex == index ? 'active' : ''"
            />
          </div>
        </div>
        <div class="pagination-box">
          <div
            class="pagi-btn"
            v-for="(item, index) in bannerList"
            :key="index"
            :class="activeIndex == index ? 'btn-active' : ''"
            @click="changeIndex(index)"
          >
            0{{ index + 1 }}
          </div>
        </div>
        <div class="banner-txt">
          <a href="" target="_blank" v-for="(item, index) in bannerList" :key="index" :class="activeIndex == index ? 'active' : ''">
            {{item.title}}
          </a>
        </div>
      </section>
    </div>
    <!-- 新闻中心 -->
    <section class="content-box news-center">
      <div class="section-head">
        <div class="title-box">
          <div class="title-line-left">
            <i></i>
            <span></span>
          </div>
          <div class="title-text YSHei">新闻中心</div>
          <div class="title-en YSHei">NEWS CENTER</div>
          <div class="title-line-right">
            <span></span>
            <i></i>
          </div>
        </div>
        <div class="view-more" @click="viewMore('/news/notice')">
          查看更多
          <img src="/images/index_arr_right.png" alt="" />
        </div>
      </div>
      <div class="news-center-content">
        <newsCenterBannerVue />
      </div>
    </section>
    <!-- 科研动态 -->
    <section class="content-box srt">
      <div class="section-head">
        <div class="title-box">
          <div class="title-line-left">
            <i></i>
            <span></span>
          </div>
          <div class="title-text">科研动态</div>
          <div class="title-en">RESEARCH TRENDS</div>
          <div class="title-line-right">
            <span></span>
            <i></i>
          </div>
        </div>
        <div class="view-more" @click="viewMore('/scientific')">
          查看更多
          <img src="/images/index_arr_right.png" alt="" />
        </div>
      </div>
      <div class="srt-content">
        <ul class="list">
          <li v-for="(item, index) in scientificList" :key="index" @click="gotoDetail('scientific','dynamic','scientificDetail',item)">
            <span class="srt-time">{{ item.releaseTime }}</span>
            <span class="srt-title">{{ item.title }}</span>
          </li>
        </ul>
        <img src="/images/bg3-1.png" alt="" />
        <img src="/images/bg3-2.png" alt="" />
      </div>
    </section>
    <!-- 招贤纳士 CAREERS -->
    <section class="content-box careers">
      <div class="section-head">
        <div class="title-box">
          <div class="title-line-left">
            <i></i>
            <span></span>
          </div>
          <div class="title-text">招贤纳士</div>
          <div class="title-en">CAREERS</div>
          <div class="title-line-right">
            <span></span>
            <i></i>
          </div>
        </div>
        <div class="view-more" @click="viewMore('/talent/recruit')">
          查看更多
          <img src="/images/index_arr_right.png" alt="" />
        </div>
      </div>
      <div class="careers-content">
        <div class="left">
          <a href>
            <img src="/images/r1.png" alt="" />
            <p>首席人才</p>
          </a>
          <a href>
            <img src="/images/r2.png" alt="" />
            <p>领军人才</p>
          </a>
          <a href>
            <img src="/images/r3.png" alt="" />
            <p>卓越人才</p>
          </a>
          <a href>
            <img src="/images/r4.png" alt="" />
            <p>新锐人才</p>
          </a>
        </div>
        <div class="mid">
          <ul>
            <li
              v-for="(item, index) in careersList"
              :key="index"
              @click="gotoDetail('talent','recruit','talentDetail',item)"
            >
              <h3 class="title">{{ item.title }}</h3>
              <span class="time">{{ item.releaseTime }}</span>
            </li>
          </ul>
        </div>
        <div class="right"></div>
      </div>
    </section>
  </div>
</template>
<script>
import {banner_list, recruit_list, scientific_list} from "@/api/wz/wzHome";
import newsCenterBannerVue from "@/components/newsCenterBanner.vue";
import Cookies from "js-cookie";
export default {
  name: "Home",
  components: {
    newsCenterBannerVue
  },
  data() {
    return {
      timer: null,
      bannerList: [],
      activeIndex: 0,
      scientificList: [],
      careersList: []
    };
  },
  mounted() {
    this.getBannerList();
    this.getCareersList();
    this.getScientificList();
    this.timer = setInterval(() => {
      if (this.activeIndex >= this.bannerList.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
      this.changeIndex(this.activeIndex);
    }, 3000);
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
    },
    viewMore(path) {
      this.$router.push(path);
    },
    gotoDetail(active,link,path,item) {
      Cookies.set("active", active);
      Cookies.set("link", link);
      let infoUrl = this.$router.resolve({name: path, query: {id: item.nid}})
      window.open(infoUrl.href,'_blank')
    },
    clearTimer() {
      clearInterval(this.timer);
    },
    setTimer() {
      this.timer = setInterval(() => {
        if (this.activeIndex >= this.bannerList.length - 1) {
          this.activeIndex = 0;
        } else {
          this.activeIndex++;
        }
        this.changeIndex(this.activeIndex);
      }, 3000);
    },
    getBannerList(){
      banner_list().then((response) => {
        if (response.code === 200) {
         this.bannerList=response.data;
        }
      });
    },
    getCareersList(){
      recruit_list(6).then((response) => {
        if (response.code === 200) {
          this.careersList=response.data;
        }
      });
    },
    getScientificList(){
      scientific_list(6).then((response) => {
        if (response.code === 200) {
          this.scientificList=response.data;
        }
      });
    }
  },
};
</script>
<style scoped lang="scss">
@font-face {
  font-family: "YSHei";
  src: url(/ttf/YouSheBiaoTiHei-2.ttf);
}

@font-face {
  font-family: "DINL";
  src: url(/ttf/DIN-LIGHT.OTF);
}

@font-face {
  font-family: "DINR";
  src: url(/ttf/DIN-REGULAR.OTF);
}

@font-face {
  font-family: "DINBLACK";
  src: url(/ttf/DIN-BLACK.OTF);
}

@font-face {
  font-family: "DINBLOD";
  src: url(/ttf/DIN-BOLD.OTF);
}
.section1 {
  padding: 0 !important;
  height: calc(100vh - 7.8125vw);
  position: relative;
  box-sizing: border-box;
  padding-bottom: 60px !important;
  background: url("/images/bg1.png") no-repeat right;
  background-size: 68% 100%;
  .banner-box {
    height: 100%;
    display: flex;
    align-items: flex-end;
    .banner-list {
      background-color: aliceblue;
      height: 100%;
      border-radius: 0 40px 40px 0;
      overflow: hidden;
      width: 83vw;
      position: relative;
      .banner {
        width: 100%;
        height: 100%;
        position: absolute;
        img {
          opacity: 0;
          width: 100%;
          height: 100%;
        }
        .active {
          transition: all 0.8s;
          opacity: 1;
        }
      }
    }
    .pagination-box {
      padding-left: 40px;
      display: flex;
      flex-direction: column;
      .pagi-btn {
        margin-top: 40px;
        cursor: pointer;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 1.35vw;
        color: #497fc4;
        font-style: italic;
        font-family: "DINL" !important;
      }
      .btn-active {
        color: #fff;
      }
    }
    .banner-txt {
      width: 45%;
      line-height: 4vw;
      padding: 0 20px;
      box-sizing: border-box;
      background: url(/images/banner-txt-bg.png) center center no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 0;
      z-index: 2;
      a {
        font-size: 1.01vw;
        color: #fff;
        display: none;
      }
      .active {
        display: inline !important;
      }
    }
  }
}

.content-box {
  padding: 90px 0;
  background-size: 100% 100%;
  .section-head {
    width: 88.5vw;
    margin: 0 auto;
    margin-bottom: 4vw;
    position: relative;
    .view-more {
      position: absolute;
      top: 20px;
      right: 0;
      font-size: 1vw;
      color: #5b6edb;
      background: -webkit-repeating-linear-gradient(left, #5b6edb, #4fc4e5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #4fc4e5;
      }
    }
    .title-box {
      position: relative;
      display: flex;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
      .title-text {
        color: #3e3e3e;
        padding: 0 60px;
        font-size: 2.6vw;
        letter-spacing: 2px;
        font-weight: 500;
        position: relative;
        z-index: 5;
        font-family: "YSHei" !important;
      }
      .title-en {
        font-weight: 700;
        font-size: 4.5vw;
        color: #ebebeb;
        white-space: nowrap;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        letter-spacing: 5px;
        font-family: "YSHei" !important;
      }
      .title-text::before {
        content: "";
        position: absolute;
        bottom: -2vw;
        left: 50%;
        transform: translateX(-50%);
        height: 1.5vw;
        width: 27.6vw;
        background: url("/images/title-line.png") center center
          no-repeat;
        background-size: cover;
      }
      .title-line-left {
        z-index: 5;
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          height: 5px;
          width: 19.2vw;
          background: linear-gradient(-4deg, #6374f8, #e4fdfe 65%);
        }
        span {
          content: "";
          width: 0.8vw;
          height: 0.8vw;
          background: linear-gradient(#6378f7, #63cbf5);
          border-radius: 50%;
        }
      }
      .title-line-right {
        z-index: 5;
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          height: 5px;
          width: 19.2vw;
          background: linear-gradient(4deg, #6374f8, #e4fdfe 65%);
        }
        span {
          content: "";
          width: 0.8vw;
          height: 0.8vw;
          background: linear-gradient(#6378f7, #63cbf5);
          border-radius: 50%;
        }
      }
    }
  }
  .news-center-content {
    width: 88.5vw;
    margin: 0 auto;
  }
}
.news-center {
  background: url("/images/bg2.jpeg");
  background-size: 100% 100%;
}
.srt {
  padding: 0;
  margin-top: 2vw;
}
.srt-content {
  width: 100%;
  background: linear-gradient(150deg, #5b6edb, #4fc4e5 95%);
  position: relative;
  // display: flex;
  // justify-content: space-between;
  ul.list {
    width: 95%;
    position: absolute;
    right: 15vw;
    top: 0;
    padding: 3vw 0;
    max-width: 39.0625vw;
    margin-left: auto;
    list-style-type: none;
    li {
      border-bottom: 1px solid #fff;
      display: flex;
      padding: 0 1vw;
      color: #fff;
      align-items: center;
      justify-content: space-between;
      line-height: 4vw;
      letter-spacing: 1px;
      font-size: 1.05vw;
      cursor: pointer;
      .srt-time {
        font-family: "DINL" !important;
      }
      .srt-title {
        font-size: 1.05vw;
        width: 78%;
        transition: all .3s;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight:bold;
      }
    }
    li:hover .srt-title {
      margin-left: 40px;
      color: #497fc4;
    }
  }
  img:nth-of-type(2) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
.careers {
  .careers-content {
    width: 88.5vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left {
      // width: 19.2vw;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      background: linear-gradient(45deg, #d7f3ff, #d3dbff 80%);
      border-radius: 10px;
      overflow: hidden;
      font-family: "YSHei" !important;
      a {
        font-family: "YSHei" !important;
        width: 50%;
        height: 9.6vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.5vw;
        font-weight: 700;
        // letter-spacing: 2px;
        text-decoration: none;
        background-color: transparent;
      }
      a:first-of-type,
      :nth-of-type(4) {
        background: linear-gradient(-45deg, #49c0ff, #3d57ff 40%);
        color: #fff;
        p {
          margin: 0;
        }
      }
      :nth-of-type(2),
      :nth-of-type(3) {
        p {
          margin: 0;
          color: #5b6edb;
          background: -webkit-repeating-linear-gradient(left, #5b6edb, #4fc4e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    .right {
      // width: 19.2vw;
      flex: 1;
      border-radius: 10px;
      overflow: hidden;
      background: url("/images/bg4.jpeg");
      background-size: 100% 100%;
    }
    .mid {
      border-radius: 15px;
      background: #ecfaff;
      border: 1px solid #8c98e6;
      margin: 0 10px;
      flex: 2;
      ul {
        list-style-type: none;
        list-style-image: url("/images/list-icon2.png");
        padding: 1.95vw 2.5vw;
        li {
          &:hover {
            color: #497fc4;
          }
          cursor: pointer;
          background: url("/images/list-icon2.png") no-repeat left
            center;
          width: 100%;
          color: #3e3e3e;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          transition: all 0.3s;
          margin-bottom: 20px;
          .title {
            margin: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 22px;
            margin-left: 50px;
          }
          .time {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
