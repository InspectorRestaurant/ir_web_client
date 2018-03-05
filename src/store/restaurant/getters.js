import _ from 'lodash'

// Project Module Getters
export default {
  collection: state => {
    return state.collection
  },
  model: state => {
    return state.model
  },
  selected_model_id: state => {
    return state.selected_model_id
  },
  page: state => {
    return state.page
  },
  per_page: state => {
    return state.per_page
  },
  fetching: state => {
    return state.fetching
  },
  fetching_model: state => {
    return state.fetching_model
  },
  filter: state => {
    return state.filter
  },
  city: state => {
    return state.city
  },
  showingInactive: state => {
    return state.showingInactive
  },
  orderBy: state => {
    return state.orderBy
  },
  filteredCollection: state => {
    return _.chain(state.collection)
    .filter(u => {
      return u.facility.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
    })
    // .orderBy(['data.report_data.warningCount', 'data.report_data.errorCount', 'data.report_data.noticeCount'], ['desc'])
    // .orderBy(['data.report_data.errorCount'], ['desc'])
    // .drop(state.start)
    // .take(state.pageSize)
    .value()
  }
}
