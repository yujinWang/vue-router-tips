<template>
	<div class="site-info">
		<h1>{{$t("siteInfo.info")}}  vuex  {{$t("siteInfo.test")}}</h1>
		<h2>数值是{{num}}</h2>
		<button @click="addNum">+</button>
		<button @click="declareNum">-</button>
	</div>
</template>

<script>
	import { mapGetters,mapActions } from "vuex";
	export default {
		data() {
			return {

			}
		},
		components: {
			
		},
		computed: {
			...mapGetters(["num"])
		},
		methods: {
			...mapActions(["addNum","declareNum"])
		}

	}
</script>

