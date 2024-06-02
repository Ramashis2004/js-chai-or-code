const marvel_hero=["thor","ironman","soiderman"]
const dc_hero=["superman","flash","batman"]

marvel_hero.push(dc_hero)  //the operation push and conat are same

//console.log(marvel_hero);

marvel_hero.concat(dc_hero)
//console.log(marvel_hero);

const allHero=marvel_hero.concat(dc_hero)  //In this process we add two arraay bu not more than two array
//console.log(allHero);

const all_new_hero=[...marvel_hero,...dc_hero]
console.log(all_new_hero);   //In this process add numkbaer of array

const another_array=[1,2,3,[4,5,6],7,8,[6,7[8,9,10]]]
const real_another_array=another_array.flat(Infinity)    //Here we see the merge the depth of array
console.log(real_another_array);

console.log(Array.isArray("Ramashis"));  //Here we see it will not an array

console.log(Array.from("Ramashis"));//But here we see it will convert in array

console.log(Array.from({name:"Ramashis"}));  //Important here we see the output give a bracket so it create a bracket



let score1=100
let score2=200
let score3=300

console.log((Array.of(score1,score2,score3)));



/*All array mehod
These methods modify the array itself:

push(element1, ..., elementN): Adds one or more elements to the end of an array and returns the new length of the array.
pop(): Removes the last element from an array and returns that element.
shift(): Removes the first element from an array and returns that element.
unshift(element1, ..., elementN): Adds one or more elements to the beginning of an array and returns the new length of the array.
splice(start, deleteCount, item1, ..., itemN): Adds or removes elements from an array.
sort([compareFunction]): Sorts the elements of an array in place and returns the array.
reverse(): Reverses the order of the elements of an array in place.
fill(value, start, end): Fills all the elements of an array from a start index to an end index with a static value.
copyWithin(target, start, end): Copies a sequence of array elements within the array to the position starting at target.


Accessor Methods
These methods do not modify the array but return some representation of the array:

concat(array1, ..., arrayN): Returns a new array comprised of this array joined with other array(s) and/or value(s).
join(separator): Joins all elements of an array into a string and returns this string.
slice(start, end): Extracts a section of an array and returns a new array.
includes(element, fromIndex): Determines whether an array includes a certain element, returning true or false.
indexOf(element, fromIndex): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
lastIndexOf(element, fromIndex): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
toString(): Returns a string representing the array and its elements.
toLocaleString(): Returns a localized string representing the array and its elements.*/