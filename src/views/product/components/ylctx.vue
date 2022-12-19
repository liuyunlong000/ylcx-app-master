<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 17:31:35
 * @LastEditors: vanC 418637966@qq.com
 * @LastEditTime: 2022-11-12 17:31:58
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\views\product\ylctx.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-html="item.content"></div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data () {
    return {
    }
  },
  components: {

  },
  mounted() {
  },
  methods: {
  },
}

</script>
<style scoped lang='scss'>
img {
    width: 100%;
}
</style>