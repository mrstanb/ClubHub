const express = require('express');
const router = express.Router();
const Club = require('../models/club');

// Get all clubs from db
router.get('/clubs', (req, res, next) => {
    Club.find({}).then(clubs => {
        res.send(clubs);
    }).catch(next);
});

// TODO: Get clubs by geo location and authorize where necessary

// Get a club by ID from db
router.get('/clubs/:id', (req, res, next) => {
    Club.findOne({_id: req.params.id}).then(club => {
        res.send(club);
    }).catch(next);
});

// Create a new club in the db
router.post('/clubs', (req, res, next) => {
    Club.create(req.body).then(club => {
        res.send(club);
    }).catch(next);
});

// Update a club in the db
router.put('/clubs/:id', (req, res, next) => {
    Club.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Club.findOne({_id: req.params.id}).then(club => {
            res.send(club);
        });
    }).catch(next);
});

// Delete a club from the db
router.delete('/clubs/:id', (req, res, next) => {
    Club.findByIdAndRemove({_id: req.params.id}).then(club => {
        res.send(club);
    }).catch(next);
});

module.exports = router;