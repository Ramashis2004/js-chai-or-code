//The all falsy value
// False, 0,-0,Bigint on,"",null,undefine,NaN

//truly value
// "0",'false',"  ",[],{},funcation(){}

// const userEmail=[]    //Here we check yhe truly property is used
//     if(userEmail){
//         console.log("Got user email");
//     }else{
//         console.log("Don't have user email");
//     }

//     if(userEmail.length ===0){
//         console.log("Array is empty");
//     }
    // const emptyObj={     //It can't under stand
    //     if (object.keys(emptyObj).length===0){
    //         console.log("Object is empty");
    //     }
    // }


    //+++++++Nullish Coalescing oerator+++++++++++

    //The nullish coalescing operator (??) in JavaScript offers several
    // advantages, particularly in terms of handling default values and 
    //improving code readability and maintainability. Here are the key benefits:

    let val1;
    val1= 5?? 10  //val1 is 5 because 5 is neither null nor undefined
    val1=null??3  //val1 is 3 because null is nullish
    val1=undefined??4  //val1 is 4 because undefined is nullish
    val1 =null ??10??30//output 10
    console.log(val1);

    //Ternary operator
    //condition ? true: false

    const iceTeaprice =100
    iceTeaprice <80 ?console.log("less than 80"): console.log("grteter than 80");