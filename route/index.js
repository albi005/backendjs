const renderMW = require('../middleware/renderMW');

const getDueVaccinationsMW = require('../middleware/owner/getDueVaccinationsMW');
const getOwnersMW = require('../middleware/owner/getOwnersMW');
const getOwnerMW = require('../middleware/owner/getOwnerMW');
const saveOwnerMW = require('../middleware/owner/saveOwnerMW');
const delOwnerMW = require('../middleware/owner/delOwnerMW');

const getAnimalsMW = require('../middleware/animal/getAnimalsMW');
const getAnimalMW = require('../middleware/animal/getAnimalMW');
const saveAnimalMW = require('../middleware/animal/saveAnimalMW');
const delAnimalMW = require('../middleware/animal/delAnimalMW');

const getTreatmentsMW = require('../middleware/treatment/getTreatmentsMW');
const getTreatmentMW = require('../middleware/treatment/getTreatmentMW');
const saveTreatmentMW = require('../middleware/treatment/saveTreatmentMW');
const delTreatmentMW = require('../middleware/treatment/delTreatmentMW');

module.exports = function (app) {
    const objRepo = {};

    // Home - owners and their oldest vaccination
    app.get(
        '/',
        getDueVaccinationsMW(objRepo),
        renderMW(objRepo, 'index')
    );

    // Owners
    app.get(
        '/owners',
        getOwnersMW(objRepo),
        renderMW(objRepo, 'owners')
    );
    app.use(
        '/owners/new',
        saveOwnerMW(objRepo),
        renderMW(objRepo, 'owner-new')
    );
    app.get(
        '/owners/:ownerid/del',
        getOwnerMW(objRepo),
        delOwnerMW(objRepo)
    );
    app.use(
        '/owners/:ownerid',
        getOwnerMW(objRepo),
        saveOwnerMW(objRepo),
        renderMW(objRepo, 'owner')
    );

    // Animals
    app.get(
        '/animals',
        getAnimalsMW(objRepo),
        renderMW(objRepo, 'animals')
    );
    app.use(
        '/animals/new',
        saveAnimalMW(objRepo),
        renderMW(objRepo, 'animal-new')
    );
    app.get(
        '/animals/:animalid/del',
        getAnimalMW(objRepo),
        delAnimalMW(objRepo)
    );

    // Treatments - always scoped to an animal, registered before the
    // generic /animals/:animalid route so they are matched first
    app.use(
        '/animals/:animalid/treatments/new',
        getAnimalMW(objRepo),
        saveTreatmentMW(objRepo),
        renderMW(objRepo, 'animal')
    );
    app.get(
        '/animals/:animalid/treatments/:treatmentid/del',
        getAnimalMW(objRepo),
        getTreatmentMW(objRepo),
        delTreatmentMW(objRepo)
    );
    app.use(
        '/animals/:animalid/treatments/:treatmentid',
        getAnimalMW(objRepo),
        getTreatmentMW(objRepo),
        saveTreatmentMW(objRepo),
        renderMW(objRepo, 'animal')
    );
    app.use(
        '/animals/:animalid/treatments',
        getAnimalMW(objRepo),
        getTreatmentsMW(objRepo),
        renderMW(objRepo, 'animal')
    );

    // Animal detail - keep last, it is a prefix for the treatment routes
    app.use(
        '/animals/:animalid',
        getAnimalMW(objRepo),
        saveAnimalMW(objRepo),
        renderMW(objRepo, 'animal')
    );
};
