<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 17:41:45
 * @LastEditors: vanC 418637966@qq.com
 * @LastEditTime: 2022-11-12 17:45:33
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\views\talent\components\dynamic.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cont" v-html="item.content"></div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.cont {
  width: 80%;
  margin: 0 auto;
  font-size: 16px;
  color: #333333;
  line-height: 36px;
  text-indent: 32px;
}
</style>
