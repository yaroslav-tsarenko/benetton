const mongoose = require('mongoose');

const LinkButtonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true }
});

const LinkButton = mongoose.model('LinkButton', LinkButtonSchema);

module.exports = LinkButton;