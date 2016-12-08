var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = new Schema({
    baseUrlImage: {type: String, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    organizers: {type: String, required: true},
    date: {type: String, default: Date.now},
    place: {type: String, required: true, unique: true},
    genderRating: {
        male: Number,
        female: Number
    }
});
module.exports = mongoose.model('Event', Event);