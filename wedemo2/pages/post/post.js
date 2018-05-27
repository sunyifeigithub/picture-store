const app = getApp()
Page({
  data: {
    navbar: ['已收藏图片', '推荐给好友'],
  currentTab: 0,
  userInfo: {},
  hasUserInfo: false,
  canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  navbarTap: function (e) {
    var num = e.currentTarget.dataset.idx
    console.log(num)
    if(num == 0){
      wx.navigateTo({
        url: "../mine/mine"
          })
        }
    else {
      wx.navigateTo({
          url: "../qr/qr"
        })
      }
    this.setData({
      currentTab: e.currentTarget.dataset.idx

    })
  },
  onLoad: function () {
    
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
    
})
