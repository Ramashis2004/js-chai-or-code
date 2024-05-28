//    Primitive    //

// Which are not change   all primitive datatype all are call by value  //
//7 type of : String,Number, Bollean,null,undefine,Symbol,Bigint//


/*const score =100
const scoreValue=100

console.log(score === scoreValue);//True

const isLoggedIn=False;*/


/*const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

//Reference or Non-Primitive   //
//  Arrays,object  //

console.log(typeof 42);          // "number"
console.log(typeof 'Hello');     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (a well-known quirk in JavaScript)
console.log(typeof Symbol('id'));// "symbol"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){});// "function"*/




//++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Premitive)    ,Heap(Non-primitive)

let myYoutube ="ram"
let anothername=myYoutube   //here we seen thye stack are work because only its copy
anothername="hari"
console.log(myYoutube);
console.log(anothername);


//Heap  //
let userOne= {
    email: "user@gamil.com",
    upi: "user@ybl"
}
let userTwo=userOne
userTwo.email="ramama@gamil.com"  //Here wer use stack so that the reference are use 
console.log(userOne.email);
console.log(userTwo.email);


