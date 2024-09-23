const mongoose = require('mongoose');

const WorkOfferButtonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
});

const WorkOfferButton = mongoose.model('WorkOfferButton', WorkOfferButtonSchema);

module.exports = WorkOfferButton;