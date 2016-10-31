/**
 * Created by boyu on 12-Aug-16.
 */
var express = require('express');
var router = express.Router();
var Card = require('../models/card');

router.get('/cards', function (req, res, next) {
    Card.find()
        .exec(function (err, docs) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                content: docs
            });
        });
});

module.exports = router;

