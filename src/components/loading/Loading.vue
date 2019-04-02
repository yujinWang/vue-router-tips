<template>
	<div class="loading">
		<div
			:loading="loading2"
			:element-loading-text="loadingText"
			element-loading-spinner="el-icon-loading"
			element-loading-background="rgba(0, 0, 0, 0.8)"
		>

		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			loading2: {
				type: Boolean,
				default:function(){
					return true
				}
			},
			loadingText: {
				type: String,
				default:function(){
					return "拼命加载中"
				}
			}
		}
	}
</script>
<style scoped>
	
</style>