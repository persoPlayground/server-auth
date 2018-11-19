const jwt = require('jwt-simple');
const { secret } = require('../config');

const  authToken = ({ id }) => {
    const timeStamp = new Date().getTime();
    return jwt.encode({ sub: id, iat: timeStamp }, secret);
}

module.exports = {
    authToken
}