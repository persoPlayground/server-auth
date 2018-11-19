const passport  = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const LocalStrategy = require('passport-local');

const { secret } = require('../config'); 
const User = require('../models/User');

//Local Strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if(!user) return done(null, false);

        const isMatch = await user.comparePassword(password);
        if(!isMatch) return done(null, false);

        return done(null, user);

    } catch(err) {
        return done(err, false);
    }
});


//Jwt Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
};
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub);
        if(!user) return done(null, false);
        return done(null, user);
    } catch(err) {
        return done(err, false);
    }
});


passport.use(jwtLogin);
passport.use(localLogin);