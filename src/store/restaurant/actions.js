import _ from 'lodash'
import { $GET } from '@/store/lib/rest'
import { API_ROOT, API_RESTAURANT_SHOW } from './constants'
import { PAGINATION_ACTIONS } from '@/store/lib/mixins'

let debouncedFetch

// // // //

// Restaurant module actions
export default {
  ...PAGINATION_ACTIONS,
  fetchCollection: ({ getters, commit, dispatch }) => {
    commit('fetching', true)
    commit('fetching_model', true)

    // Fetches Collection from the server
    $GET(getters['fetchUrl'], {
      query: {
        ...getters['paginationQuery'],
        ...getters['apiQuery']
      }
    })
    .then((json) => {
      commit('currentPage', json.page)
      commit('pageSize', json.per_page)
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
    $GET(API_RESTAURANT_SHOW + '?id=' + state.selected_model_id)
    .then((json) => {
      commit('model', json)
      setTimeout(() => {
        commit('fetching_model', false)
      }, 250)
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

  // setFilter
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
  },

  // clearQuery
  // Clears state.city and state.filter
  clearQuery ({ commit, dispatch }) {
    commit('city', 'Troy')
    commit('filter', '')
    commit('currentPage', 1)
    dispatch('fetchCollection')
  }

}
