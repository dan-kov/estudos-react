import faker from 'faker';


export class User{
    name: string;
    localization : {
        lat: number;
        lng: number;
    }

    constructor(){
        this.name = faker.name.firstName();
        this.localization = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

}