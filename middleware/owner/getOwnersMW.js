/**
 * Load all owners from the database.
 * The result is saved to res.locals.owners.
 */

const requireOption = require('../requireOption');
const { owners } = require('../../mockData');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        res.locals.owners = owners;
        return next();
    };
};
