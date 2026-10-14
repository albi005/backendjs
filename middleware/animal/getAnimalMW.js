/**
 * Load an animal from the database using the :animalid param.
 * The result is saved to res.locals.animal.
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
