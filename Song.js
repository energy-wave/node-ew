var mongoose = require('mongoose');

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/energywave', { useNewUrlParser: true });

var songSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Song', songSchema)

// 版本 v1，2019年1月22日 17:48:06 李学博
