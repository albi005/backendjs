/**
 * Load every owner together with the date of the oldest recorded
 * vaccination of their animals. Used by the home page.
 * The result is saved to res.locals.owners.
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
