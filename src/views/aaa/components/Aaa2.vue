<!-- <template>
	<div class="aaa2">
		aaa22222222222222
		<h4>{{$t('languagePack.username')}}</h4>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>
<style scoped>
	
</style> -->


<template>
	<div>
		aaa22222222222222
		<span>{{$t('login.signin')}}</span>
		<el-select v-model="selectValue" @change="langChange" placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
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
			console.log(localStorage.lang)
			that.selectValue = localStorage.lang == undefined ? 'cn' : localStorage.lang
		},
		methods: {
			//语言切换
			langChange(e) {
				console.log(e)
				localStorage.setItem('lang', e);
				this.$i18n.locale = e;
			}
		}
	}
</script>

