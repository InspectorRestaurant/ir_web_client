// Violation Module mutations
export default {
  collection (state, collection) {
    state.collection = collection
  },
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  fetched (state, hasFetched) {
    state.fetched = hasFetched
  }
}
