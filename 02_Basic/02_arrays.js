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