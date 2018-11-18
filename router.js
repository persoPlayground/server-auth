const Authentication = require('./controllers/authentication');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('home');
    });

    app.post('/signup', Authentication.signup);
}