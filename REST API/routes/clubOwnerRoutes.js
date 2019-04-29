const express = require('express');
const router = express.Router();
const ClubOwner = require('../models/clubOwner');

// Get a club owner by ID from the db
router.get('/club-owners/:id', (req, res, next) => {
    ClubOwner.findOne({_id: req.params.id}).then(clubOwner => {
        res.send(clubOwner);
    }).catch(next);
});

// Create a new club owner in the db
router.post('/club-owners', (req, res, next) => {
    ClubOwner.create(req.body).then(clubOwner => {
        res.send(clubOwner);
    }).catch(next);
});

// Update a club owner in the db
router.put('/club-owners/:id', (req, res, next) => {
    ClubOwner.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        ClubOwner.findOne({_id: req.params.id}).then(clubOwner => {
            res.send(clubOwner);
        });
    }).catch(next);
});

// Delete a club owner from the db
router.delete('/club-owners/:id', (req, res, next) => {
    ClubOwner.findByIdAndRemove({_id: req.params.id}).then(clubOwner => {
        res.send(clubOwner);
    }).catch(next);
});

module.exports = router;