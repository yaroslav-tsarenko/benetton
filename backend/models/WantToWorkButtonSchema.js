const mongoose = require('mongoose');

const WantToWorkButtonSchema = new mongoose.Schema({
    name: { type: String },
    link: { type: String },
    description: { type: String, }
});

const WantToWorkButton = mongoose.model('WantToWorkButton', WantToWorkButtonSchema);

module.exports = WantToWorkButton;