//+++++++++++++Map+++++++++
//callback function: The function that is called for every element in the array. It takes three arguments:
const myNumers=[1,2,3,4,5,6,7,8,9,]

// const newNums=myNumers.map((num)=> {return num+10})
// console.log(newNums);

// ++++++++Chain map+++++
const newNums=myNumers 
                    .map((num)=>num*10)//here we the opration wil go to the second part
                    .map((num)=>num+1)
                    .filter((num)=>num>=40)//we  use chain map in filter
                    console.log(newNums);