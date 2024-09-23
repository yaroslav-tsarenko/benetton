const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const SettingsPreferences = require('./models/SettingsPreferences');
const LinkButton = require('../backend/models/LinkButton');
const TelegramChatLinkButton = require('../backend/models/TelegramChatLinkButtonSchema');
const DeliverySuppliesButton = require('../backend/models/DeliverySuppliesButtonSchema');
const WantToWorkButton = require('../backend/models/WantToWorkButtonSchema');
const WorkOfferButton = require('../backend/models/WorkOfferButton');
const ContactManagerButton = require('../backend/models/ContactManagerButton');
const BonusButton = require('../backend/models/BonusButton');
const RegionSettlement = require('../backend/models/RegionSettlement');
const ForumButton = require('../backend/models/ForumButton');
const TelegramBotLinkButton = require('../backend/models/TelegramBotLinkButtonSchema');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://yaroslavdev:1234567890@haul-depot-db.7lk8rg9.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
});

app.post('/apply-settings', async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Log the incoming request body
        if (!req.body || !req.body.settings) {
            return res.status(400).json({ message: 'Invalid data' });
        }

        const { settings, forumButtons , bonusButton,   workOfferButton,
            contactManagerButton, wantToWorkButton, deliverySuppliesButton, buttons, chatButtons, botButtons, regions } = req.body;

        // Update settings
        const updatedSettings = await SettingsPreferences.findOneAndUpdate({}, settings, { new: true, upsert: true });

        // Update WorkOfferButton
        await WorkOfferButton.deleteMany({});
        await WorkOfferButton.create(workOfferButton);

        // Update ContactManagerButton
        await ContactManagerButton.deleteMany({});
        await ContactManagerButton.create(contactManagerButton);

        await BonusButton.deleteMany({});
        await BonusButton.create(bonusButton);

        await WantToWorkButton.deleteMany({});  // Clear existing entries
        await WantToWorkButton.create(wantToWorkButton);  // Insert new data

        await DeliverySuppliesButton.deleteMany({});
        await DeliverySuppliesButton.create(deliverySuppliesButton);

        await ForumButton.deleteMany({});
        await ForumButton.insertMany(forumButtons);

        await LinkButton.deleteMany({});
        await LinkButton.insertMany(buttons);

        await TelegramChatLinkButton.deleteMany({});
        await TelegramChatLinkButton.insertMany(chatButtons);

        await TelegramBotLinkButton.deleteMany({});
        await TelegramBotLinkButton.insertMany(botButtons);

        await RegionSettlement.deleteMany({});
        await RegionSettlement.insertMany(regions);

        res.status(200).json({ settings: updatedSettings, buttons, chatButtons, botButtons, regions });
    } catch (error) {
        console.error('Error updating settings:', error); // Log the error
        res.status(400).json({ message: error.message });
    }
});

app.get('/get-bonus-button', async (req, res) => {
    try {
        const button = await BonusButton.findOne();
        res.status(200).json(button);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


app.get('/get-work-offer-button', async (req, res) => {
    try {
        const button = await WorkOfferButton.findOne();
        res.status(200).json(button);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/get-contact-manager-button', async (req, res) => {
    try {
        const button = await ContactManagerButton.findOne();
        res.status(200).json(button);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


app.get('/get-forum-buttons', async (req, res) => {
    try {
        const buttons = await ForumButton.find();
        res.status(200).json(buttons);
    } catch (error) {
        console.error('Error fetching forum buttons:', error);
        res.status(400).json({ message: error.message });
    }
});

app.get('/get-want-to-work-button', async (req, res) => {
    try {
        const button = await WantToWorkButton.find();
        res.status(200).json(button[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Fetch DeliverySuppliesButton
app.get('/get-delivery-supplies-button', async (req, res) => {
    try {
        const button = await DeliverySuppliesButton.find();
        res.status(200).json(button[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/get-regions-and-settlements', async (req, res) => {
    try {
        const regions = await RegionSettlement.find();
        res.status(200).json(regions);
    } catch (error) {
        console.error('Error fetching regions and settlements:', error);
        res.status(400).json({ message: error.message });
    }
});

app.get('/get-telegram-chat-buttons', async (req, res) => {
    try {
        const chatButtons = await TelegramChatLinkButton.find();
        res.status(200).json(chatButtons);
    } catch (error) {
        console.error('Error fetching chat buttons:', error);
        res.status(400).json({ message: error.message });
    }
});

app.get('/get-telegram-bot-buttons', async (req, res) => {
    try {
        const botButtons = await TelegramBotLinkButton.find();
        res.status(200).json(botButtons);
    } catch (error) {
        console.error('Error fetching bot buttons:', error);
        res.status(400).json({ message: error.message });
    }
});

app.get('/get-link-buttons', async (req, res) => {
    try {
        const linkButtons = await LinkButton.find();
        res.status(200).json(linkButtons);
    } catch (error) {
        console.error('Error fetching link buttons:', error);
        res.status(400).json({ message: error.message });
    }
});

app.get('/get-settings', async (req, res) => {
    try {
        const settings = await SettingsPreferences.findOne();
        res.status(200).json(settings);
    } catch (error) {
        console.error('Error fetching settings:', error);
        res.status(400).json({ message: error.message });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});