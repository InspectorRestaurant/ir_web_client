import _ from 'lodash'
import { $GET } from '@/store/lib/rest'
import router from '@/routers'
import { API_ROOT } from './constants'

let debouncedFetch

// // // //

// Project module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  fetchCollection: ({ state, commit, dispatch }) => {
    commit('fetching', true)

    let opts = {
      query: {
        page: state.page,
        per_page: state.per_page
      }
    }
    let api_endpoint = API_ROOT

    // Handles /api/restaurants/search
    if (state.city || state.filter) {
      api_endpoint += '/search'
      if (state.city) opts.query.city = state.city
      if (state.filter) opts.query.q = state.filter
    }

    // Fetches Collection from the server
    $GET(api_endpoint, opts)
    .then((json) => {
      commit('page', json.page)
      commit('per_page', json.per_page)
      commit('collection', json.items)
      commit('fetching', false)

      // Fetches the first model in response
      if (json.items[0]) dispatch('selectModel', json.items[0]._id)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  fetchModel: ({ state, commit }) => {
    commit('fetching_model', true)

    // Fetches Model from the server
    $GET(API_ROOT + '/' + state.selected_model_id)
    .then((json) => {
      commit('model', json)
      commit('fetching_model', false)
    })
    .catch((err) => {
      commit('fetching_model', false)
      throw err // TODO - better error handling
    })
  },

  selectModel: ({ commit, dispatch }, model_id) => {
    commit('selected_model_id', model_id)
    dispatch('fetchModel')
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
  setFilter ({ commit, dispatch }, filter) {
    if (!debouncedFetch) {
      debouncedFetch = _.debounce((localFilter) => {
        commit('filter', localFilter)
        dispatch('fetchCollection')
      }, 800)
    }
    debouncedFetch(filter)
  },

  // setCity
  // Updates the current city query
  setCity ({ commit, dispatch }, city) {
    commit('city', city)
    dispatch('fetchCollection')
  }

}
