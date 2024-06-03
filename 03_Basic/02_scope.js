var c=300    //Global scope
let a=100
    const b=200
if(true){
    let a=10  //Local scope
    const b=20  //Yes, in JavaScript, local scope takes priority over global scope.
    var c=30  //Here we see the otput as a 30 it mean local scope is more priority so var run imediately
    //console.log("INNER:  ", a);    //Here we see the local scope it mean in loacal scope it run locally  mean block scope

}
//console.log(a);
//console.log(b);
//console.log(c);


function one() {           //It can't run properly why i don't know
    const username = "hitesh";

    function two() {
        const webside = "youtube";
        console.log(username); // This works because `username` is in the parent scope of `two`.
    }

    console.log(webside); // This throws a ReferenceError because `webside` is not defined in this scope.
    two();
}
//Here the correct code
function one() {
    const username = "hitesh";

    function two() {
        const webside = "youtube";
        console.log(username); // This works.
        console.log(webside);  // This also works.
    }

    // Removed the line console.log(webside); because webside is not defined in this scope.

    two(); // Call the inner function to execute its code.
}

one(); // Call the outer function to run the code.

//When one() is called, it executes the code inside one.
//one calls two().
//Inside two(), it logs "hitesh" (value of username) and "youtube" (value of webside) to the console.

if (true){
    const username="ramashis"
    if(username==="ramashis"){
        const webside="youtube"
        console.log(username+webside);  //It run successfully beacuse it run inside the block
    }
    //console.log(webside);  //here we the error beacuse in this scope it can't diclar
}
//console.log(username);  //Here it is error because it run totally outside the scope



//+++++++++++++++++++++++++++++IMP+++++++++++++++++++++++++++++++++

console.log((addone(5)));
function addone(num) {
    return num+1
    
    
}

/*addtwo(5)
const addtwo=function (num){
return num+2 

    
}*/

/*const addtwo = function(num) {
    return num + 2;
};

addtwo(5);*/

