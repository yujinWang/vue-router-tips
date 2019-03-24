<template>
	<div class="sidebar">
		<router-link v-for="(item,index) in $route.meta" :key="index" :to="item.path">{{item.name}}</router-link>
	</div>
</template>
<script>
	import routerList from "@/mixins/routeList.js"
	export default {
		mixins: [routerList],
		data() {
			return {
				toPath: []
			}
		},
		mounted () {
			this.test();
		},
		methods: {
			test(){
				this.$route.meta.forEach(item => {
					this.toPath = item;
				});
			}
		},
		watch: {
			"$route":"test"
		}
	}
</script>
<style scoped>
.sidebar {
	width: 200px;
	height: 100%;
	background: #311d1d;
}
.sidebar a {
	height: 30px;
	line-height: 40px;
	font-size: 20px;
	color: #FFFFFF;
	display: block;
	text-decoration: none;
}
</style>