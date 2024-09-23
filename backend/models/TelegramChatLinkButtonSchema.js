const mongoose = require('mongoose');

const TelegramChatLinkButtonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true }
});

const TelegramChatLinkButton = mongoose.model('TelegramChatLinkButton', TelegramChatLinkButtonSchema);

module.exports = TelegramChatLinkButton;