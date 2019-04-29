const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Club = require('./club');

const ClubOwnerSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    clubsOwned: {
        type: [Club.schema]
    }
});

const ClubOwner = mongoose.model('ClubOwner', ClubOwnerSchema);

module.exports = ClubOwner;