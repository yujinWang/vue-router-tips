const mutations = {
	increment(state, payload) {
		state.count += payload.step || 1;
	}
}
export default mutations;