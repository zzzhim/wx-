var doubanBase = getApp().globalData.doubanBase
var { convertToStarsArray, http } = require('../../utils/util.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        containerShow: true,
        searchPanelShow: false,
        searchResult: {}
    },
    // 跳转更多页面
    onMoreTap(event) {
        var category = event.currentTarget.dataset.category

        wx.navigateTo({
            url: 'more-movie/more-movie?category=' + category,
        })
    },

    // 跳转电影详情页面
    onMovieTap(event) {
        var movieId = event.currentTarget.dataset.movieid

        wx.navigateTo({
            url: 'movie-detail/movie-detail?id=' + movieId,
        })
    },

    getMovieListData(url, key, categoryTitle){
        var that = this
        wx.request({
            url: url,
            method: 'GET',
            success(res) { // 成功
                that.processDoubanData(res.data.subjects, key, categoryTitle)
            },
            fail(err) { // 失败
                console.log(err)
            }
        })
    },

    onBindFocus(event) {
        this.setData({
            containerShow: false,
            searchPanelShow: true
        })
    },

    onCancelImgTap() {
        this.setData({
            containerShow: true,
            searchPanelShow: false,
            searchResult: {}
        })
    },

    onBindBlur(event) {
        var text = event.detail.value
        var searchUrl = doubanBase + `/v2/movie/search?q=${ text }`


        this.getMovieListData(searchUrl, "searchResult", "")
    },


    // 处理从豆瓣取出来的数据
    processDoubanData(moviesDouban, key, categoryTitle) {
        var movies = []
        for(var i = 0; i < moviesDouban.length; i++) {
            var subject = moviesDouban[i] 
            var title = subject.title
            if(title.length >= 6) {
                title = title.substring(0,6) + "..."
            }
            var temp = {
                stars: convertToStarsArray(subject.rating.stars),
                title,
                average: subject.rating.average,
                coverageUrl: subject.images.large,
                movieId: subject.id,
            }
            movies.push(temp)
        }

        var readyData = {}
        readyData[key] = { movies, categoryTitle }

        this.setData(readyData)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var inTheatersUrl = doubanBase + "/v2/movie/in_theaters" + "?start=0&count=3"

        var comingSoonUrl = doubanBase + "/v2/movie/coming_soon" + "?start=0&count=3"

        var top250Url = doubanBase + "/v2/movie/top250" + "?start=0&count=3"

        this.getMovieListData(inTheatersUrl, "inTheaters", "正在热映")
        this.getMovieListData(comingSoonUrl, "comingSoon", "即将上映")
        this.getMovieListData(top250Url, "top250", "豆瓣TOP250")
    }
})