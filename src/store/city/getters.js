import _ from 'lodash'

// City Module Getters
export default {
  collection: state => {
    return state.collection
  },
  fetching: state => {
    return state.fetching
  },
  fetched: state => {
    return state.fetched
  },
  filter: state => {
    return state.filter
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
