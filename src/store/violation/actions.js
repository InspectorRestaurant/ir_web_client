import { $GET } from '@/store/lib/rest'
import { API_ROOT } from './constants'

// // // //

// Violation module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  fetchCollection: ({ state, commit }) => {
    if (state.fetched) return
    commit('fetching', true)

    // Fetches Collection from the server
    $GET(API_ROOT)
    .then((json) => {
      commit('collection', json)
      commit('fetching', false)
      commit('fetched', true)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  }
}
