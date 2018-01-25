import * as types from '../store/mutation-types'
import API from '../utils/api.js'

export default {
  // 登录
  LOGIN: ({commit, getters}, data) => {
    return API.LOGINApi().then(res => {
      commit(types.LOGIN, res.token)
      return res.token
    }, function () {
        console.log('错误')
    })
  },
  getName: ({commit, getters}, data) => {
    API.getNameApi().then(res => {
        commit(types.GET_NAME, res.data)
    }, function () {
        console.log('错误')
    })
  }
}
