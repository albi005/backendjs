/**
 * Load an animal from the database using the :animalid param.
 * The result is saved to res.locals.animal.
 */

const requireOption = require('../requireOption');
const { findAnimal, withOwner } = require('../../mockData');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        const animal = findAnimal(req.params.animalid);
        if (!animal) {
            return next(new Error('Animal not found'));
        }

        res.locals.animal = withOwner(animal);
        return next();
    };
};
