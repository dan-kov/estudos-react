const carMakers : string[] = []; // ['ford', 'toyota', 'chevy'];

let carByMakers :string[][] = [];

carMakers.map((car:string): string => {
    return car.charAt(0);
});

const importantDates : (string | Date)[]  = [];//['str',new Date()];