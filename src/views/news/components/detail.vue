<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 17:53:19
 * @LastEditors: vanC 418637966@qq.com?
 * @LastEditTime: 2022-11-13 13:53:11
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\views\news\components\notice.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content">
    <div class="title">
      <span>{{detail.title}}</span>
      <div class="time">
        文章来源：{{detail.source}}  发布时间：{{detail.releaseTime}}</div>
    </div>

    <div class="text" v-html="detail.content"></div>
  </div>
</template>

<script>
import {news_id, notice_id, notice_list} from "@/api/wz/wzNews";

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      detail:{}
    };
  },
  components: {},
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail(){
      if(this.item.link=='newscore'){
        news_id(this.$route.query.id).then((response) => {
          if (response.code === 200) {
            this.detail=response.data;
          }
        });
      }else if(this.item.link=='notice'){
        notice_id(this.$route.query.id).then((response) => {
          if (response.code === 200) {
            this.detail=response.data;
          }
        });
      }
    }
  },
};
</script>
<style scoped lang="scss">
.content .title {
  text-align: center;
}
.content .title span {
  width: 80%;
  margin: 0 auto;
  display: block;
  color: #333333;
  font-size: 24px;
  border-bottom: 1px dashed #dadada;
  padding: 0 40px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  font-weight: 600;
}
.content .title .time {
  color: #333333;
  font-size: 14px;
}
.content .text {
  width: 80%;
  margin: 0 auto;
  color: #333333;
  font-size: 16px;
  line-height: 32px;
  margin-top: 40px;
}
</style>
