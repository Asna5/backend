var express = require('express');
var rules = require('../models/Rule');
var verify = require('../verify');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        rules.find({})
            .then((rules) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rules);
            }, (err) => next(err))
            .catch((err) => next(err));
    }) 
  
    .post((req, res, next) => {
        rules.create(req.body)
            .then((rule) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rule);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('name')
    .get((req, res, next) => {
        rules.findById(req.params.name)
            .then((rule) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rule);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = router;