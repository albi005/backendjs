/**
 * Load the treatments that belong to res.locals.animal from the database.
 * The result is saved to res.locals.treatments.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        next();
    };
};
