const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const { genHash, compare } = require('../helpers/hashPass');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

userSchema.pre('save', async function(next) {
    const user = this;
    user.password = await genHash(user.password);
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await compare(candidatePassword, this);
}
const user = mongoose.model('user', userSchema);

module.exports = user;