import { Sorter } from "./Sorter";

class Nodo{

    next: Nodo | null = null;

    constructor(public data: number){}

}


export class LinkedList extends Sorter{
    head: Nodo | null = null;

    add(data: number): void{
        const node = new Nodo(data);
        if(!this.head){
            this.head = node;
            return;
        }

        let tail = this.head;
        while(tail.next){
            tail = tail.next;
        }
        tail.next = node;
    }

    get length() : number {
        if(!this.head)
            return 0;
        let count = 1;
        let node = this.head;

        while(node.next){
            node = node.next;
            count++;
        }

        return count;
    }

    at(index: number): Nodo{
        if(!this.head){
            throw new Error('Index out of bounds');
        }

        let count = 0;
        let node: Nodo | null = this.head;

        while(node){
            if(index === count){
                return node;
            }
         
            count++
            node = node.next;
        }

        throw new Error('Index out of bounds');
    }

    compare(leftIndex: number, rightIndex: number):boolean{
        if(!this.head){
            throw new Error("List is empty");
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number):void{
        const nodoEsq = this.at(leftIndex);
        const nodoDir = this.at(rightIndex);

        const temp = nodoEsq.data;
        nodoEsq.data = nodoDir.data;
        nodoDir.data = temp;
    }

    print():void{
        if(!this.head){
            return;
        }

        let node: Nodo | null = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }

    }

}
