//if

// if(true){

// }
// if(false){

// }

// //or
// if(2==2){

// }
// const isuserloggedIn=true
// if(isuserloggedIn){

// }                              //Operator <, >,=,==,===,!=,!==,


// const temerture=42
// if(temerture===40){
//     console.log("less than 50");
// } else{
//     console.log("tempture greter 50");
// }

//Block scope
// const score=200
// if (score >100){
//     let power="fly"      //if i use the var then it is run properly
//     console.log(`user power :${power}`);
// }
// console.log(`User power:${power}`);


// 


const userLoggedIn=true
const debitcard=true
const loggedIngoogle=true
const loggedInEmail=false
if(userLoggedIn && debitcard && 2==2){  // And Here we see ane && use for check number of condition
    console.log("Allow to user");

}   
if(loggedIngoogle || loggedInEmail){  //Or Here we ceck if 2 condition are true then it is excute
    console.log("Hii it is use");
}
