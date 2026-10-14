/**
 * Load a treatment from the database using the :treatmentid param.
 * The result is saved to res.locals.treatment.
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
