import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const collection = new NumbersCollection([44,3,-5,0]);
collection.sort();
// const sorter = new Sorter(collection);
// sorter.sort();
console.log(collection.data);

const str_collection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(collection);
str_collection.sort();
console.log(str_collection.data);


const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(-5);
linkedList.add(700);
linkedList.add(85);
linkedList.add(66);
// const sorter = new Sorter(linkedList);
linkedList.sort();
// console.log(sorter.collection);
linkedList.print();
