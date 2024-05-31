//arrays:;Collecting multiple data in single variable

const myArr=[0,1,2,3,4,5]
/*const myHero=["Ram","Hari","Gautam"]

console.log(myArr[1]);
console.log(myHero[2]);


//Arrays Method

myArr.push(7)
myArr.pop()  //Automatically remove anumber
console.log(myArr);*/

//myArr.unshift(7)  //Here we see when we use shieft then the 7 are directly come to thw front
//myArr.shift()

//console.log(myArr);

//console.log(myArr.includes(9));  //It is the function we use find the the 9 number element are avalabe or not
//nsole.log(myArr.indexOf(3));  //It is use which number are present at index number 3

//const newArr=myArr.join()  //Here we see we add the array

//console.log(myArr); 
//console.log(newArr);
//console.log(typeof newArr);  //Here we see the aarray type is string
//console.log(typeof myArr);   //Here we see the aarray type is 


console.log("A",myArr);
const myn1=myArr.slice(1 ,3)  //Here complte details in slice here we see slice mean the output is one less of our end value ,
//it mean it put as a satrt value and end value and output as a one less 
//Mostly i say like this so thae the inteviewer may be not satisfaied 
//But the real actual answer is slice mean sallow caopy with a array 

console.log(myn1);
console.log("B", myArr);

const myn2=myArr.splice(1,3)  
//Splice mean it it allow the last value
//but the actual answer is it remove the the portion which is presenting slice output
//To change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log("c",myArr);
console.log(myn2);