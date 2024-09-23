const mongoose = require('mongoose');

const ForumButtonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true }
});

const ForumButton = mongoose.model('ForumButton', ForumButtonSchema);

module.exports = ForumButton;
