import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort();
console.log("*** Sorted NumbersCollection: ***");
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('fcgbahde');
charactersCollection.sort();
console.log("*** Sorted CharacterCollection: ***");
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
console.log("*** Sorted LinkedList: ***");
linkedList.print();