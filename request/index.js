
// 先定义一个初始化的值
let loadTime = 0;
export const request = (params) => {
    // 每次发起请求的时候都会出现一个loading
    wx.showLoading({
        title: "努力加载中",
        mask: true
    });
    // 每次请求都自增1
    loadTime++;
    // 先存储一个公共的url
    const baseURL = "https://api.zbztb.cn/api/public/v1";
    return new Promise((resolve,reject) => {
        wx.request({
            ...params,
            url: baseURL + params.url,
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => {
                // 无论请求失败还是成功都会执行的
                loadTime--
                if(loadTime === 0){
                    // 所有请求都结束了
                    wx.hideLoading();
                }
            }
        });
          
    })
}