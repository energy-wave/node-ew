var mongoose = require('mongoose');

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/energywave', { useNewUrlParser: true });

var carouselSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    carousel: {
        type: String,
        required: true
    },
    mAddress: {
        type: String,
        required: true
    },
    pAddress: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Carousel', carouselSchema)

// 版本 v1，2019年1月1日 12:16:45 李学博
