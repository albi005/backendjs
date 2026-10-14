/**
 * Remove res.locals.treatment from the database.
 * Redirects to the animal page after delete.
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
