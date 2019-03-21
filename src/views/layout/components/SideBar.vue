<template>
	<div class="sidebar">
		<router-link v-for="(item,index) in toPath" :key="index" :to="item.path">{{item.name}}</router-link>
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
				//console.log(this.$route);
				if(this.$route.name == "aaa"){
					this.toPath = this.test2()["aaa"];
				}else if(this.$route.name == "bbb"){

				}else if(this.$route.name == "ccc"){
					
				}
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