const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Animal = db.model('Animal', {
    name: String,
    species: String,
    _ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'Owner'
    }
});

module.exports = Animal;
