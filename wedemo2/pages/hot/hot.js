import { postList } from '../../data/data.js';
Page({
  data: {
  },
  onLoad: function (options) {
    var postid = postList;
    this.data.currentpostid = postid;
    //this.newPostList()
    //this.setData({ postList:PostList})
    this.setData({ postList: this.newPostList() })
    //this.bad()

  },
  recoverData: function (event) {
    var pl = postList;
    var len = pl.length
    console.log(len)
    for (var i = 0; i < len; i++) {
      pl[i].collectionStatus = false
    }
    console.log(postList)
  },
  newPostList: function (event) {
    this.recoverData()
    var userV = wx.getStorageSync('user')
    console.log(userV)
    var x = postList;
    var len1 = userV.length
    var len2 = x.length;
    for (var i = 0; i < len1; i++) {
      var y = userV[i]
      for (var z = 0; z < len2; z++) {
        if (x[z].id == y) { console.log("b" + y), x[z].collectionStatus = true }
      }
    }
    console.log(x)
    return x

  },
  onCollectionTap: function (event) {
    var userV = wx.getStorageSync('user') || []
    //console.log("aass"+x)
    var eventId = event.currentTarget.dataset.postId
    var judge = 1;
    var len = userV.length
    var pl = postList
    for (var i4 = 0; i4 < len; i4++) {
      var t = userV[i4]
      if (t == eventId) { ; userV.splice(i4, 1); judge = 0; break }
      //postList[i3].collectionStatus=false;
    }
    if (judge == 1) { userV.unshift(eventId) }//userV.remove(eventId)
    wx.setStorageSync('user', userV)
    this.setData({ postList: this.newPostList() })
  },
  qp: function (event) {
    
  }
})