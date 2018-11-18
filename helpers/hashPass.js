const bcrypt = require('bcrypt');

const genHash = async (plainText) => {console.log('plainText', plainText); return await bcrypt.hash(plainText, 10);}

module.exports = {
    genHash
}