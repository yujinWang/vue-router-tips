export default {
	computed: { //单独的菜单栏所需的图片和路径等信息-element中的menus中将router设置为true即可使用此处的index值作为路径进行跳转
		aaa(){
			return  [
				{
					title: "common.netWork",
					index: "1",
					logoImg: require("@/assets/earth.png"),
					subMenus: [
						{
							title: "common.linkInfo",
							index: "/portal/aaa/aaa1"
						},
						{
							title: "common.siteInfo",
							index: "/portal/aaa/aaa2"
						}
					]
				}
			]
		},
		bbb(){
			return [
				{
					title: "common.application",
					index: "1",
					logoImg: require("@/assets/qiehuan.png"),
					subMenus: [
						{
							title: "common.projectName",
							index: "/portal/bbb/bbb1"
						},
						{
							title: "common.projectAge",
							index: "/portal/bbb/bbb2"
						}
					]
				}
			]
		},
		ccc(){
			return [
				{
					title: "common.setting",
					index: "1",
					logoImg: require("@/assets/wifi.png"),
					subMenus: [
						{
							title: "common.nameSet",
							index: "/portal/ccc/ccc1"
						},
						{
							title: "common.ageSet",
							index: "/portal/ccc/ccc2"
						}
					]
				}
			]
		},
		ddd() {
			return [
				{
					title: "common.test", 
					index: "1",
					logoImg: require("@/assets/xinhao.png"),
				}
			]
		}
	}
}