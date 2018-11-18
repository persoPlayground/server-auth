const User = require('../models/User');

const findUser = async user => await User.findOne({ ...user });

const createUser = async user => await new User({ ...user }).save();

module.exports = {
    findUser,
    createUser
}