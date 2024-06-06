//Immediately invoke the funcation Expression  (IIFE)

(function chai(){
    console.log(`db connected`);
})();

( () =>{
    console.log(`Db connected two`);           //why we use IIFE
                                                //Avoid Polluting the Global Namespace:

                                                 //In JavaScript, variables declared within a
                                                //function are scoped to that function.
                                                // By using an IIFE, you can create variables
                                                // and functions without polluting the global scope. This helps prevent potential conflicts with other scripts or libraries.
}

)()
;
( (name) =>{
    console.log(`Db connected two  ${name}`);
}vvbv

)("rama")

