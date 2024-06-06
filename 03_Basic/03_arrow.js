const user={
    username:"ramashis",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to webside`);
        console.log(this);  //Here we know this keyword acces all the value in the scope
    }
}
// user.welcomeMessage()
// user.username="hitesh"  //Here we seen we change the context so it is automatically cgange
// user.welcomeMessage()


// console.log(this);

// function chai(){     
//     let username="ram"        //Here we seen this only work in obje ct not the funcation 
//     console.log(this.username);       //Here we seen when we runn the this in a funcation that time all function call
// }
// chai()

// const chai = function (){
//     let username="hitesh"       //Here we seen here also the output value is undefine 
//     console.log(this.username);
// }
// chai()


// const chai =  () =>{
//     let username="hitesh"       //Here we seen when we use the arrtow funcatin that time the cod ewill excute 
//     console.log(this);
// }
// chai()

//++++++++++++++++++++++++++    Proper Arrow funcationm   +++++++++++++++++++++++

//Syntax
// const addtwo=(num1, num2) => {
//     return num1+num2             //Explicity retun
// }

// console.log(addtwo(4,8));


// const addtwo=(num1,num2) => num1+num2
// const addtwo=(num1,num2) => (num1+num2)  //Implicity return type
// console.log(addtwo(4,8));

const addtwo=(num1,num2) => ({username:"ramashsis"})  //When we return the object that time we wrrape the (  )
console.log(addtwo(4,8));