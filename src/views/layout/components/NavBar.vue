<template>
	<div class="navbar">
		<div class="nav-left">
			<router-link to="/portal/aaa">aaa</router-link>
			<router-link to="/portal/bbb">bbb</router-link>
			<router-link to="/portal/ccc">ccc</router-link>
		</div>
		<div class="nav-right">
			<span @click="changeLanguage">语言切换</span>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			changeLanguage(){
				
			}
		}
	}
</script>
<style scoped>
.navbar {
	height: 60px;
	display: flex;
	align-items: center;
	font-size: 20px;
	background: #1f0808;
	position: relative;
}
.navbar a {
	text-decoration: none;
	color: #FFFFFF;
	margin: 0 15px;
}
.nav-right {
	position: absolute;
	right: 50px;
}
.nav-right span {
	font-size: 20px;
	color: #FFFFFF;
}
</style>