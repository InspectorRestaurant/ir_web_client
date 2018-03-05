// import _ from 'lodash'
import { $GET } from '@/store/lib/rest'
import router from '@/routers'
import { API_ROOT } from './constants'

// // // //

// Project module actions
// functions that causes side effects and can involve asynchronous operations.
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

  fetchModel: ({ state, commit }, model_id) => {
    commit('fetching', true)

    // Fetches Model from the server
    $GET(API_ROOT + '/' + model_id)
    .then((json) => {
      commit('model', json)
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

  submitSearch  ({ state, commit, dispatch }) {
    router.push('/sites')
  },

  // module/toggleInactive
  toggleInactive ({ state, commit, dispatch }) {
    if (state.showingInactive) {
      commit('showingInactive', false)
    } else {
      commit('showingInactive', true)
    }
    // Re-fetches the collection
    dispatch('fetchCollection')
  },

  // module/setFilter
  // Updates the current search query, invokes the module/filter mutation
  setFilter ({ commit }, filter) {
    commit('filter', filter)
  }
}
