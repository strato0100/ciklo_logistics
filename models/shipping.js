var mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        shipping_id: mongoose.Schema.Types.ObjectId,
        name: String,
        source: String,
        target: String,
        target: String,
        truck: String
    }, { collection: 'shipping' }
);

const Model = mongoose.model('Shipping', schema);

module.exports = Model;