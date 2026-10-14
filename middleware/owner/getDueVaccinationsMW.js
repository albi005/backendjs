/**
 * Load every owner together with the date of the oldest recorded
 * vaccination of their animals. The result is saved to res.locals.owners.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        next();
    };
};
