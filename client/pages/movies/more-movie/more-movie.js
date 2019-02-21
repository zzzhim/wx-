var doubanBase = getApp().globalData.doubanBase
var { convertToStarsArray, http } = require('../../../utils/util.js')

Page({
    data: {
        navigateTitle: '',
        requestUrl: '',
        totalCount: 0,
        movies: []
    },

    onLoad: function (options) {
        var category = options.category
        this.data.navigateTitle = category
        var dataUrl = ""

        switch (category) {
            case "正在热映":
                dataUrl = doubanBase + "/v2/movie/in_theaters" 

                break;
            case "即将上映":
                dataUrl = doubanBase + "/v2/movie/coming_soon"

                break;
            case "豆瓣TOP250":
                dataUrl = doubanBase + "/v2/movie/top250" 

                break;
        }

        this.data.requestUrl = dataUrl

        // 自定义请求
        http(dataUrl, this.processDoubanData)
    },
    // 下拉加载更多
    onScrollLower(event) {
        var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20"

        http(nextUrl, this.processDoubanData)

        // 加载loading
        wx.showNavigationBarLoading()
    },
    // 下拉刷新触发此函数
    onPullDownRefresh(event) {
        var refreshUrl = this.data.requestUrl + "?start=0&count=20"
        
        this.data.movies = []

        http(refreshUrl, this.processDoubanData)

        wx.showNavigationBarLoading()
    },

    // 处理数据
    processDoubanData(data) {
        var moviesDouban = data.subjects

        var movies = this.data.movies

        for (var i = 0; i < moviesDouban.length; i++) {
            var subject = moviesDouban[i]
            var title = subject.title
            if (title.length >= 6) {
                title = title.substring(0, 6) + "..."
            }
            var temp = {
                stars: convertToStarsArray(subject.rating.stars), // 评分
                title,
                average: subject.rating.average,
                coverageUrl: subject.images.large,
                movieId: subject.id,
            }
            // 每次添加20条电影数据
            movies.push(temp)
        }
        
        // 更新电影数据
        this.setData({
            movies
        })

        this.data.totalCount += 20
        // 隐藏loding
        wx.hideNavigationBarLoading()
        // 停止下拉刷新
        wx:wx.stopPullDownRefresh()
    },
    // 动态导航标题
    onReady(event) {
        var navigateTitle = this.data.navigateTitle

        wx.setNavigationBarTitle({
            title: navigateTitle,
        })
    },
    // 跳转
    onMovieTap(event) {
        var movieId = event.currentTarget.dataset.movieid

        wx.navigateTo({
            url: '../movie-detail/movie-detail?id=' + movieId
        })
    }
})