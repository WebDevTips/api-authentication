const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Import routes
const user = require('./routes/users');

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/', user);

// start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
