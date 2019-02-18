var Song = require('./MongoDB')
var mongoose = require('mongoose');

Song.remove({}, function (err, ret) {
    if (err) {
        console.log('delete false')
    } else {
        console.log('data delete')
        mongoose.connection.collection("songs").drop(function (err) {
            console.log("data group delete")
        });
    }
})