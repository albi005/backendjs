/**
 * Load the treatments that belong to res.locals.animal from the database.
 * The result is saved to res.locals.treatments.
 */

const requireOption = require('../requireOption');
const { treatmentsOfAnimal } = require('../../mockData');
const { daysSince } = require('../../util');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        res.locals.treatments = treatmentsOfAnimal(res.locals.animal._id).map((treatment) => ({
            ...treatment,
            days: daysSince(treatment.date)
        }));
        return next();
    };
};
