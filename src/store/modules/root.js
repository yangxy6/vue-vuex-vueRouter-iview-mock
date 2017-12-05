import * as types from '../mutation-types'

const state = {
  nameList: null
}
const getters = {}
const mutations = {
  [types.GET_NAME] (state, data) {
    state.nameList = data
  }
}

export default {
  state,
  getters,
  mutations
}
