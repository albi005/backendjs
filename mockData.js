const { daysAgo } = require('./util');

const owners = [
    { _id: 'o1', name: 'Kovács István', address: 'Budapest, Kossuth Lajos utca 12.', contact: '+36 30 123 4567' },
    { _id: 'o2', name: 'Nagy Erzsébet', address: 'Debrecen, Petőfi Sándor utca 3.', contact: 'nagy.erzsebet@gmail.com' },
    { _id: 'o3', name: 'Szabó László', address: 'Szeged, Rákóczi út 45.', contact: '+36 20 987 6543' },
    { _id: 'o4', name: 'Tóth Katalin', address: 'Pécs, Ady Endre utca 8.', contact: 'toth.katalin@freemail.hu' },
    { _id: 'o5', name: 'Horváth Zoltán', address: 'Győr, Dózsa György út 27.', contact: '+36 70 555 1234' },
    { _id: 'o6', name: 'Varga Judit', address: 'Miskolc, Széchenyi utca 19.', contact: 'varga.judit@gmail.com' },
    { _id: 'o7', name: 'Kiss Sándor', address: 'Szolnok, Béke utca 6.', contact: '+36 30 222 3344' },
    { _id: 'o8', name: 'Molnár Gábor', address: 'Eger, Vasút utca 34.', contact: 'molnar.gabor@citromail.hu' },
    { _id: 'o9', name: 'Németh Ildikó', address: 'Veszprém, Fő utca 2.', contact: '+36 20 444 5566' },
    { _id: 'o10', name: 'Farkas Attila', address: 'Szombathely, Deák Ferenc tér 11.', contact: 'farkas.attila@gmail.com' },
    { _id: 'o11', name: 'Balogh Ágnes', address: 'Nyíregyháza, Táncsics Mihály utca 40.', contact: '+36 70 777 8899' },
    { _id: 'o12', name: 'Papp Zsolt', address: 'Kecskemét, Rákóczi út 88.', contact: 'papp.zsolt@freemail.hu' },
    { _id: 'o13', name: 'Szűcs Emese', address: 'Székesfehérvár, Mátyás király körút 7.', contact: '+36 30 111 2233' },
    { _id: 'o14', name: 'Lakatos Dániel', address: 'Tatabánya, Bányász utca 5.', contact: 'lakatos.daniel@gmail.com' }
];

const animals = [
    { _id: 'a1', name: 'Bodri', species: 'Kutya', _ownerId: 'o8' },
    { _id: 'a2', name: 'Cirmos', species: 'Macska', _ownerId: 'o8' },
    { _id: 'a3', name: 'Buksi', species: 'Kutya', _ownerId: 'o1' },
    { _id: 'a4', name: 'Morzsa', species: 'Kutya', _ownerId: 'o2' },
    { _id: 'a5', name: 'Pötyi', species: 'Macska', _ownerId: 'o3' },
    { _id: 'a6', name: 'Füles', species: 'Nyúl', _ownerId: 'o4' },
    { _id: 'a7', name: 'Dundi', species: 'Hörcsög', _ownerId: 'o5' },
    { _id: 'a8', name: 'Rigó', species: 'Papagáj', _ownerId: 'o6' },
    { _id: 'a9', name: 'Zsemle', species: 'Kutya', _ownerId: 'o7' },
    { _id: 'a10', name: 'Mogyoró', species: 'Hörcsög', _ownerId: 'o9' },
    { _id: 'a11', name: 'Lili', species: 'Macska', _ownerId: 'o10' },
    { _id: 'a12', name: 'Csillag', species: 'Kutya', _ownerId: 'o11' }
];

const treatments = [
    { _id: 't1', _animalId: 'a1', date: daysAgo(912), vaccinated: true, description: 'Veszettség elleni oltás' },
    { _id: 't2', _animalId: 'a1', date: daysAgo(1010), vaccinated: false, description: 'Éves szűrővizsgálat' },
    { _id: 't3', _animalId: 'a1', date: daysAgo(1097), vaccinated: false, description: 'Fogkő-eltávolítás' },
    { _id: 't4', _animalId: 'a1', date: daysAgo(1561), vaccinated: true, description: 'Kombinált oltás' },
    { _id: 't5', _animalId: 'a1', date: daysAgo(1806), vaccinated: false, description: 'Féregtelenítés' },
    { _id: 't6', _animalId: 'a1', date: daysAgo(1884), vaccinated: true, description: 'Veszettség elleni oltás' },
    { _id: 't7', _animalId: 'a1', date: daysAgo(2201), vaccinated: false, description: 'Ízületi gyulladás kezelése' },
    { _id: 't8', _animalId: 'a1', date: daysAgo(2492), vaccinated: true, description: 'Kombinált oltás' },
    { _id: 't9', _animalId: 'a3', date: daysAgo(1039), vaccinated: true, description: 'Veszettség elleni oltás' },
    { _id: 't10', _animalId: 'a4', date: daysAgo(2326), vaccinated: true, description: 'Kombinált oltás' },
    { _id: 't11', _animalId: 'a5', date: daysAgo(150), vaccinated: true, description: 'Veszettség elleni oltás' },
    { _id: 't12', _animalId: 'a7', date: daysAgo(90), vaccinated: true, description: 'Veszettség elleni oltás' },
    { _id: 't13', _animalId: 'a8', date: daysAgo(240), vaccinated: true, description: 'Kombinált oltás' },
    { _id: 't14', _animalId: 'a9', date: daysAgo(300), vaccinated: true, description: 'Veszettség elleni oltás' },
    { _id: 't15', _animalId: 'a10', date: daysAgo(60), vaccinated: true, description: 'Kombinált oltás' }
];

const findOwner = (id) => owners.find((owner) => owner._id === id);
const findAnimal = (id) => animals.find((animal) => animal._id === id);
const findTreatment = (id) => treatments.find((treatment) => treatment._id === id);

const animalsOfOwner = (ownerId) => animals.filter((animal) => animal._ownerId === ownerId);
const treatmentsOfAnimal = (animalId) =>
    treatments.filter((treatment) => treatment._animalId === animalId);

const withOwner = (animal) => {
    const owner = findOwner(animal._ownerId);
    return {
        ...animal,
        ownerName: owner ? owner.name : '',
        ownerAddress: owner ? owner.address : ''
    };
};

module.exports = {
    owners,
    animals,
    treatments,
    findOwner,
    findAnimal,
    findTreatment,
    animalsOfOwner,
    treatmentsOfAnimal,
    withOwner
};
