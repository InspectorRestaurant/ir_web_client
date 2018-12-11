import axios from 'axios'
import { API_ROOT } from './constants'

// // // //

// Violation module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  fetchCollection: ({ state, commit }) => {
    if (state.fetched) return
    commit('fetching', true)

    // Fetches Collection from the server
    axios.get(API_ROOT)
    .then(({ data }) => {
      commit('collection', data)
      commit('fetching', false)
      commit('fetched', true)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  }
}
