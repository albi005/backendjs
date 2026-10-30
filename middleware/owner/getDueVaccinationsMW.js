/**
 * Load every owner ordered by vaccination urgency: owners with a never
 * vaccinated animal first, then by the days since the most overdue animal's
 * last vaccination. The result is saved to res.locals.owners.
 */

const requireOption = require('../requireOption');
const { owners, animalsOfOwner, treatmentsOfAnimal } = require('../../mockData');
const { daysSince } = require('../../util');

const ANNUAL_VACCINATION_DAYS = 365;

const daysSinceLastVaccination = (animal) => {
    const dates = treatmentsOfAnimal(animal._id)
        .filter((treatment) => treatment.vaccinated)
        .map((treatment) => treatment.date);

    return dates.length === 0 ? null : daysSince(Math.max(...dates));
};

module.exports = function (objectRepository) {
    return function (req, res, next) {
        res.locals.owners = owners
            .map((owner) => {
                const days = animalsOfOwner(owner._id).map(daysSinceLastVaccination);

                if (days.length === 0) {
                    return { ...owner, vaccination: '–', status: 'none', urgency: -Infinity };
                }

                if (days.includes(null)) {
                    return {
                        ...owner,
                        vaccination: 'nem volt',
                        status: 'never',
                        urgency: Infinity
                    };
                }

                const longest = Math.max(...days);
                return {
                    ...owner,
                    vaccination: longest + ' napja',
                    status: longest > ANNUAL_VACCINATION_DAYS ? 'overdue' : 'recent',
                    urgency: longest
                };
            })
            .sort((first, second) => second.urgency - first.urgency);

        return next();
    };
};
