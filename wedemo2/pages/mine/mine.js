Page({

  sy() {
    var postsData = []
    postsData.push(this.getUserValue());
    //console.log(postsData)
    var len1 = postsData.length;
    console.log(len1)
    for (var i = 0; i < len1; i++) {
      console.log(i)
      for (var x = 0; x < 2; x++) {
        console.log(x)
      }
    }
  },
  getUserValue() {
    try {
      var Value = wx.getStorageSync('user')
      if (Value) {
        console.log(Value)
        return Value
      }
    } catch (e) {
      // Do something when catch error
    }
  },
  getData() {
    var res = {}
    //var lid ={}
    var res = require('../../data/data.js').postList;
    //var postsData =[]
    var postsData = this.getUserValue();
    console.log(postsData)
    var len1 = postsData.length;
    var len2 = res.length;
    var collectionValue = []//这个数组应该是全局变量吗？
    for (var i = 0; i < len1; i++) {
      console.log("FF")
      var lid = postsData[i]
      console.log(lid)
      for (var x = 0; x < len2; x++) {
        if (res[x].id == lid) { collectionValue.push(res[x]) }
      }
    }
    console.log(collectionValue)
    return collectionValue
  },


  getAllPostData() {
    var res = {}
    res = require('../../data/data.js').postList;
    console.log(res)
    return res;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ postList: this.getData() })
    /*var A =[]
    var B =[1,1]
    var C = [1, 2]
    A.push(B)
    A.push(C)
    //this.sy()
    //this.getUserValue()
   // this.getAllPostData()
    this.setData({ postList: this.getData()})
    //console.log(this.L.postId)
    /*wx.getStorage({
      key: 'user',
      success: function(res) {console.log(res.data)},
      fail: function (res) { console.log(失败)},
      complete: function(res) {},
    })*/
  },



})

