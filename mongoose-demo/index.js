const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/seriesDB')
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.log('Could not connect to MongoDB...',err));

const seriesSchema = new mongoose.Schema({
    name:String,
    date:Number,
    rating:Number,
    isWatched:Boolean
})

const Serie=mongoose.model('Serie',seriesSchema)
//technicall models is a js class

const friends=new Serie({
    name:"friends reunion",
    date:2018,
    rating:8.5,
    isWatched:false
})

console.log(friends);
friends.save()
.then(()=>console.log("Data Stored in DB"))