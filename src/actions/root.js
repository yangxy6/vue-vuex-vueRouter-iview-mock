import * as types from '../store/mutation-types'
import API from '../utils/api.js'

export default {
  getName: ({commit, getters}, data) => {
    API.getNameApi().then(res => {
      console.log(res)
        commit(types.GET_NAME, res.data)
    }, function () {
        console.log('错误')
    })
  }
}
