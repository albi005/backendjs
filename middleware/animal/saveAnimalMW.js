/**
 * Using POST params update or save an animal to the database.
 * If res.locals.animal is there, it's an update otherwise this middleware
 * creates an entity owned by the owner in :ownerid (when present).
 * Redirects to the owner page after success.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        next();
    };
};
