const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = require('./event');

// Create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

// Create the ClubSchema
const ClubSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    location: {
        type: GeoSchema,
        required: [true, 'Location is required']
    },
    musicGenres: {
        type: [String],
        required: [true, 'Music is required']
    },
    events: {
        type: [Event.schema]
    },
    workingHours: {
        type: String,
        required: [true, 'Working Hours are required']
    }
});

const Club = mongoose.model('Club', ClubSchema);

module.exports = Club;