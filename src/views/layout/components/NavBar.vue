<template>
	<div class="navbar">
		<div class="nav-left">
			<router-link tag="li" to="/portal/aaa">{{$t("common.netWork")}}</router-link>
			<router-link tag="li" to="/portal/bbb">{{$t("common.application")}}</router-link>
			<router-link tag="li" to="/portal/ccc">{{$t("common.setting")}}</router-link>
			<router-link tag="li" to="/portal/ddd">{{$t("common.project")}}</router-link>
		</div>
		<div class="nav-right">
			<div class="select-lan">
				<el-select v-model="selectValue" @change="langChange" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				selectValue: '',
				options: [
					{
						value: 'cn',
						label: '中文'
					}, {
						value: 'en',
						label: 'English'
					}
				]
			}
		},
		created() {
			let that = this;
			that.selectValue = localStorage.lang == undefined ? 'cn' : localStorage.lang
		},
		methods: {
			langChange(e) {
				localStorage.setItem('lang', e);
				this.$i18n.locale = e;
			}
		},

	}
</script>
<style scoped>
ul,li {
	margin: 0;
	padding: 0;
	list-style: none;
}
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
.nav-left {
	height: 60px;
	margin-left: 190px;
	display: flex;
	align-items: center;
}
.nav-left li {
	height: 60px;
	line-height: 60px;
	margin: 0 10px;
	color: #FFFFFF;
	cursor: pointer;
	box-sizing: border-box;
}
li.router-link-active {
	color: #d3f610;
	border-bottom: 3px solid #d3f610;
}
.nav-right {
	position: absolute;
	right: 50px;
}
.nav-right .select-lan {
	width: 100px;
}
</style>