import Vue from 'vue'
import Vuex from 'vuex'
import restaurant from './restaurant'
import violation from './violation'
import city from './city'

// Vuex Initialization
Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions, and getters.
// This is empty right now, but later is will manage the state of our app
export default new Vuex.Store({
  modules: {
    restaurant,
    violation,
    city
  }
})
