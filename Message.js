var mongoose = require('mongoose');

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/energywave', { useNewUrlParser: true });

var messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Message', messageSchema)

// 版本 v1，2019年1月22日 17:48:06 李学博
