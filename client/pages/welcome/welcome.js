Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    // 开启小程序被点击时触发
    onTap() {
        // 跳转页面 从父页面跳转到子页面
        // wx.navigateTo({
        //     url: '../view/post/index'
        // })

        // 跳转页面 不存在子父的关系
        // wx.redirectTo({
        //     url: '../view/post/index'
        // })

        wx.switchTab({
            url: '../view/post/index'
        })
    }
})