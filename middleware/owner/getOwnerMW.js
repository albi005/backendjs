/**
 * Load an owner from the database using the :ownerid param.
 * The result is saved to res.locals.owner.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        next();
    };
};
