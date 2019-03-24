import Vue from 'vue';
import locale from 'element-ui/lib/locale';  //elementUI的国际化
import VueI18n from 'vue-i18n';
import messages from './langs';

// import {
// 	getLocalStore
// } from "@/utils/webstore-utils.js";
// import {
// 	LAGU
// } from "../config/webstore";


Vue.use(VueI18n)

// const i18n = new VueI18n({    //从localStorage中取，没有就默认的中文
// 	locale: getLocalStore(LAGU) || 'en',
// 	languagePack,
// })
// locale.i18n((key, value) => i18n.t(key, value)) //elementui多语言切换

const i18n = new VueI18n({
	locale: localStorage.lang || 'cn', //初始未选择默认 cn 中文
	messages
})
locale.i18n((key, value) => i18n.t(key, value)) //elementui多语言切换

export default i18n