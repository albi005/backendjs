/**
 * Load every owner together with the date of the oldest recorded
 * vaccination of their animals. The result is saved to res.locals.owners.
 */

const requireOption = require('../requireOption');
const { owners, animalsOfOwner, treatmentsOfAnimal } = require('../../mockData');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        res.locals.owners = owners.map((owner) => {
            const vaccineDays = animalsOfOwner(owner._id)
                .flatMap((animal) => treatmentsOfAnimal(animal._id))
                .filter((treatment) => treatment.vaccinated)
                .map((treatment) => treatment.days);

            if (vaccineDays.length === 0) {
                return { ...owner, vaccination: 'nem volt', status: 'never' };
            }

            const days = Math.max.apply(null, vaccineDays);
            return {
                ...owner,
                vaccination: days + ' napja',
                status: days < 1100 ? 'recent' : 'overdue'
            };
        });
        return next();
    };
};
