var post_content = [
    {
        head: '/img/avatar/1.png',
        date: "Now 5 2016",
        title: "自古雄才多磨难",
        post_img: "/img/post/sls.jpg",
        content: "“自古雄才多磨难，从来纨绔少伟男，”“宝剑锋从磨砺出，梅花香自苦寒来，“一个人要想成为人上之人，必须吃得苦中之苦。只要有抱负，就去努力。不努力不付出，石阶永远不可能变成佛像的！””",
        view_num: "122",
        collect_num: "96",
        author_img: "/img/icon/chat.png",
        postId: 0,
        headImgSrc: "/img/post/sls.jpg",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "“自古雄才多磨难，从来纨绔少伟男，”“宝剑锋从磨砺出，梅花香自苦寒来，“一个人要想成为人上之人，必须吃得苦中之苦。只要有抱负，就去努力。不努力不付出，石阶永远不可能变成佛像的！””",
        music: {
            url: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
            title: "此时此刻-许巍",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
        }
    },
    {
        head: '/img/avatar/2.png',
        date: "Now 4 2016",
        title: "四次挥手",
        post_img: "/img/post/bl.png",
        content: `谁先发起请求都可以
因为Client和Server都能发起请求，所以我们此处用A和B替代通讯双方
1.	A发起请求结束信号（A表示自己不会再传输数据了，请求断开）
2.	B向A发送确认收到A发起的结束请求的确认信号（B知道了A的请求，但是还有数据要处理，暂时还不能断开）
3.	B向A发送请求结束信号（数据发送完成，B同意断开）
4.	A向B发送确认结束信号（A同意断开，很愉快的中断这次TCP连接）
由于TCP是全双工的协议，也就是说两端可以同时进行数据传输，所以，TCP连接的关闭在两端都关闭之后才正式关闭。
`,
        view_num: "33",
        collect_num: "22",
        author_img: "/img/icon/chat.png",
        postId: 1,
        headImgSrc: "/img/post/bl.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: `谁先发起请求都可以
因为Client和Server都能发起请求，所以我们此处用A和B替代通讯双方
1.	A发起请求结束信号（A表示自己不会再传输数据了，请求断开）
2.	B向A发送确认收到A发起的结束请求的确认信号（B知道了A的请求，但是还有数据要处理，暂时还不能断开）
3.	B向A发送请求结束信号（数据发送完成，B同意断开）
4.	A向B发送确认结束信号（A同意断开，很愉快的中断这次TCP连接）
由于TCP是全双工的协议，也就是说两端可以同时进行数据传输，所以，TCP连接的关闭在两端都关闭之后才正式关闭。
                `,
        music: {
            url: "https://wangyafei--music.oss-cn-beijing.aliyuncs.com/%E8%8A%B1%E7%B2%A5%2C%E9%A9%AC%E9%9B%A8%E9%98%B3%20-%20%E7%9B%97%E5%B0%86%E8%A1%8C.mp3",
            title: "盜將行--花粥/馬雨陽",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
        }
    },
    {
        head: '/img/avatar/3.png',
        date: "Now 4 2016",
        title: "token验证机制",
        post_img: "/img/post/cat.png",
        content: `1. 客户端以用户名与密码为参数请求登录API
                2. 服务端收到登录请求去验证用户名与密码
                3. 验证通过,服务端会生成Token,再把这个Token响应给客户端.
                4. 客户端收到Token,存储到本地,如Cookie,SessionStorage,LocalStorage.我们选择了cookie
                5. 客户端每次向服务器请求API接口时,都要带上Token.可以和后端协定，传参数还是headers
                6. 客户端每次跳转路由的时候也要验证Token登录态
                7. 服务端收到请求,验证Token,如果通过就返回数据,否则返回错误状态，客户端依次去处理.`,
        view_num: "12",
        collect_num: "44",
        author_img: "/img/icon/chat.png",
        postId: 2,
        headImgSrc: "/img/post/cat.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: `1. 客户端以用户名与密码为参数请求登录API
                2. 服务端收到登录请求去验证用户名与密码
                3. 验证通过,服务端会生成Token,再把这个Token响应给客户端.
                4. 客户端收到Token,存储到本地,如Cookie,SessionStorage,LocalStorage.我们选择了cookie
                5. 客户端每次向服务器请求API接口时,都要带上Token.可以和后端协定，传参数还是headers
                6. 客户端每次跳转路由的时候也要验证Token登录态
                7. 服务端收到请求,验证Token,如果通过就返回数据,否则返回错误状态，客户端依次去处理.`,
        music: {
            url: "https://wangyafei--music.oss-cn-beijing.aliyuncs.com/%E9%9C%8D%E5%B0%8A%20-%20%E5%A4%A9%E8%A1%8C%E4%B9%9D%E6%AD%8C.mp3",
            title: "天行九歌--霍尊",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
        }
    },
    {
        head: '/img/avatar/4.png',
        date: "Now 4 2016",
        title: "HTTP协议是无状态的",
        post_img: "/img/post/sls.jpg",
        content: "“http协议是无状态的，同一个客户端的这次请求和上次请求是没有对应关系，对http服务器来说，它并不知道这两个请求来自同一个客户端。 为了解决这个问题， Web程序引入了Cookie机制来维护状态.””",
        view_num: "12",
        collect_num: "44",
        author_img: "/img/icon/chat.png",
        postId: 3,
        headImgSrc: "/img/post/sls.jpg",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "“http协议是无状态的，同一个客户端的这次请求和上次请求是没有对应关系，对http服务器来说，它并不知道这两个请求来自同一个客户端。 为了解决这个问题， Web程序引入了Cookie机制来维护状态.””",
        music: {
            url: "https://wangyafei--music.oss-cn-beijing.aliyuncs.com/%E5%9C%889%20-%20%E7%94%9F%E5%A6%82%E9%80%86%E6%97%85%EF%BC%88Cover%20%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%88%EF%BC%89.mp3",
            title: "生如逆旅（Cover 米津玄师)--圈9",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
        }
    },
    {
        head: '/img/avatar/5.png',
        date: "Now 4 2016",
        title: "什么是HTTP协议",
        post_img: "/img/post/vr.png",
        content: "“协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器””",
        view_num: "12",
        collect_num: "44",
        author_img: "/img/icon/chat.png",
        postId: 4,
        headImgSrc: "/img/post/vr.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "“协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器””",
        music: {
            url: "https://wangyafei--music.oss-cn-beijing.aliyuncs.com/%E4%B8%8D%E6%89%8D%20-%20%E5%8C%96%E8%BA%AB%E5%AD%A4%E5%B2%9B%E7%9A%84%E9%B2%B8.mp3",
            title: "化身孤岛的鲸--不才",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
        }
    },
    {
        head: '/img/avatar/5.png',
        date: "Now 4 2016",
        title: "什么是HTTP协议",
        post_img: "/img/post/vr.png",
        content: "“协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器””",
        view_num: "12",
        collect_num: "44",
        author_img: "/img/icon/chat.png",
        postId: 5,
        headImgSrc: "/img/iqiyi.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "“协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器””",
        music: {
            url: "https://wangyafei--music.oss-cn-beijing.aliyuncs.com/%E4%B8%8D%E6%89%8D%20-%20%E5%8C%96%E8%BA%AB%E5%AD%A4%E5%B2%9B%E7%9A%84%E9%B2%B8.mp3",
            title: "化身孤岛的鲸--不才",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
        }
    },
    {
        head: '/img/avatar/5.png',
        date: "Now 4 2016",
        title: "什么是HTTP协议",
        post_img: "/img/post/vr.png",
        content: "“协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器””",
        view_num: "12",
        collect_num: "44",
        author_img: "/img/icon/chat.png",
        postId: 6,
        headImgSrc: "/img/post/vr.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "“协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器””",
        music: {
            url: "https://wangyafei--music.oss-cn-beijing.aliyuncs.com/%E4%B8%8D%E6%89%8D%20-%20%E5%8C%96%E8%BA%AB%E5%AD%A4%E5%B2%9B%E7%9A%84%E9%B2%B8.mp3",
            title: "化身孤岛的鲸--不才",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
        }
    },
    {
        head: '/img/avatar/5.png',
        date: "Now 4 2016",
        title: "什么是HTTP协议",
        post_img: "/img/post/vr.png",
        content: "“协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器””",
        view_num: "12",
        collect_num: "44",
        author_img: "/img/icon/chat.png",
        postId: 7,
        headImgSrc: "/img/wx.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "“协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器””",
        music: {
            url: "https://wangyafei--music.oss-cn-beijing.aliyuncs.com/%E4%B8%8D%E6%89%8D%20-%20%E5%8C%96%E8%BA%AB%E5%AD%A4%E5%B2%9B%E7%9A%84%E9%B2%B8.mp3",
            title: "化身孤岛的鲸--不才",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
        }
    }
]

export default post_content