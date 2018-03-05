// Restaurant Module mutations
export default {
  collection (state, collection) {
    state.collection = collection
  },
  model (state, model) {
    state.model = model
  },
  page (state, page) {
    state.page = page
  },
  per_page (state, per_page) {
    state.per_page = per_page
  },
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  filter (state, filter) {
    state.filter = filter
  },
  showingInactive (state, show) {
    state.showingInactive = show
  },
  orderBy (state, orderBy) {
    state.orderBy = orderBy
  }
}
