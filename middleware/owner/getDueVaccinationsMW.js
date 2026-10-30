/**
 * Load every owner together with the date of the oldest recorded
 * vaccination of their animals. The result is saved to res.locals.owners.
 */

const requireOption = require('../requireOption');
const { owners, animals, treatments } = require('../../mockData');

module.exports = function (objectRepository) {
    return function (req, res, next) {
        res.locals.owners = owners.map((owner) => {
            const vaccineDays = animals
                .filter((animal) => animal._ownerId === owner._id)
                .flatMap((animal) =>
                    treatments.filter((t) => t._animalId === animal._id && t.vaccinated)
                )
                .map((t) => t.days);

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
