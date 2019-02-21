var util = require('../../../utils/util.js')
var doubanBase = getApp().globalData.doubanBase

Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var movieId = options.id
        // console.log(movieId)
        var url = doubanBase + "/v2/movie/subject/" + movieId

        util.http(url, this.processDoubanData)
    },
    // 回调
    processDoubanData(data) {
        console.log(!data)
        console.log(!data)
        if(!data) {
            return 
        }

        var director = {
            avatar: "",
            name: "",
            id: ""
        }

        if(data.directors[0] != null) {
            if(data.directors[0].avatars != null) {
                director.avatar = data.directors[0].avatars.large
            }

            director.name = data.directors[0].name
            director.id = data.directors[0].id
        }

        var movie = {
            movieImg: data.images ? data.images.large : "",
            country: data.countries[0],
            title: data.title,
            originalTitle: data.original_title,
            wishCount: data.wish_count,
            commentCount: data.comments_count,
            year: data.year,
            generes: data.genres.join("、"),
            stars: util.convertToStarsArray(data.rating.stars),
            score: data.rating.average,
            director: director,
            casts: util.convertToCastString(data.casts),
            castsInfo: util.convertTocastInfos(data.casts),
            summary: data.summary
        }

        this.setData({
            movie: movie
        })
    },
    // 查看图片
    viewMoviePostImg(event) {
        var src = event.currentTarget.dataset.src
        wx.previewImage({
            current: src, // 当前显示图片的http链接
            urls: [src] // 需要预览的图片http链接列表
        })
    }
})