export default {
	methods: {
		routerList() {
			return [
				{
					path: "/portal/aaa/aaa1",
					name: "aaa1"
				},
				{
					path: "/portal/aaa/aaa2",
					name: "aaa2"
				}
			]
		},
		test2(){
			return {
				aaa: [
					{
						path: "/portal/aaa/aaa1",
						name: "aaa1"
					},
					{
						path: "/portal/aaa/aaa2",
						name: "aaa2"
					}
				]
			}
		}
	}
}