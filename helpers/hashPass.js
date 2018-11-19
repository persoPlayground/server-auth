const bcrypt = require('bcrypt');

const genHash = async plainText => await bcrypt.hash(plainText, 10);
const compare = async (candidatePassword, { password }) => {
    try{
        const isMatch =  await bcrypt.compare(candidatePassword, password );
        return isMatch;
    } catch (err){
        return callback(err);
    }
}

module.exports = {
    genHash,
    compare
}
