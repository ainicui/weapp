import store from '../store/index'
class Point {
  constructor() {
    let userInfo = wx.getStorageSync('user_info')
    if (userInfo && userInfo.open_id && !store.state.userInfo) {
      store.state.userInfo = userInfo
    } else {
      wx.reLaunch({ url: '/pages/login' })
    }
  }
}

class http extends Point {
  constructor() {
    super();
  }
  request(url, params, method = 'POST') {
    return new Promise((resolve, rejects) => {
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: params,
        method: method,
        header: {
          'content-type': 'application/json', // 默认值
          'Authorization': store.state.userInfo.open_id || ''
        },
        success(res) {
          return resolve(res.data)
        }
      })
    })
  }
  uploadFile(url, filePath) {
    return new Promise((resolve, rejects) => {
      wx.uploadFile({
        url: url, //仅为示例，非真实的接口地址
        filePath: filePath,
        name: 'file',
        header: {
          'Authorization': store.state.userInfo.open_id
        },
        formData: {
          'user': 'test'
        },
        success(res) {
          if(res.code == 200){
            return resolve(res)
          }
        }
      })
    })
  }
}

export default new http()
