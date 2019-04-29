const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Club = require('./club');

// Create the UserSchema
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type:String,
        required: [true, 'Password is required']
    },
    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    visitedClubs: {
        type: [Club.schema]
    },
    wannaGoList: {
        type: [Club.schema]
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;