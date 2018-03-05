import _ from 'lodash'

// City Module Getters
export default {
  collection: state => {
    return state.collection.sort()
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
  filteredCollection: state => {
    if (!state.filter) {
      return _.sortedUniq(state.collection)
    }

    _.chain(state.collection)
    .filter(u => {
      return u.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
    })
    // .orderBy(['data.report_data.warningCount', 'data.report_data.errorCount', 'data.report_data.noticeCount'], ['desc'])
    // .orderBy(['desc'])
    // .drop(state.start)
    // .take(state.pageSize)
    .sortedUniq()
    .value()
  }
}
