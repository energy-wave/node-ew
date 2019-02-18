var fs = require('fs')
var express = require('express')
var router = express.Router()



var Carousel = require('./MongoDB')
var Message = require('./Message')
var Song = require('./Song')
var Video = require('./Video')

router.get('/', function (req, res) {
    res.send("网站建设中")
})

// json区
router.get('/api/imgUrl', function (req, res) {
    Carousel.find({
        carousel: 'carousel'
    }, function (err, ret) {
        if (err) {
            console.log('查询失败')
        } else {
            res.json(ret)
        }
    })
})
// 图片区
// m区
router.get('/img/m-carousel-1', function (req, res) {
    fs.readFile('./img/m-carousel-1.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/m-carousel-2', function (req, res) {
    fs.readFile('./img/m-carousel-2.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/m-carousel-3', function (req, res) {
    fs.readFile('./img/m-carousel-3.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/m-carousel-4', function (req, res) {
    fs.readFile('./img/m-carousel-4.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/m-carousel-5', function (req, res) {
    fs.readFile('./img/m-carousel-5.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/as.jpg', function (req, res) {
    fs.readFile('./img/as.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/cky.jpg', function (req, res) {
    fs.readFile('./img/cky.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/ydd.jpg', function (req, res) {
    fs.readFile('./img/ydd.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/dzq.jpg', function (req, res) {
    fs.readFile('./img/dzq.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/lzj.jpg', function (req, res) {
    fs.readFile('./img/lzj.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
//song
router.get('/song/yzhaj.mp3', function (req, res) {
    fs.readFile('./song/yzhaj.mp3', { 'Content-Type': 'audio/mp3' }, function (err, data) {
        res.end(data);
    });
})
router.get('/song/wan.mp3', function (req, res) {
    fs.readFile('./song/wan.mp3', { 'Content-Type': 'audio/mp3' }, function (err, data) {
        res.end(data);
    });
})
router.get('/song/gnzw.mp3', function (req, res) {
    fs.readFile('./song/gnzw.mp3', { 'Content-Type': 'audio/mp3' }, function (err, data) {
        res.end(data);
    });
})
router.get('/song/ksxf.mp3', function (req, res) {
    fs.readFile('./song/ksxf.mp3', { 'Content-Type': 'audio/mp3' }, function (err, data) {
        res.end(data);
    });
})
router.get('/song/spz.mp3', function (req, res) {
    fs.readFile('./song/spz.mp3', { 'Content-Type': 'audio/mp3' }, function (err, data) {
        res.end(data);
    });
})
//video
router.get('/video/tzy.mp4', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    var rs = fs.createReadStream('./video/tzy.mp4')
    rs.pipe(res)
    rs.on('end', function () {
        res.end();
    });
})
router.get('/video/tfo.mp4', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    var rs = fs.createReadStream('./video/tfo.mp4')
    rs.pipe(res)
    rs.on('end', function () {
        res.end();
    });
})
router.get('/video/smlt.mp4', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    var rs = fs.createReadStream('./video/smlt.mp4')
    rs.pipe(res)
    rs.on('end', function () {
        res.end();
    });
})
router.get('/video/hfz.mp4', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    var rs = fs.createReadStream('./video/hfz.mp4')
    rs.pipe(res)
    rs.on('end', function () {
        res.end();
    });
})
router.get('/video/soy.mp4', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    var rs = fs.createReadStream('./video/soy.mp4')
    rs.pipe(res)
    rs.on('end', function () {
        res.end();
    });
})


// pc区
router.get('/song/p-carousel-1', function (req, res) {
    fs.readFile('./song/p-carousel-1.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/p-carousel-2', function (req, res) {
    fs.readFile('./img/p-carousel-2.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/p-carousel-3', function (req, res) {
    fs.readFile('./img/p-carousel-3.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/p-carousel-4', function (req, res) {
    fs.readFile('./img/p-carousel-4.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
router.get('/img/p-carousel-5', function (req, res) {
    fs.readFile('./img/p-carousel-5.jpg', { 'Content-Type': 'image/jpg' }, function (err, data) {
        res.end(data);
    });
})
//留言开发
router.get('/message', function (req, res) {
    Message.find(function (err, ret) {
        if (err) {
            console.log('查询失败')
        } else {
            res.json(ret)
        }
    })
})
router.post('/message/new', function (req, res) {

    var msg = new Message({
        name: req.body.name,
        msg: req.body.msg,
        date: Date()
    })
    console.log(req.body)


    msg.save(function (err, ret) {
        if (err) {
            console.log('保存失败')
        } else {
            console.log('保存成功')
        }
    })
    res.redirect('http://www.energywave.top/#/p3')
    res.end()
})
//post 临时删除
router.post('/message/del3053', function (req, res) {
    Message.remove({}, function (err, ret) {
        if (err) {
            console.log('删除失败')
        } else {
            console.log('删除成功')
            console.log(ret)
        }
    })
    res.end()
})

//https
router.get('/wx/api/song', function (req, res) {
    Song.find({}, function (err, ret) {
        if (err) {
            console.log('查询失败')
        } else {
            res.json(ret)
        }
    })
})
router.get('/wx/api/video', function (req, res) {
    Video.find({}, function (err, ret) {
        if (err) {
            console.log('查询失败')
        } else {
            res.json(ret)
        }
    })
})



module.exports = router