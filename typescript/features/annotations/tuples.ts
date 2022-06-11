const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown',true,40]; //tuplas mantém a ordem dos tipos no array
//pepsi[0] = 40;
const sprite: Drink = ['clear',true,33];

