var passport = require('passport');
const mongoose = require('mongoose');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('../config/keys');

var User = mongoose.model('users');

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('profile', profile);
    new User({ googleID: profile.id }).save();
}
));
