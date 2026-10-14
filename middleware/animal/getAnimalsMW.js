/**
 * Load all animals from the database.
 * The result is saved to res.locals.animals.
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
