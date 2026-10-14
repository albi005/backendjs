/**
 * Using POST params update or save a treatment belonging to res.locals.animal
 * to the database. If res.locals.treatment is there, it's an update otherwise
 * this middleware creates an entity.
 * Redirects to the animal page after success.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        next();
    };
};
