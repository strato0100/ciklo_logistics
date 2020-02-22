const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
    username: String
});

module.exports = mongoose.model('User', userSchema);