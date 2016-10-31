var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    baseUrlImage: {type: String, required: true},
    title: {type: String, required: true},
    organizers: {type: String, required: true},
    date: {type: Date, default: Date.now},
    place: {type: String, required: true, unique: true},
    genderRating: {
        male: Number,
        female: Number
    }
});
module.exports = mongoose.model('Card', schema);