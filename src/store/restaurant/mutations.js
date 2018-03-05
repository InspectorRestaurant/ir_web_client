// Restaurant Module mutations
export default {
  collection (state, collection) {
    state.collection = collection
  },
  model (state, model) {
    state.model = model
  },
  selected_model_id (state, model_id) {
    state.selected_model_id = model_id
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
  fetching_model (state, isFetching) {
    state.fetching_model = isFetching
  },
  filter (state, filter) {
    state.filter = filter
  },
  city (state, city) {
    state.filter = ''
    state.city = city
  },
  showingInactive (state, show) {
    state.showingInactive = show
  },
  orderBy (state, orderBy) {
    state.orderBy = orderBy
  }
}
