<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 09:23:54
 * @LastEditors: vanC 418637966@qq.com
 * @LastEditTime: 2022-11-12 21:54:08
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\components\bottom.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="bottom">
    <footer>
      <div class="fotter-content">
        <div class="bots-link">
          <div v-for="(item, index) in data" :key="index" class="link-box" @mouseover="show(index)" @mouseleave="hide(index)">
            <div>{{item.type}}</div>
            <span class="">&gt;</span>
            <ul class="list" :class="item.isShow?'list-active':''">
              <li v-for="(_item,_index) in item.list" :key="_index">
                <a :href="_item.content" target="_blank">{{_item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
		<div class="bot-logo-box">
			<div>
				<img src="/images/footer-logo.png" alt="">
			</div>
			<ul class="nav">
				<li
				v-for="item in navList"
				:key="item.value"
				:class="item.value == activeIndex ? 'active' : ''"
				@click="changeIndex(item.value)"
				>
				{{ item.label }}
				</li>
			</ul>
		</div>
		<div class="txt">
			<p>
				地 址：安徽省合肥市高新区创新大道288号 <br />
				办公电话：0551-65361800 <br />
				招聘邮箱：hr@idata.ah.cn
			</p>
			<div>
				Copyright © 2022 idata.ah.cn All Rights Reserved　版权所有：合肥综合性国家科学中心数据空间研究院 <br />
				<a href="https://beian.miit.gov.cn/" style="color: #fff;" target="_blank">皖ICP备2022009561号-1</a>
			</div>
			<div class="ewm">
				<img src="/images/ewm.png" alt="">
				<p>官网微信</p>
			</div>
		</div>
      </div>
    </footer>
  </div>
</template>

<script>
import {links_list} from "@/api/wz/wzFriendlyLinks";

export default {
  name: "Bottom",
  data() {
    return {
		activeIndex:"index",
		navList: [
			{
			value: "index",
			label: "首页",
			},
			{
			value: "survey",
			label: "研究院概况",
			},
			{
			value: "news",
			label: "新闻中心",
			},
			{
			value: "research",
			label: "科学研究",
			},
			{
			value: "technological",
			label: "技术创新",
			},
			{
			value: "platform",
			label: "创新平台",
			},
			{
			value: "product",
			label: "产品介绍",
			},
			{
			value: "talent",
			label: "人才队伍",
			},
		],
    data:[],
	};
  },
	components: {},
	mounted() {
    links_list().then((response) => {
      if (response.code === 200) {
        this.data=response.data;
      }
    });
	},
	methods: {
		changeIndex(index){
			this.$router.push("/"+index);
      window.scrollTo(0,0);
		},
		show(prop){
			this.data[prop].isShow = true;
		},
    hide(prop){
      this.data[prop].isShow = false;
    }
	},
};
</script>
<style scoped lang='scss'>
// .bottom {
//   width: 100%;
//   height: 400px;
//   background: url("@/assets/images/bottom.jpg") no-repeat;
//   background-size: 100% 100%;
// }
footer{
	font-size: 0.8vw;
    padding:2vw 0;
    background-size: cover;
    background: url("/images/footer-bg.jpg");
	background-size: 100% 100%;
    .fotter-content{
		width: 88.5vw;
		margin:0 auto;
		.bots-link{
			display: flex;
			.link-box{
				cursor: pointer;
				background-color: #fff;
				width: 15.4vw;
				margin-right: 5.2vw;    
				padding: 0 0.5vw;
				line-height: 1.8vw;
				// display: flex;
				// justify-content: space-between;
				position: relative;
				span{
					position: absolute;
					top:0;
					bottom:0;
					margin:auto;
					right:0.5vw;
					color: #999;
					transform: rotate(-90deg);
					transform-origin: 50% 50%;
				}
				ul.list-active{
					transform: scale(1,1);
				}
				.list{
					transition: all 0.5s;
					transform: scale(1,0);
					transform-origin:50% 100%;
					border-radius: 10px 10px 0 0;
					padding:0;
					bottom:1.8vw;
					padding: 0 1vw;
					box-sizing: border-box;
					left:0;
					list-style-type: none;
					position: absolute;
					width: 100%;
					background-color: rgba($color: #ffffff, $alpha: 0.8);
					li{
					line-height: 2.2vw;
					height: 2.2vw;
					border-bottom: 1px dashed #999;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					}
					li:hover a{
					color:#4b68d3
					}
					a{
					color: #333;
					text-decoration: none;
					}
				}
				
				.span-active{
					transform: rotate(90deg);
				}
			}
		}
		.txt{
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			letter-spacing: 1px;
			color: #fff;
			div:nth-of-type(1){
				text-align: center;
			}
			a{
				font-size: 0.6vw;
			}
			.ewm{
				display: flex;
				align-items: center;
				flex-direction: column;
				p{
					font-size: 0.83vw;
					margin-top: 5px;
				}
				img{
					width: 5.5vw;
				}
			}
		}
    }
	.bot-logo-box{
		display: flex;
		align-items: center;
		margin-top: 3.5vw;
		border-bottom: 1px solid rgba(255, 255, 255, .18);
		padding-bottom: 10px;
		max-width: 80vw;
		ul.nav{
			list-style-type: none;
			color: #fff;
			display: flex;
			li{
				margin-left:2vw;
				cursor:pointer;
			}
		}
	}
}
</style>