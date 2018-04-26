// Main actions
export default {
  showSplash ({ commit }) {
    commit('splash', true)
  },
  hideSplash ({ commit }) {
    commit('splash', false)
  }
}
