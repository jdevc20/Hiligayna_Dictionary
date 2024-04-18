const express = require('express');
const router = express.Router();
const dictionaryController = require('../controllers/dictionaryController');

// Create a new dictionary entry
router.post('/', dictionaryController.createDictionaryEntry);

// Get all dictionary entries
router.get('/', dictionaryController.getAllDictionaryEntries);

// Get a single dictionary entry
router.get('/:id', dictionaryController.getDictionaryEntryById);

// Update a dictionary entry
router.patch('/:id', dictionaryController.updateDictionaryEntry);

// Delete a dictionary entry
router.delete('/:id', dictionaryController.deleteDictionaryEntry);

module.exports = router;
