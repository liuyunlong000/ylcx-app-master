<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 17:41:05
 * @LastEditors: vanC 418637966@qq.com?
 * @LastEditTime: 2022-11-13 20:27:09
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\views\talent\components\talent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="roleList">
    <leader-card :roleData="scienceData" :active="active" :link="link" :path="path"></leader-card>
  </div>
</template>

<script>
import LeaderCard from "@/components/leader-card.vue";
import {talent_list} from "@/api/wz/wzTalent";
export default {
  data() {
    return {
      scienceData: [],
      path:"scienceDetail",
      active:"talent",
      link:"talent"
    };
  },
  components: { LeaderCard },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate(){
      talent_list().then((response) => {
        if (response.code === 200) {
          this.scienceData=response.data;
        }
      });
    }
  },
};
</script>
<style scoped lang='scss'>
.roleList {
  width: 100%;
  margin: 30px 0;
  /*display: flex;*/
}
</style>