import vue from 'vue';
import vuex from 'vuex';
import rootStatus from './rootStates';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
vue.use(vuex);
const store = new vuex.Store({
	rootStatus,
	actions,
	getters,
	mutations
})
export default store;