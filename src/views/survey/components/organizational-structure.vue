<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 14:08:52
 * @LastEditors: vanC 418637966@qq.com
 * @LastEditTime: 2022-11-12 14:26:11
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\views\survey\components\organizational-structure.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cont" v-html="detail.content"></div>
</template>

<script>
import {org_id} from "@/api/wz/wzOrg";

export default {
  data () {
    return {
      detail:{}
    }
  },
  components: {

  },
  mounted() {
    org_id(1).then((response) => {
      if (response.code === 200) {
        this.detail=response.data;
      }
    });
  },
  methods: {

  },
}

</script>
<style scoped lang='scss'>
.cont{
  width: 80%;
  margin: 0 auto;
  font-size: 16px;
  color: #333333;
  line-height: 36px;
  text-indent: 32px;
}
</style>
<style>
img {
  border: none;
  vertical-align: middle;
  max-width: 100%;
}
</style>