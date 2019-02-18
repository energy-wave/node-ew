var Carousel = require('./MongoDB')
var mongoose = require('mongoose');

Carousel.remove({
    carousel: 'carousel'
}, function (err, ret) {
    if (err) {
        console.log('delete false')
    } else {
        console.log('data delete')
        mongoose.connection.collection("carousels").drop(function (err) {
            console.log("data group delete")
        });
    }
})

// 版本 v1，2019年1月1日 12:16:45 李学博

