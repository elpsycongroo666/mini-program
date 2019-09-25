/* 
1.使用封装好的异步代码来发送请求，
  1 在小程序中 要引入js文件的话，建议把路径补全
  2 在被导出的js中 使用
  export const 变量名
  在导入的时候 直接通过 解构的代码来获取
  import {变量名} from "路径";
*/
import {request} from '../../request/index.js'
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
    request({
      url: '/home/swiperdata',
    }).then(result => {
      this.setData({
        swiperList: result.data.message
      })
    })
  },

  // 获取首页导航数组
  getCatItems(){
      request({
      url: '/home/catitems',
    })
    .then(result => {
      this.setData({
        catItems : result.data.message
      })
    })
  },

  // 获取首页楼层数组
  getFloorData(){
    request({
      url: '/home/floordata',
    }).then(result => {
      this.setData({
        floorList : result.data.message
      })
    })
  }
})