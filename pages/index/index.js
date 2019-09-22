Page({
  data : {
    swiperList : [],
    catItems : []
  },
  onLoad(){
    this.getSwiperData()
    this.getCatItems()
  },
  // 获取轮播图数据
  getSwiperData(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (result) => {
        // console.log(result)
        this.setData({
          swiperList: result.data.message
        })
      },
    });
  },

  // 获取首页导航
  getCatItems(){
      wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (result) => {
        console.log(result)
        this.setData({
          catItems : result.data.message
        })
      }
    });
      
  }
})