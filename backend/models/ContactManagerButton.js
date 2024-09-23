const mongoose = require('mongoose');

const ContactManagerButtonSchema =  new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true},
    link: {type: String, required: true}
});

const ContactManagerButton = mongoose.model('ContactManagerButton', ContactManagerButtonSchema);

module.exports =  ContactManagerButton;