var mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        truck_id: mongoose.Schema.Types.ObjectId,
        name: String,
        driver: String
    }, { collection: 'trucks' }
);

const Model = mongoose.model('Truck', schema);

module.exports = Model;