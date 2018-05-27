Page({
  data: {
    listTab: [
      { "code": "../hot/hot", "text": "热门" },
      { "code": "", "text": "人物" },
      { "code": "03", "text": "自然" },
      { "code": "04", "text": "建筑" },
      { "code": "05", "text": "食物" },
      { "code": "06", "text": "人文" },

    ],
    curIndex: 0,
    
    curcode: null,
    scrollLength: 0
  },
  onLoad: function () {
    console.log('onLoad')
    this.initData(0)
  },
  //初始化数据
  initData: function (index) {
    var that = this
    this.setData({
      curIndex: index,
      curText: that.data.listTab[index].text,

    })
  },
  //tab点击事件，刷新数据
  reflashData: function (event) {
    var that = this
    var index = event.currentTarget.dataset.index
    var curcode = that.data.listTab[index].code
    console.log(curcode)
    wx.navigateTo({
      url: curcode
    })
    //var str = that.data.listTab[index].text
    //   console.log(str)
    //移动滚动条,//200和35是我估算的
    if (index > this.data.curIndex) {
      if (that.data.scrollLength < 200) {
        this.setData({
          scrollLength: that.data.scrollLength + 35 * (index - that.data.curIndex)
        })
      }
    } else {
      if (that.data.scrollLength > 0) {
        this.setData({
          scrollLength: that.data.scrollLength - 35 * (that.data.curIndex - index)
        })
      }
    }
    //移动view位置，改变选中颜色
    this.initData(index)


  },
})