/**
 * Load all owners from the database.
 * The result is saved to res.locals.owners.
 */

const requireOption = require('../requireOption');
const { owners } = require('../../mockData');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        // TODO: get data from the database in a later step
        res.locals.owners = owners;
        return next();
    };
};
