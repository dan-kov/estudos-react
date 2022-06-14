import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
    constructor(public data: number[]){  
        super();
    }

    compare(leftIndex: number, rightIndex: number): boolean{
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void{
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }

    // permite acesso a length como uma propriedade
    get length(): number {
        return this.data.length;
    }

}