const passport = require('passport');

module.exports = {
    requireSignin: passport.authenticate('local', { session: false })
}