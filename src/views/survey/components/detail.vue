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
    <div class="left">
      <div style="text-align: center;padding-top: 30px;">
        <div style="height: 220px;text-align: center;">
          <img :src="detail.photo" style="height: 220px;width: auto;padding: 10px;background: white;">
        </div>
        <div style="padding: 25px 0 0;line-height: 30px;font-size: 20px;overflow: hidden;">
          <span style="display: block;float: left;width: 100%;text-align: center;">{{detail.name}}</span>
          <span style="display: block;float: left;width: 100%;text-align: center;">{{detail.post}}</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="text" style="margin:30px 30px 30px 30px" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
import {leader_id} from "@/api/wz/wzLeader";

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
      if(this.item.link=='leader'){
        leader_id(this.$route.query.id).then((response) => {
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
.content {
  background: #f4f4f4;
  .left {
    display:inline-block;
    vertical-align: top;
    width: 20%;

  }
  .right {
    display:inline-block;
    vertical-align: top;
    width: 80%;
    background: white;
  }
}
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
/*.content .text {
  width: 80%;
  margin: 0 auto;
  color: #333333;
  font-size: 16px;
  line-height: 32px;
  margin-top: 40px;
}*/
</style>
