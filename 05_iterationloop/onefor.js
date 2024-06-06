//for

for (let i = 0; i < 100; i++) {
    const element = i;
   // console.log(element);
    
}
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
      //  console.log("5 is best");
    }
   //console.log(element);
    
}

for (let i= 0; i<10; i++) {
   // console.log(`outer loop value :${i}`);
   for (let j = 0; j<10;j++) {
   // console.log(`outer loop value:${j}`);
   // console.log(i+ '*'+j+ '=' +i*j);
   } 
}

let myArray = ["ram", "sam", "hari"];
    //console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);
}


//Break and continue
// for (let index = 0; index <=20; index++) {
//     if(index== 5){
//         console.log(`Detecte 5`);
//         break   //Here we see when the value is break that time the code is not run

//     }
//    console.log(`The valuue i id ${index}`);
    
// }
 //Break and continue
for (let index = 0; index <=20; index++) {
    if(index== 5){
        console.log(`Detecte 5`);
        continue  //Here we see when the value is continue that time the code is  run

    }
   console.log(`The valuue i id ${index}`);
    
}