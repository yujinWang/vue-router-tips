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
	height: 600px;
	background: greenyellow;
}
</style>