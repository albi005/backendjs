/**
 * Using POST params update or save an owner to the database.
 * If res.locals.owner is there, it's an update otherwise this middleware
 * creates an entity.
 * Redirects to /owners after success.
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
