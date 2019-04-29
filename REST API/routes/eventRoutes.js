const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Get all events from the db
router.get('/events', (req, res, next) => {
    Event.find({}).then(events => {
        res.send(events);
    }).catch(next);
});

// Get an event by ID from the db
router.get('/events/:id', (req, res, next) => {
    Event.findOne({_id: req.params.id}).then(event => {
        res.send(event);
    }).catch(next);
});

// Create a new event in the db
router.post('/events', (req, res, next) => {
    Event.create(req.body).then(event => {
        res.send(event);
    }).catch(next);
});

// Update an event in the db
router.put('/events/:id', (req, res, next) => {
    Event.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Event.findOne({_id: req.params.id}).then(event => {
            res.send(event);
        });
    }).catch(next);
});

// Delete an event from the db
router.delete('/events/:id', (req, res, next) => {
    Event.findByIdAndRemove({_id: req.params.id}).then(event => {
        res.send(event);
    }).catch(next);
});

module.exports = router;