// index.js
const app = getApp()

Page({
  data: {
    userInfo: {
      nickName: '',
      avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    },
    canIUseButttonChooseAvatar: wx.canIUse('button.open-type.chooseAvatar'),
    canIUseInputNickname: wx.canIUse('input.type.nickname'),
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseGetUserInfo: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad() {
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserProfile() {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
        })
      }
    })
  },
  getUserInfo(e) {
    this.setData({
      userInfo: e.detail.userInfo,
    })
  },
  bindChooseavatar(e) {
    this.setData({
      'userInfo.avatarUrl': e.detail.avatarUrl
    })
  },
  bindChange(e) {
    this.setData({
      'userInfo.nickName': e.detail.value
    })
  }
})
