/**
 * Load all animals from the database. When res.locals.owner is present,
 * only the animals of that owner are loaded.
 * The result is saved to res.locals.animals.
 */

const requireOption = require('../requireOption');
const { animals, animalsOfOwner, withOwner } = require('../../mockData');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        // TODO: get data from the database in a later step
        const list = res.locals.owner ? animalsOfOwner(res.locals.owner._id) : animals;
        res.locals.animals = list.map(withOwner);
        return next();
    };
};
