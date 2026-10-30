/**
 * Load a treatment from the database using the :treatmentid param.
 * The result is saved to res.locals.treatment.
 */

const requireOption = require('../requireOption');
const { findTreatment } = require('../../mockData');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        const treatment = findTreatment(req.params.treatmentid);
        if (!treatment) {
            return next(new Error('Treatment not found'));
        }

        res.locals.treatment = treatment;
        return next();
    };
};
