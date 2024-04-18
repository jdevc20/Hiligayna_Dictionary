const mongoose = require('mongoose');

const DictionarySchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
        unique: true,
        trim: true // Trim whitespace from the word
    },
    definition: {
        type: Map,
        of: String,
        required: true,
    },
    wordType: {
        type: String,
        required: true,
        enum: ['noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection']
        // Types of words: noun, verb, adjective, adverb, pronoun, preposition, conjunction, interjection
    },
    languages: {
        type: [String],
        required: true,
        validate: {
            validator: languages => languages.length > 0, // At least one language should be provided
            message: 'At least one language should be specified'
        }
    },
    pronunciation: {
        type: String,
        trim: true // Trim whitespace from the pronunciation
    },
    examples: {
        type: [String],
        validate: {
            validator: examples => examples.length > 0, // At least one example should be provided
            message: 'At least one example should be provided'
        }
    }
});

const Dictionary = mongoose.model('Dictionary', DictionarySchema);

module.exports = Dictionary;
