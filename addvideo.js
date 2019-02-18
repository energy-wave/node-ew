
var Video = require('./Video')



var video = new Video(
    {
        _id: '1',
        title: '兔子牙',
        url: 'https://www.energywave.top:3054/video/tzy.mp4'
    }
)
video.save()

var video = new Video(
    {
        _id: '2',
        title: 'Beat Of The Black Heart',
        url: 'https://www.energywave.top:3054/video/tfo.mp4'
    }
)
video.save()

var video = new Video(
    {
        _id: '3',
        title: '沙漠骆驼',
        url: 'https://www.energywave.top:3054/video/smlt.mp4'
    }
)
video.save()

var video = new Video(
    {
        _id: '4',
        title: '红房子',
        url: 'https://www.energywave.top:3054/video/hfz.mp4'
    }
)
video.save()

var video = new Video(
    {
        _id: '5',
        title: 'share of you',
        url: 'https://www.energywave.top:3054/video/soy.mp4'
    }
)
video.save()

console.log("data is ok")

// 版本 v1，2019年1月1日 12:16:45 李学博

