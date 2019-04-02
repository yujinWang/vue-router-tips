<template>
	<div class="aaa1"
		v-loading="loading2"
		:element-loading-text="loadingText"
		element-loading-spinner="el-icon-loading"
		element-loading-background="rgba(0, 0, 0, 0.8)"
	>
		网络数据Aaa1
	</div>
</template>
<script>
	export default {
		data() {
			return {
				loading2: true //变量命名的一些规则，若这里使用loading的话英文显示的时候会显示true而不是loading
			}
		},
		created() {
			this.closeLoading();
		},
		computed: {
			loadingText() {
				return this.$t("common.loadingText");
			}
		},
		methods: {
			closeLoading() {
				setTimeout(()=>{
					this.loading2 = false;
				},3000)
			}
		}
	}
</script>
<style scoped>
	.aaa1 {
		height: 100%;
	}
</style>