<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 07:42:21
 * @LastEditors: vanC 418637966@qq.com?
 * @LastEditTime: 2022-11-13 16:32:21
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
       :key="key"
     ></common-content>
   </div>
 </template>
 <script>
 import Banner from "@/components/banner.vue";
 import CommonContent from "@/components/common-content.vue";
 import {platform_list} from "@/api/wz/wzPlatform";
 export default {
   data() {
     return {
       key:0,
       subnavList: [],
       crumbsList: [
         { name: "首页", link: "/" },
         { name: "创新平台", link: "/platform" },
       ],
     };
   },
   components: { Banner, CommonContent },
   mounted() {
     this.getPlatformList()
   },
   methods: {
     setTitle(val) {
       this.title = val;
     },
     getPlatformList(){
       platform_list().then((response) => {
         if (response.code === 200) {
           this.subnavList=response.data;
           this.key++;
         }
       });
     }
   },
 };
 </script>
   
   <style lang="scss">
 .mainContent {
   width: 100%;
 }
 </style>
   