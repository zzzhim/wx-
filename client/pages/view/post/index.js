// 引入数据
import post_content from "../../../data/posts-data.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    onPostTap(event) {
        // 获取自定义属性
        var postId = event.currentTarget.dataset.postid
        // console.log(postId)
        // 跳转页面
        wx.navigateTo({
            "url": `./post-detail/post-detail?id=${postId}`
        })
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 页面加载的时候把数据传递给data
        this.setData({post_content})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    // console.log(111)
    }
})