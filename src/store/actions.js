const actions = {
	increment(context, param) {
		context.state.count += param.step;
		context.commit('increment', context.state.count)//提交改变后的state.count值
	},
	incrementStep({ state, commit, rootState }) {
		if (rootState.count < 100) {
			store.dispatch('increment', {//调用increment()方法
				step: 10
			})
		}
	}
}
export default actions;