/*
 * @Author: vanC 418637966@qq.com?
 * @Date: 2022-11-12 07:55:38
 * @LastEditors: vanC 418637966@qq.com?
 * @LastEditTime: 2022-11-13 18:12:33
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\mixins\fullScreen.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
	data() {
		return {
			zoomScale: 1,
		};
	},
	mounted() {
		this.setScale();
		window.onresize = this.setScale.bind(this);
	},
	methods: {
		//设置屏幕缩放比例，利用 css zoom属性
		setScale() {
			let designW = 1920;
			let designH = 1080;
			let zoomScaleX = document.documentElement.clientWidth / designW;
			let zoomScaleY = document.documentElement.clientHeight / designH;
			// zoomScale = zoomScale < 0.6 ? 0.6 : zoomScale > 0.8 ? 0.8 : zoomScale;
			if (zoomScaleX > zoomScaleY) {
				this.zoomScale = zoomScaleY < 0.8 ? 0.8 : zoomScaleY;
			} else {
				this.zoomScale = zoomScaleX < 0.8 ? 0.8 : zoomScaleX;
			}
			// this.zoomScale = zoomScale;
		},
	},
};
