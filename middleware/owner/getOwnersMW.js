/**
 * Load all owners from the database.
 * The result is saved to res.locals.owners.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        next();
    };
};
