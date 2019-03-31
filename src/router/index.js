import Vue from 'vue'
import Router from 'vue-router'

// import Layout from '@/views/layout/Layout' //前置加载-初次一次性加载所有的模块
// import Aaa from '@/views/aaa/Aaa'
// import Bbb from '@/views/bbb/Bbb'
// import Ccc from '@/views/ccc/Ccc'
// import Aaa1 from '@/views/aaa/components/Aaa1'
// import Bbb1 from '@/views/bbb/components/Bbb1'
// import Ccc1 from '@/views/ccc/components/Ccc1'
// import Aaa2 from '@/views/aaa/components/Aaa2'
// import Bbb2 from '@/views/bbb/components/Bbb2'
// import Ccc2 from '@/views/ccc/components/Ccc2'

const Layout = () => import('@/views/layout/Layout'); //后置加载-初次加载页面会快一点
const Aaa = () => import('@/views/aaa/Aaa');
const Bbb = () => import('@/views/bbb/Bbb');
const Ccc = () => import('@/views/ccc/Ccc');
const Ddd = () => import('@/views/ddd/Ddd');
const Aaa1 = () => import('@/views/aaa/components/Aaa1');
const Bbb1 = () => import('@/views/bbb/components/Bbb1');
const Ccc1 = () => import('@/views/ccc/components/Ccc1');
const Aaa2 = () => import('@/views/aaa/components/Aaa2');
const Bbb2 = () => import('@/views/bbb/components/Bbb2');
const Ccc2 = () => import('@/views/ccc/components/Ccc2');

Vue.use(Router)

export default new Router({
  routes: [
		{path:'/',redirect:'/portal'},
		{
			path:'/portal',
			name:'portal',
			component: Layout,
			children: [
				{
					path: 'aaa',
					name: 'aaa',
					component: Aaa,
					meta: {root: "aaa"},
					children: [
						{
							path: 'aaa1',
							name: 'aaa1',
							component: Aaa1,
							meta: { root: "aaa" }
						},
						{
							path: 'aaa2',
							name: 'aaa2',
							component: Aaa2,
							meta: { root: "aaa" }
						}
					]
				},
				{
					path: 'bbb',
					name: 'bbb',
					component: Bbb,
					meta: { root: "bbb" },
					children: [
						{
							path: 'bbb1',
							name: 'bbb1',
							component: Bbb1,
							meta: { root: "bbb" }
						},
						{
							path: 'bbb2',
							name: 'bbb2',
							component: Bbb2,
							meta: { root: "bbb" }
						}
					]
				},
				{
					path: 'ccc',
					name: 'ccc',
					component: Ccc,
					meta: { root: "ccc" },
					children: [
						{
							path: 'ccc1',
							name: 'ccc1',
							component: Ccc1,
							meta: { root: "ccc" },
						},
						{
							path: 'ccc2',
							name: 'ccc2',
							component: Ccc2,
							meta: { root: "ccc" }
						}
					]
				},
				{
					path: "ddd",
					name: "ddd",
					component: Ddd,
					meta: { root: "ddd" },
				}
			]
		}
  ]
})
