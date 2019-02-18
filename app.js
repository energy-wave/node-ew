// 模块引入
var express = require('express')
var app = express()
var https = require('https')
var http = require('http')
var fs = require('fs')

var options = {
    key: fs.readFileSync('./cert/a.key'),
    cert: fs.readFileSync('./cert/a.pem')
}

//form
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// 处理跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next();
});

//文件引入
var router = require('./router')

// 把路由容器挂载到 app 服务中
app.use(router)

// 启动
https.createServer(options,app).listen(3054)
http.createServer(app).listen(3053)
