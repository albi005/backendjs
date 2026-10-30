/**
 * Load the treatments that belong to res.locals.animal from the database.
 * The result is saved to res.locals.treatments.
 */

const requireOption = require('../requireOption');
const { treatmentsOfAnimal } = require('../../mockData');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        // TODO: get data from the database in a later step
        res.locals.treatments = treatmentsOfAnimal(res.locals.animal._id);
        return next();
    };
};
