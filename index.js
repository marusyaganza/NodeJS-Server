var express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./service/passport');

var keys = require('./config/keys');
mongoose.connect(keys.mangoURI);
var app = express();
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT);

