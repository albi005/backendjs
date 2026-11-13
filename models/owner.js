const db = require('../config/db');

const Owner = db.model('Owner', {
    name: String,
    address: String,
    contact: String
});

module.exports = Owner;
