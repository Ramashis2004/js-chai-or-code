//let score = "34abgffsg";
let score = true;


console.log(typeof score); // "number"
console.log(typeof (score)); // "number"

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // "number"
console.log(valueInNumber); // 34


//"33"=>33
//"33"=>Nan
//true=>1;false=>0
let isLoggedIn="1"

let booleanIsloggedIn=Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

//1=>true,0=>false
//"  "=>false
//"ram"=>true


//**********Opration ********//
let Value=30;
let negValue=-Value
console.log(negValue);


console.log(2+2)
console.log(2*2)
console.log(2^2)

let str1 ="ram"
let str2 =" Hari"
let str3 =str1+str2
console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")//Here we see fist two digit add ir=t mean 3 and add the string 2 so the output is 32
console.log("1"+2)


let Ram=100
++Ram;
console.log(Ram)