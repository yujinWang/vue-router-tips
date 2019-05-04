const getters = {
	someLists: state => param => {
		return state.someLists.filter(() => param.done)
	}
}
export default getters;