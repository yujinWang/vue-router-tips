<template>
	<div>
		<nav-bar />
		<div class="main">
			<side-bar />
			<main-page />
		</div>
	</div>
</template>
<script>
	import navBar from "@/views/layout/components/NavBar"
	import mainPage from "@/views/main-page/MainPage"
	import sideBar from "@/views/layout/components/SideBar"
	export default{
		data(){
			return {

			}
		},
		components:{ navBar, mainPage, sideBar}
	}
</script>
<style scoped>
.main {
	display: flex;
}
</style>