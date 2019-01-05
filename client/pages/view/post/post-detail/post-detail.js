// pages/view/post/post-detail/post-detail.js
import postsData from "../../../../data/posts-data.js"
// 获取小程序实例
var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        AudioPlayBool: false
    },

    // onColletionTap(event) {
    //     // 缓存的上限最大不能超过10MB
    //     // 获取缓存
    //     // var key = wx.getStorageSync('key')
    //     // console.log(key)
    // },

    // onShareTap(event) {
    //     // 删除缓存
    //     // wx.removeStorageSync('key')
    //     // 清除所有缓存
    //     // wx.clearStorageSync()
    // },

    // 音乐播放
    onMusicTap(event) {
        // var that = this

        // 判断音乐是否播放
        if (this.data.AudioPlayBool) {
            wx.pauseBackgroundAudio()
            // this.data.AudioPlayBool = false
            this.setData({
                AudioPlayBool: false
            })
        }else {
            wx.playBackgroundAudio({ // 播放
                // 测试音频 音频只能是流媒体，不能使用本地音频
                dataUrl: this.data.postData.music.url,
                title: this.data.postData.music.title,
                // 音乐封面也必须使用网络地址
                coverImgUrl: this.data.postData.music.coverImg
            })
            // this.data.AudioPlayBool = true
            this.setData({
                AudioPlayBool: true
            })
        }
    },

    // 收藏 
    onColletionTap() {
        // 获取收藏缓存
        var postsCollected = wx.getStorageSync('posts_collected')
        // 获取当前收藏状态
        var postCollected = postsCollected[this.data.postData.postId]
        // 收藏状态取反
        postCollected = !postCollected
        // 更新文章是否收藏的缓存值
        postsCollected[this.data.postData.postId] = postCollected
        wx.setStorageSync('posts_collected', postsCollected)
        // 更新数据绑定变量,切换收藏图片
        this.setData({
            collected: postCollected
        })

        // 交互 显示成功或者失败
        wx.showToast({
            title: postCollected ? '收藏成功' : '取消收藏',
            duration: 1000
        })
    },

    // 分享
    onShareTap(event) {
        var itemList = [
            "分享给微信好友",
            "分享到朋友圈",
            "分享到QQ",
            "分享到微博"
        ]

        wx.showActionSheet({
            itemList,
            itemColor: '#333333',
            success(res) { // 接口调用成功的回调函数
                // res.cancel 用户是不是点击了取消按钮
                // res.tapIndex 用户点击了哪一个数组元素
                wx.showModal({
                    title: '用户' + itemList[res.tapIndex],
                    content: "用户是否取消?" + '现在无法实现分享功能,什么时候能支持呢',
                })

                // console.log(res.cancel)
            },
            complete() { // 接口调用结束的回调函数（调用成功、失败都会执行）

            }
        })
    },

    setAudioMonitor:function () {
        var that = this
        // 监听进入后台的音乐播放状态
        wx.onBackgroundAudioPlay(() => { // 播放
            that.setData({
                AudioPlayBool: true
            })
            app.globalData.g_isPlayingMusic = true
            app.globalData.g_currentMusicPostId = that.data.postData.postId
        })

        wx.onBackgroundAudioPause(() => { // 暂停
            that.setData({
                AudioPlayBool: false
            })
            app.globalData.g_isPlayingMusic = false
            app.globalData.g_currentMusicPostId = null
        })

        wx.onBackgroundAudioStop(() => { // 停止
            that.setData({
                AudioPlayBool: false
            })
            app.globalData.g_isPlayingMusic = false
            app.globalData.g_currentMusicPostId = null
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        var postId = options.id
        // 通过循环取出响应的数据
        postsData.forEach((value, index) => {
            if (value.postId == postId) {
                // 如果在onLoad方法中,不是异步的去执行一个数据绑定
                // 则不需要使用this.setData方法
                // 只需要对this.data赋值即可实现数据绑定
                this.setData({ postData: value })
                // this.data.postData = value
                // console.log(this.data.postData.postId)

            }
        })

        // 设置缓存
        // wx.setStorage({
        //     key: 'key',
        //     data: '风暴英雄',
        // })
        // 修改缓存
        // wx.setStorage({
        //     key: 'key',
        //     data: {
        //         game: '风暴英雄',
        //         developer: '暴雪'
        //     },
        // })

        var postsCollected = wx.getStorageSync('posts_collected')
        // 存在
        if(postsCollected) {
            var postCollected = postsCollected[postId] ? true : false
            this.setData({
                // 更新数据绑定变量,切换收藏图片
                collected: postCollected
            })
        }else { // 不存在
            var postCollected = {}
            postCollected[postId] = false
            wx.setStorageSync('posts_collected', postCollected)
        }
        var that = this

        // 获取 app.js 中设置的全局变量
        if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicPostId === Number(postId)) {
            that.setData({
                AudioPlayBool: true
            })
        }
        this.setAudioMonitor()
    }
})
