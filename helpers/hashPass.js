const bcrypt = require('bcrypt');

const genHash = async plainText => await bcrypt.hash(plainText, 10);

module.exports = {
    genHash
}
