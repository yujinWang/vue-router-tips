import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Aaa from '@/views/aaa/Aaa'
import Bbb from '@/views/bbb/Bbb'
import Ccc from '@/views/ccc/Ccc'
import Aaa1 from '@/views/aaa/components/Aaa1'
import Bbb1 from '@/views/bbb/components/Bbb1'
import Ccc1 from '@/views/ccc/components/Ccc1'
import Aaa2 from '@/views/aaa/components/Aaa2'

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
					children: [
						{
							path: 'aaa1',
							name: 'aaa1',
							component: Aaa1,
							meta: {
								path: "/portal/aaa/aaa1"
							}
						},
						{
							path: 'aaa2',
							name: 'aaa2',
							component: Aaa2,
						}
					]
				},
				{
					path: 'bbb',
					name: 'bbb',
					component: Bbb,
					children: [
						{
							path: 'bbb1',
							name: 'bbb1',
							component: Bbb1,
						}
					]
				},
				{
					path: 'ccc',
					name: 'ccc',
					component: Ccc,
					children: [
						{
							path: 'ccc1',
							name: 'ccc1',
							component: Ccc1,
						}
					]
				}
			]
		}
  ]
})
