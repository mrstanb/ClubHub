const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create the Express application
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ClubHubDB');
mongoose.Promise = global.Promise;

// Use body-parser middleware
app.use(bodyParser.json());

// Use routes for user
app.use('/api', require('./routes/userRoutes'));

// Use routes for clubOwner
app.use('/api', require('./routes/clubOwnerRoutes'));

// Use routes for club
app.use('/api', require('./routes/clubRoutes'));

// Use routes for event
app.use('/api', require('./routes/eventRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err); // To see the properties of the error message in the console
    res.status(422).send({error: err.message});
});

// Listen for requests on specified port
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});