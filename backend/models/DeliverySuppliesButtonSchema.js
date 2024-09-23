const mongoose = require('mongoose');

const DeliverySuppliesButtonSchema = new mongoose.Schema({
    name: { type: String },
    link: { type: String },
    description: { type: String}
});

const DeliverySuppliesButton = mongoose.model('DeliverySuppliesButton', DeliverySuppliesButtonSchema);

module.exports = DeliverySuppliesButton;