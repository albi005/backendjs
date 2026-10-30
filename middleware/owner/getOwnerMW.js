/**
 * Load an owner from the database using the :ownerid param.
 * The result is saved to res.locals.owner.
 */

const requireOption = require('../requireOption');
const { findOwner } = require('../../mockData');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        const owner = findOwner(req.params.ownerid);
        if (!owner) {
            return next(new Error('Owner not found'));
        }

        res.locals.owner = owner;
        return next();
    };
};
