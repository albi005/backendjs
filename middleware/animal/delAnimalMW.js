/**
 * Remove an animal (and all of its treatments) from the database.
 * The entity used here is: res.locals.animal.
 * Redirects to the owner page after delete.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        next();
    };
};
