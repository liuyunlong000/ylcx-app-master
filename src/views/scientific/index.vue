<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 07:42:21
 * @LastEditors: vanC 418637966@qq.com?
 * @LastEditTime: 2022-11-13 16:32:15
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\views\survey\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   <div class="mainContent">
     <banner></banner>
     <common-content
       :subnavList="subnavList"
       :crumbsList="crumbsList"
       @setTitle="setTitle"
     ></common-content>
   </div>
 </template>
 <script>
 import Banner from "@/components/banner.vue";
 import CommonContent from "@/components/common-content.vue";
 export default {
   data() {
     return {
       subnavList: [
         { name: "科研动态", link: "dynamic" }
       ],
       crumbsList: [
         { name: "首页", link: "/" },
         { name: "科研动态", link: "/scientific" },
       ],
     };
   },
   components: { Banner, CommonContent },
   mounted() {},
   methods: {
     setTitle(val) {
       this.title = val;
     },
   },
 };
 </script>
   
   <style lang="scss">
 .mainContent {
   width: 100%;
 }
 </style>
   