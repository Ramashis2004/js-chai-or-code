

function sayMyname(){
    console.log("r");
    console.log("a");
    console.log("m");
    console.log("a");

}
sayMyname()

function addTwonumber(number1,number2){   //parameter
    console.log(number1+number2);
}
addTwonumber(3,6)   //arguments

function addTwonumber(number1,number2){
   // let result=number1+number2         //Here we see new type of return the value
    //return result
    return number1+number2
}
const result=addTwonumber(3,5)
//console.log("Result  ",result);

function loginUsername(username) {
    if (username === undefined) {
        console.log("Please enter a user name");
        return;
    }
    return `${username} just logged in`;
}


function calculetCartPrice(val1,val2,...num1) {  //When only num1 that time only one value as a output ,Here it is called rest operator herer the use case depend when it is spade and when it is sparde
    return num1
}
console.log(calculetCartPrice(200,400,900)); 

const user={                  //here we check how the object call the function
    username: "ramashis",
    price:999
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} amd price is $ {anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "ram",
    price:399
})

const myNewArray=[200,400,600]  //Here we see how to diclar array of a function
function returnSecondvalue(getArray) {
    return getArray[1]
    
}
console.log(returnSecondvalue(myNewArray));