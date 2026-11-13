const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Treatment = db.model('Treatment', {
    date: Number,
    vaccinated: Boolean,
    description: String,
    _animalId: {
        type: Schema.Types.ObjectId,
        ref: 'Animal'
    }
});

module.exports = Treatment;
