import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city:'上海'
	},
	actions:{
		changeCity(ctx,obj){
			ctx.commit('changeCity',obj)
			console.log(obj)
		}
	},
	mutations:{
		changeCity(state,obj){
			this.state.city = obj
		}
	}
})