import { $GET } from '@/store/lib/rest'
import { API_ROOT } from './constants'

// // // //

// City actions
export default {
  fetchCollection: ({ state, commit }) => {
    commit('fetching', true)

    // Fetches Collection from the server
    $GET(API_ROOT)
    .then((json) => {
      commit('page', json.page)
      commit('per_page', json.per_page)
      commit('collection', json.items)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  toggleOrderBy ({ state, commit }) {
    const ORDER_ASC = 'asc'
    const ORDER_DESC = 'desc'
    if (state.orderBy === ORDER_ASC) {
      commit('orderBy', ORDER_DESC)
    } else {
      commit('orderBy', ORDER_ASC)
    }
  },

  // module/setFilter
  // Updates the current search query, invokes the module/filter mutation
  setFilter ({ commit }, filter) {
    commit('filter', filter)
  }
}
