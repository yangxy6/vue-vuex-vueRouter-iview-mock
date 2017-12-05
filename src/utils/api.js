import axios from 'axios'
import { Message } from 'iview'
import store from '../store'
import qs from 'qs'

import Mock from 'mockjs'
Mock.mock('mock.json', {
  data: {
    'name': '小小莹',
    'list|1-10': [{
			'id|+1': 1,
			'email': '@EMAIL'
	  }]
  }
})
const fetch = (url, params, method) => {
  // store.commit('SHOW_PAGE_LOADING')
  return new Promise((resolve, reject) => {
    let ajx
    if (method === 'get') {
      ajx = axios.get(url, params)
    } else {
      let p = qs.stringify({
        params: JSON.stringify(params)
      })
      ajx = axios.post(url, p)
    }
    ajx.then(response => {
      // const res = response.data
      // if (res.code !== '200') {
      //   Message.error({
      //     content: res.msg,
      //     duration: 5
      //   })
      //   resolve({})
      // } else {
      resolve(response.data)
      // }
    }).catch((error) => {
      console.log(error)
      reject(error)
      Message.error({
        content: '服务器错误，请联系管理员',
        duration: 5
      })
    })
  })
}


export default {
  /* home */
  getNameApi: params => fetch('mock.json', params)
}
