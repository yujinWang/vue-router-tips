import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'

Vue.use(ElementUI, Vuex)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	console.log(to.meta.path == "/portal/aaa/aaa1");
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
  components: { App },
  template: '<App/>'
})
