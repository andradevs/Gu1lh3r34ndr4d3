import Vue from 'vue';
import Vuex from 'vuex';
import Api from './controllers/Api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    //States da Aplicação
    state:{
        pokemon:{},
        loading:false
    },
    mutations: {
        async updatePokeID(state, pokeID) {
            state.loading = true
            state.pokemon = await Api.getDetails(pokeID)
            state.loading =false
        }
    },
    actions: {
        updatePokeID({commit}, e ) {
            commit('updatePokeID', e.currentTarget.id);
        }
    }
})