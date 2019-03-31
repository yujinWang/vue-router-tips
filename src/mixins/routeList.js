export default {
	computed: {
		aaa(){
			return  [
				{
					title: this.$t("common.project"),
					index: "1",
					logoImg: require("@/assets/earth.png"),
					subMenus: [
						{
							title: this.$t("common.linkInfo"),
							index: "/portal/aaa/aaa1"
						},
						{
							title: this.$t("common.siteInfo"),
							index: "/portal/aaa/aaa2"
						}
					]
				}
			]
		},
		bbb(){
			return [
				{
					title: this.$t("common.application"),
					index: "1",
					logoImg: require("@/assets/qiehuan.png"),
					subMenus: [
						{
							title: this.$t("common.projectName"),
							index: "/portal/bbb/bbb1"
						},
						{
							title: this.$t("common.projectAge"),
							index: "/portal/bbb/bbb2"
						}
					]
				}
			]
		},
		ccc(){
			return [
				{
					title: this.$t("common.setting"),
					index: "1",
					logoImg: require("@/assets/wifi.png"),
					subMenus: [
						{
							title: this.$t("common.nameSet"),
							index: "/portal/ccc/ccc1"
						},
						{
							title: this.$t("common.ageSet"),
							index: "/portal/ccc/ccc2"
						}
					]
				}
			]
		},
		ddd() {
			return [
				{
					title: "项目数据",
					index: "1",
					logoImg: require("@/assets/xinhao.png"),
				}
			]
		}
	}
}