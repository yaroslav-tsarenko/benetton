const mongoose = require('mongoose');

const HeaderButtonSchema = new mongoose.Schema({
    link: {
        type: String,
    },
    name: {
        type: String,
    }
});

module.exports = mongoose.model('HeaderButton', HeaderButtonSchema);
