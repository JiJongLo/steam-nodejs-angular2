/**
 * Created by boyu on 08-Dec-16.
 */
var json = require('./src/assets/mock-data/events.json');
var _ = require('lodash');
var mongoose = require('mongoose');
var Event = require('./models/Event');
var uri = 'mongodb://localhost:27017/steam-app';
mongoose.Promise = require('bluebird');
// Use bluebird
var db = mongoose.createConnection(uri);
db.on('open', function () {
    console.log('start');
    _.forEach(json, function (event) {
        console.log(event);
        new Event({
            baseUrlImage: event.image,
            title: event.title,
            text: event.text,
            organizers: event.organizers,
            date: event.timeLaying,
            place: event.place,
            genderRating: {
                male: event.malePercent,
                female: event.femalePercent
            }
        }).save(function (err, res) {
            if (err) console.log(err);
            console.log(res)
        }).then(function (res) {
            console.log('Success')
        }).catch(function (err) {
            console.log('Error', err)
        });
    });

});

