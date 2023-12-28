//homework1

let pet ={
    pet_type: 'cat',
    pet_breed: 'metis',
    pet_name: 'Kokos',
    pet_age: 3,
    chip_number: 276093401234567,
    vaccination:{
        date1: '01.12.2020',
        vaccin_type1: ['rabies', 'complex']
    },
    get petInfo() {
        return pet
}
};

//console.log(pet)

pet.vaccination.date2 = '01.12.2021';
pet.vaccination.vaccin_type2 = ['rabies', 'complex']

console.log(pet)