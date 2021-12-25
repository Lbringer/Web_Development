const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedhelpers');

const Campground = require('../models/campground');
const User = require('../models/user');
const Review = require('../models/review');

mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => {
        console.log("Mongoose working");
    })
    .catch((err) => {
        console.log("Mongoose side error");
        console.log(err);
    })

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDb = async () => {
    await Campground.deleteMany({});
    await Review.deleteMany({});
    for (let i = 0; i < 300; i++) {
        let random1000 = Math.floor(Math.random() * 1000);
        let price = Math.floor(Math.random() * 20) + 10;
        const newSeed = new Campground({
            author: '6193758618aa3e24cc698a6c',
            location: `${cities[random1000].city},${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in aliquam perferendis fugiat quae beatae quos qui harum sapiente, sunt, numquam, dignissimos excepturi dicta aut veniam iusto vero accusantium similique!',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/lbringer/image/upload/v1637318036/YelpCamp/l9gouyxrsj1fpw8cu41m.png',
                    filename: 'YelpCamp/l9gouyxrsj1fpw8cu41m'
                }
            ]
        })
        await newSeed.save();
    }
}
seedDb().then(() => {
    mongoose.connection.close();
})

