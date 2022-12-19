<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 14:09:22
 * @LastEditors: vanC 418637966@qq.com
 * @LastEditTime: 2022-11-12 17:24:03
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\views\survey\components\leader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="roleList">
   <leader :roleData="leaderData" :active="active" :link="link" :path="path"></leader>
  </div>
</template>

<script>
import Leader from '@/components/leader.vue';
import {leader_list} from "@/api/wz/wzLeader";
export default {
  data() {
    return {
      leaderData:[],
      path:"leaderDetail",
      active:"survey",
      link:"leader"
    };
  },
  components: {Leader},
  mounted() {
    this.getLeaderList();
  },
  methods: {
    getLeaderList(){
      leader_list().then((response) => {
        if (response.code === 200) {
          this.leaderData=response.data;
        }
      });
    },
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