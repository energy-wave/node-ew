
var Song = require('./Song')



var song = new Song(
    {
        _id: '1',
        author: '刘至佳',
        pic: 'https://www.energywave.top:3054/img/lzj.jpg',
        title: '说爱你',
        url: 'https://www.energywave.top:3054/song/wan.mp3'
    }
)
song.save()

var song = new Song(
    {
        _id: '2',
        author: '阿桑',
        pic: 'https://www.energywave.top:3054/img/as.jpg',
        title: '一直很安静',
        url: 'https://www.energywave.top:3054/song/yzhaj.mp3'
    }
)
song.save()

var song = new Song(
    {
        _id: '3',
        author: '陈柯宇',
        pic: 'https://www.energywave.top:3054/img/cky.jpg',
        title: '生僻字',
        url: 'https://www.energywave.top:3054/song/spz.mp3'
    }
)
song.save()

var song = new Song(
    {
        _id: '4',
        author: '丫蛋蛋,崔铭嘉',
        pic: 'https://www.energywave.top:3054/img/ydd.jpg',
        title: '口是心非',
        url: 'https://www.energywave.top:3054/song/ksxf.mp3'
    }
)
song.save()

var song = new Song(
    {
        _id: '5',
        author: 'G.E.M.邓紫棋',
        pic: 'https://www.energywave.top:3054/img/dzq.jpg',
        title: '光年之外',
        url: 'https://www.energywave.top:3054/song/gnzw.mp3'
    }
)
song.save()


console.log("data is ok")

// 版本 v1，2019年1月1日 12:16:45 李学博

