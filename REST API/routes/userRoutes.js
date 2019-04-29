const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get a user by ID from the db
router.get('/users/:id', (req, res, next) => {
    User.findOne({_id: req.params.id}).then(user => {
        res.send(user);
    }).catch(next);
});

// Add a user to the db
router.post('/users', (req, res, next) => {
    User.create(req.body).then(user => {
        res.send(user);
    }).catch(next);
});

// Update a user in the db
router.put('/users/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        User.findOne({_id: req.params.id}).then(user => {
            res.send(user);
        });
    }).catch(next);
});

// Delete a user from the db
router.delete('/users/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id}).then(user => {
        res.send(user);
    }).catch(next);
});

module.exports = router;