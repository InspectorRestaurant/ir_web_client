import { PAGINATION_MUTATIONS } from '@/store/lib/mixins'

// Restaurant Module mutations
export default {
  ...PAGINATION_MUTATIONS,
  collection (state, collection) {
    state.collection = collection
  },
  model (state, model) {
    state.model = model
  },
  selected_model_id (state, model_id) {
    state.selected_model_id = model_id
  },
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  fetching_model (state, isFetching) {
    state.fetching_model = isFetching
  },
  filter (state, filter) {
    state.currentPage = 1
    state.filter = filter
  },
  city (state, city) {
    state.currentPage = 1
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
