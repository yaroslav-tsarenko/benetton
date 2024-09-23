const mongoose = require('mongoose');

const RegionSettlementSchema = new mongoose.Schema({
    region: { type: String, required: true },
    settlements: { type: [String], required: true }
});

const RegionSettlement = mongoose.model('RegionSettlement', RegionSettlementSchema);

module.exports = RegionSettlement;