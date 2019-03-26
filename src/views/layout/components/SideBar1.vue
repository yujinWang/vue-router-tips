<template>
	<div class="sidebar">
		<el-col :span="24">
			<el-menu 
			 :default-active="activeIndex" 
			 :router="router"
			 class="el-menu-vertical-demo" 
			 @open="handleOpen" 
			 @close="handleClose" 
			 background-color="#545c64"
			 text-color="#fff" 
			 active-text-color="#ffd04b">
			 <!-- 有子菜单 -->
			 <template v-show="hasChildren">
				<el-submenu :index="item.index" v-for="(item,index) in menus" :key="index">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>{{item.title}}</span>
					</template>
					<el-menu-item-group v-for="(item,subIndex) in item.subMenus" :key="subIndex">
						<el-menu-item :index="item.index">"{{item.title}}"</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			 </template>
				<!-- 无子菜单 -->
				<!-- <template v-show="!hasChildren">
					<el-menu-item :index="item.index" v-for="(item,index) in menus" :key="index">
						<i class="el-icon-menu"></i>
						<span slot="title">{{item.title}}</span>
					</el-menu-item>
				</template> -->
			</el-menu>
		</el-col>
	</div>
</template>

<script>
	import routeList from "@/mixins/routeList";
	export default {
		mixins: [routeList],
		data() {
			return {
				router: true,
				hasChildren: true,
				menus: [],
				activeIndex: ""
			}
		},
		methods: {
			initRoute(){
				let rootKey = this.$route.meta.root; //读取meta中的root值得到aaa/bbb/ccc
				console.log(this.$route.meta["root"]);
				// this.activeIndex = this.$route.fullPath; //菜单激活状态保持
				this.menus = this[rootKey];
				// if(rootKey == "aaa") {
				// 	this.menus = [{
				// 		title: "网络数据1",
				// 		index: "1",
				// 		subMenus: [
				// 			{
				// 				title: "网络Aaa1",
				// 				index: "/portal/aaa/aaa1"
				// 			},
				// 			{
				// 				title: "网络Aaa2",
				// 				index: "/portal/aaa/aaa2"
				// 			}
				// 		]
				// 	}]
				// }else if(rootKey == "bbb"){
				// 	this.menus = [{
				// 		title: "项目数据1",
				// 		index: "1",
				// 		subMenus: [
				// 			{
				// 				title: "项目Bbb1",
				// 				index: "/portal/bbb/bbb1"
				// 			},
				// 			{
				// 				title: "项目Bbb2",
				// 				index: "/portal/bbb/bbb2"
				// 			}
				// 		]
				// 	}]
				// }else if(rootKey == "ccc"){
				// 	this.menus = [{
				// 		title: "设置1",
				// 		index: "1",
				// 		subMenus: [
				// 			{
				// 				title: "设置Ccc1",
				// 				index: "/portal/ccc/ccc1"
				// 			},
				// 			{
				// 				title: "设置Ccc2",
				// 				index: "/portal/ccc/ccc2"
				// 			}
				// 		]
				// 	}]
				// }
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		watch: {
			"$route": "initRoute"
		}
	}
</script>
<style scoped>
	.sidebar {
		width: 200px;
		background: #545c64;
	}
	.sidebar .el-menu {
		border-right: none;
	}
	.sidebar .el-submenu .el-menu-item {
		padding: 0 12px;
	}
</style>