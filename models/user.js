var mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        user_id: mongoose.Schema.Types.ObjectId,
        username: String,
        password: String
    }, { collection: 'users' }
);

const Model = mongoose.model('User', userSchema);

module.exports = Model;