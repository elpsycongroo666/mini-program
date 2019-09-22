Page({
  data : {
    // 轮播图数组
    swiperList : [],
    // 导航数组
    catItems : [],
    // 楼层数组
    floorList : []
  },

  onLoad(){
    this.getSwiperData()
    this.getCatItems()
    this.getFloorData()
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

  // 获取首页导航数组
  getCatItems(){
      wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (result) => {
        // console.log(result)
        this.setData({
          catItems : result.data.message
        })
      }
    });
  },

  // 获取首页楼层数组
  getFloorData(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: (result) => {
        console.log(result)
        this.setData({
          floorList : result.data.message
        })
      }
    });
      
  }
})