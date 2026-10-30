/**
 * Load every owner together with the days since the last vaccination of
 * their most overdue animal. The result is saved to res.locals.owners.
 */

const requireOption = require('../requireOption');
const { owners, animalsOfOwner, treatmentsOfAnimal } = require('../../mockData');

const daysSinceLastVaccination = (animal) => {
    const days = treatmentsOfAnimal(animal._id)
        .filter((treatment) => treatment.vaccinated)
        .map((treatment) => treatment.days);

    return days.length === 0 ? null : Math.min.apply(null, days);
};

module.exports = function (objectRepository) {
    return function (req, res, next) {
        res.locals.owners = owners.map((owner) => {
            const days = animalsOfOwner(owner._id)
                .map(daysSinceLastVaccination)
                .filter((value) => value !== null);

            if (days.length === 0) {
                return { ...owner, vaccination: 'nem volt', status: 'never' };
            }

            const longest = Math.max.apply(null, days);
            return {
                ...owner,
                vaccination: longest + ' napja',
                status: longest < 1100 ? 'recent' : 'overdue'
            };
        });
        return next();
    };
};
