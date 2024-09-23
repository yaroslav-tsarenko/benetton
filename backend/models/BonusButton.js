const mongoose = require('mongoose');

const BonusButtonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    attentionText: { type: String, required: true }
});

const BonusButton = mongoose.model('BonusButton', BonusButtonSchema);

module.exports = BonusButton;