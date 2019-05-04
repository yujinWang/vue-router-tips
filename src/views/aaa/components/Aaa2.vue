<template>
	<div class="site-info">
		<h1>{{$t("siteInfo.info")}}  vuex  {{$t("siteInfo.test")}}</h1>
		<h2>数值是{{num}}</h2>
		<button @click="addNum">+</button>
		<button @click="declareNum">-</button>
	</div>
</template>

<script>
	import { mapGetters,mapState,mapActions } from "vuex";
	export default {
		data() {
			return {

			}
		},
		components: {
			
		},
		computed: {
			...mapGetters(["count"])
		},
		methods: {
			...mapActions(["incrementStep","declareNum"])
		}

	}
</script>

