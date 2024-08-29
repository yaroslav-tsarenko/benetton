const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const SettingsPreferences = require('./models/SettingsPreferences');
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
        if (!req.body) {
            return res.status(400).json({ message: 'Invalid data' });
        }
        const settings = await SettingsPreferences.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.status(200).json(settings);
    } catch (error) {
        console.error('Error updating settings:', error); // Log the error
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