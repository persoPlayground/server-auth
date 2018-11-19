const { signup, signin } = require('./controllers/authentication');
require('./helpers/passport');
const { requireAuth } = require('./milddlewares/requireAuth');
const { requireSignin } = require('./milddlewares/requireSignin');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('home');
    });
    app.post('/signin', requireSignin, signin);

    app.post('/signup', signup);

    app.get('/protected',requireAuth, (req, res) => res.send('welcome'));
}