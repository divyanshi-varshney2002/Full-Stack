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