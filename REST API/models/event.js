const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Club = require('./club');

const EventSchema = new Schema({
    dateAndTimeOfEvent: {
        type: Date,
        required: [true, 'Date and Time of Event are required']
    },
    description: {
        type: String
    },
    entryPrice: {
        type: Number,
        required: [true, 'Entry price is required']
    }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;