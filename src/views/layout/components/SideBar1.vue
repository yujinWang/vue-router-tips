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
						<!-- <i class="el-icon-location"></i> -->   <!--element menu默认图标-->
						<img class="logo-img" :src="item.logoImg" alt="">
						<span>{{item.title}}</span>
					</template>
					<el-menu-item-group v-for="(item,subIndex) in item.subMenus" :key="subIndex">
						<el-menu-item :index="item.index">"{{item.title}}"</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			 </template>
				<!-- 无子菜单-暂时放置 -->
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
		created() { //经测试created和mounted都可达到相同的效果
			this.initRoute(); //万恶的忘记初始化，导致的结果就是刷新后左侧菜单栏不可见
		},
		methods: {
			initRoute(){
				let rootKey = this.$route.meta.root;
				this.menus = this[rootKey];
				this.activeIndex = this.$route.fullPath;
				// if(rootKey == "ddd"){ //关于只显示一级菜单的处理-暂不处理
				// 	this.hasChildren = false;
				// }
				// this.hasChildren = true;
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
	.sidebar .logo-img {
		width: 20px;
	}
</style>