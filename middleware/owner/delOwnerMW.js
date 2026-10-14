/**
 * Remove an owner (and all of its animals and their treatments) from the
 * database. The entity used here is: res.locals.owner.
 * Redirects to / after delete.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        next();
    };
};
