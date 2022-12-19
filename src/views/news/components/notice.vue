<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 17:53:19
 * @LastEditors: vanC 418637966@qq.com?
 * @LastEditTime: 2022-11-13 13:53:11
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\views\news\components\notice.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="news_list">
      <ul class="ul">
        <li class="cle" v-for="(item, index) in noticeList" :key="index">
          <a href="javascript:void(0);" @click="detail(item)">
            <div class="fl text txtov">
              <img
               src="/images/list-icon2.png"
              />{{item.title}}
            </div>
            <div class="fr time">{{item.releaseTime}}</div>
          </a>
        </li>
      </ul>

      <div class="page"></div>
    </div>
  </div>
</template>

<script>
import {notice_list} from "@/api/wz/wzNews";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      noticeList:[]
    };
  },
  components: {},
  mounted() {
    this.getNoticeList();
  },
  methods: {
    getNoticeList(){
      notice_list(10).then((response) => {
        if (response.code === 200) {
          this.noticeList=response.data;
        }
      });
    },
    detail(item){
      Cookies.set("active", 'news');
      Cookies.set("link", 'notice');
      let infoUrl = this.$router.resolve({name: 'newsDetail', query: {id: item.nid}})
      window.open(infoUrl.href,'_blank');
    }
  },
};
</script>
<style scoped lang="scss">
.news_list {
  margin-top: 30px;
}
ul,
li {
  list-style: none;
}
.news_list .ul li {
  margin-bottom: 30px;
}
.txtov {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
a {
  text-decoration: none;
  background-color: transparent;
}
.wrap .ul li .text {
  display: flex;
  align-items: center;
  max-width: 800px;
  &:hover {
    transform: translateX(3px);
    color: #156fcb;
  }
}
.ul li .text {
    color: #222222;
    font-size: 16px;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
.fl {
    float: left;
}
.ul li .time {
    color: #999999;
    font-size: 14px;
}
.cle:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.page {
    text-align: right;
    margin-top: 60px;
}
.fr {
    float: right;
}
.ul li .time {
    color: #999999;
    font-size: 14px;
}
.ul li .text {
    color: #222222;
    font-size: 16px;
    transition: all .2s ease-in-out;
}
.wrap .ul li .text img {
    vertical-align: 0px;
}
img {
    border: none;
    vertical-align: middle;
    max-width: 100%;
}
.wrap .ul li .text img {
    margin-right: 10px;
}
</style>
