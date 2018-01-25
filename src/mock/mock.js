import Mock from 'mockjs'
export default Mock.mock('mock.json', {
  'code': 200,
  'msg': 'Get address successfully.',
  'result': {'resultCode': '2000000000', 'resultMessage': 'success'},
  'token': 100000,
  'data': {
    'pageSize': 10,
    'pageNo': 1,
    'totalCount': 92,
    'name': '小小莹',
    'list|1-10': [{
      'id|+1': 1,
      'email': '@EMAIL'
    }]
  }
})
