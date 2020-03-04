var mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        driver_id: mongoose.Schema.Types.ObjectId,
        name: String
    }, { collection: 'drivers' }
);

const Model = mongoose.model('Driver', schema);

module.exports = Model;