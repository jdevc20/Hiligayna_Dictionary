const Dictionary = require('../models/Dictionary');

// Create a new dictionary entry
exports.createDictionaryEntry = async (req, res) => {
    try {
        const dictionaryEntry = await Dictionary.create(req.body);
        res.status(201).json(dictionaryEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all dictionary entries
exports.getAllDictionaryEntries = async (req, res) => {
    try {
        const dictionaryEntries = await Dictionary.find();
        res.json(dictionaryEntries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single dictionary entry
exports.getDictionaryEntryById = async (req, res) => {
    res.json(res.dictionaryEntry);
};

// Update a dictionary entry
exports.updateDictionaryEntry = async (req, res) => {
    if (req.body.word != null) {
        res.dictionaryEntry.word = req.body.word;
    }
    if (req.body.definition != null) {
        res.dictionaryEntry.definition = req.body.definition;
    }
    if (req.body.wordType != null) {
        res.dictionaryEntry.wordType = req.body.wordType;
    }
    if (req.body.languages != null) {
        res.dictionaryEntry.languages = req.body.languages;
    }
    if (req.body.pronunciation != null) {
        res.dictionaryEntry.pronunciation = req.body.pronunciation;
    }
    if (req.body.examples != null) {
        res.dictionaryEntry.examples = req.body.examples;
    }
    try {
        const updatedDictionaryEntry = await res.dictionaryEntry.save();
        res.json(updatedDictionaryEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a dictionary entry
exports.deleteDictionaryEntry = async (req, res) => {
    try {
        await res.dictionaryEntry.remove();
        res.json({ message: 'Deleted dictionary entry' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
