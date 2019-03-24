import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import i18n from './i18n/i18n';

// import lang from 'element-ui/lib/locale/lang/en' //element用法--只引入英文
// import locale from 'element-ui/lib/locale'
// locale.use(lang)

Vue.use(ElementUI, Vuex, i18n)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => { //全局前置导航守卫，路由跳转登录验证，例如验证未通过跳转至登录页面
	//console.log(to.meta.path == "/portal/aaa/aaa1");
	next();
	//const token = store.getters.userInfo
	// if (to.matched.some(record => record.meta.requireAuth)) {
	// 	next()
	// } else {
	// 	if (token) {
	// 		next()
	// 	} else {
	// 		if (to.path === "/login") {
	// 			next()
	// 		} else {
	// 			next({ path: '/login' })
	// 		}
	// 	}
	// }
})

new Vue({
  el: '#app',
	router,
	i18n,
  components: { App },
  template: '<App/>'
})
