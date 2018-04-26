import _ from 'lodash'

// // // //
// Adds a Collection to a Vuex module

export const COLLECTION_GETTERS = {
  collection: state => {
    return state.collection
  },
  fetching: state => {
    return state.fetching
  }
}

export const COLLECTION_MUTATIONS = {
  collection (state, collection) {
    state.collection = collection
  },
  fetching (state, isFetching) {
    state.fetching = isFetching
  }
}

export const COLLECTION_STATE = {
  collection: [],
  fetching: false
}

// // // //
// Pagination Mixins

export const PAGINATION_STATE = {
  start: 0,
  pageSize: 6,
  currentPage: 1,
  paginatedCollection: []
}

export const PAGINATION_ACTIONS = {
  pageSize ({ dispatch, commit }, newSize) {
    commit('pageSize', newSize)
    dispatch('fetchCollection')
  },
  goToPage ({ dispatch, commit }, page) {
    commit('currentPage', page)
    dispatch('fetchCollection')
  },
  prevPage ({ dispatch, state, commit }) {
    commit('currentPage', (state.currentPage - 1 || 1))
    dispatch('fetchCollection')
  },
  nextPage ({ dispatch, state, commit }) {
    commit('currentPage', state.currentPage + 1)
    dispatch('fetchCollection')
  },
  firstPage ({ dispatch, commit }) {
    commit('currentPage', 1)
    dispatch('fetchCollection')
  },
  lastPage ({ dispatch, state, commit }) {
    let collection = state.filteredCollection || state.collection
    commit('currentPage', Math.ceil(collection.length / state.pageSize))
    dispatch('fetchCollection')
  }
}

export const PAGINATION_MUTATIONS = {
  currentPage (state, page) {
    state.currentPage = page
    state.start = (page - 1) * state.pageSize
  },
  pageSize (state, newSize) {
    state.pageSize = newSize
    state.start = (state.currentPage - 1) * state.pageSize
  },
  start (state, start) {
    state.start = start
  },
  paginatedCollection (state, paginatedCollection) {
    state.paginatedCollection = paginatedCollection
  }
}

export const PAGINATION_GETTERS = {
  pages: state => {
    let collection = state.filteredCollection || state.collection
    let total = Math.ceil(collection.length / state.pageSize)
    let current = Math.ceil(state.start / state.pageSize) + 1
    let pages = _.times(total, index => {
      return {
        current: index + 1 === current,
        page: index + 1
      }
    })

    return pages
  },
  currentPage: state => {
    return state.currentPage
  },
  pageSize: state => {
    return state.pageSize
  },
  paginationQuery: state => {
    return {
      per_page: state.pageSize,
      page: state.currentPage
    }
  },
  totalPages: state => {
    let collection = state.filteredCollection || state.collection
    return Math.ceil(collection.length / state.pageSize)
  },
  prevPage: state => {
    return state.currentPage - 1 > 0 ? state.currentPage - 1 : false
  },
  nextPage: state => {
    let collection = state.filteredCollection || state.collection
    let total = Math.ceil(collection.length / state.pageSize)
    return state.currentPage < total ? state.currentPage + 1 : false
  },
  paginatedCollection: state => {
    return state.paginatedCollection
  }
}
