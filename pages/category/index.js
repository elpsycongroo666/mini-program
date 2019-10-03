
import {request} from '../../request/index'
Page({
  data : {
    // 菜单列表
    menuList : [],
    // 商品列表
    goodsList : [],
    // 当前选中的
    currentIndex: 0
  },
  // 接口返回值
  Cates : [],
  // 页面一加载就执行的
  onLoad(){
    this.loadData();
  },
  // 获取本地还是发送其扭曲
  loadData(){
    // 获取本地的数据
    const storageData = wx.getStorageSync("cates");
      if(storageData){//判断本地中是否有数据
        if(Date.now() - storageData.time > 1000 * 10){//判断本地的数据是否过期
          this.getData() //过期就发送请求
        }else{
          // 数据没有过期 使用这个数据
          this.Cates = storageData.data;
          const menuList = this.Cates.map(v => v.cat_name);
          const goodsList = this.Cates[0].children;
          this.setData({
            menuList,
            goodsList
          })
        }
      }else{//没有数据 就发送请求
        this.getData()
      }
  },
  // 获取分类数据
  getData(){
    request({
      url : '/categories'
    }).then(res => {
      this.Cates = res.data.message;
      // 请求成功之后 将数据存到本地
      wx.setStorageSync("cates", {
        data : res.data.message,
        time: Date.now() //存储进去的时候
      });
      const menuList = this.Cates.map(v => v.cat_name);
      const goodsList = this.Cates[0].children;
      this.setData({
        menuList,
        goodsList
      })
    })
  },
  // 点击菜单列表
  handleIndex(e){
    const {index} = e.target.dataset;
    const goodsList = this.Cates[index].children;
    // console.log(this.Cates)
    this.setData({
      currentIndex:index,
      goodsList
    })
  }
})