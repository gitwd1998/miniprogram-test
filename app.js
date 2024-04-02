// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      timeout: 3000,
      success: res => {
        console.log('wx.login', res)
        // 发送 res.code 通过request方法到后台换取 openId, sessionKey, unionId做后续操作
        wx.request({
          url: 'https://gitwd.com/wd/weixin/code2Session',
          method: 'GET',
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: res => {
            console.log(res)
          },
          fail: err => {
            console.error(err)
          },
        })
      },
      fail: err => {
        console.error(err)
      },
    })
    
  },
  globalData: {
    userInfo: null
  }
})
