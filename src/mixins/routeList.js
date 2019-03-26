export default {
	computed: {
		aaa(){
			return  [
				{
					title: "网络数据1",
					index: "1",
					subMenus: [
						{
							title: "网络Aaa1",
							index: "/portal/aaa/aaa1"
						},
						{
							title: "网络Aaa2",
							index: "/portal/aaa/aaa2"
						}
					]
				}
			]
		},
		bbb(){
			return [
				{
					title: "项目数据1",
					index: "1",
					subMenus: [
						{
							title: "项目Bbb1",
							index: "/portal/bbb/bbb1"
						},
						{
							title: "项目Bbb2",
							index: "/portal/bbb/bbb2"
						}
					]
				}
			]
		},
		ccc(){
			return [
				{
					title: "设置1",
					index: "1",
					subMenus: [
						{
							title: "设置Ccc1",
							index: "/portal/ccc/ccc1"
						},
						{
							title: "设置Ccc2",
							index: "/portal/ccc/ccc2"
						}
					]
				}
			]
		}
	}
}