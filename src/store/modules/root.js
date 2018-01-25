import * as types from '../mutation-types'

const state = {
  nameList: null,
  token: null
}
const getters = {}
const mutations = {
  [types.GET_NAME] (state, data) {
    state.nameList = data
  },
  [types.LOGIN] (state, data) {
    state.token = data
  },
}

export default {
  state,
  getters,
  mutations
}
