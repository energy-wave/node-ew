
var Carousel = require('./MongoDB')

for (let i = 0; i < 5; i++) {

    var admin = new Carousel({
        id: `${i + 1}`,
        name: `carousel-${i + 1}`,
        mAddress: `http://www.energywave.top:3053/img/m-carousel-${i + 1}`,
        pAddress: `http://www.energywave.top:3053/img/p-carousel-${i + 1}`,
        carousel: 'carousel'
    })
    admin.save()
}

console.log("Carousel data is ok")

// 版本 v1，2019年1月1日 12:16:45 李学博