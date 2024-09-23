const mongoose = require('mongoose');

const TelegramBotLinkButtonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true }
});

const TelegramBotLinkButton = mongoose.model('TelegramBotLinkButton', TelegramBotLinkButtonSchema);

module.exports = TelegramBotLinkButton;