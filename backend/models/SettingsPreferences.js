const mongoose = require('mongoose');

const SettingsPreferences = new mongoose.Schema({
    captcha: Boolean,
    writeUsLink: String,
    workWithUsLink: String,
    whereToBuyLink: String,
    whereWorkLink: String,
    reviewsLink: String,
    rulesLink: String,
    autoSale1Link: String,
    autoSale2Link: String,
    autoSale3Link: String,
    telegramChatLink: String,
    telegramBot1Link: String,
    telegramBot2Link: String,
    wannaWorkLink: String,
    wholesaleLink: String,
    LABRCLink: String,
    PSYLABLink: String,
    RCCLUBLink: String,
    LEGALIZERLink: String,
    BIGBROLink: String,
    BMWRCLink: String,
    AMORALLELink: String,
    partnerShipLink: String,
    managerLink: String,
    bonusLink: String
});

module.exports = mongoose.model('SettingsPreferences', SettingsPreferences);
