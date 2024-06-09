const coding=["js","ruby","java"]

const values=coding.forEach((item)=>{

    console.log(item);
    return item

})

console.log(values);


const myNum=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNum.filter( (num)=>{
//     return num>4   //If we not mentation yhe return because we write the scope 
// })


//If we use for each

const newNums=[]
myNum.forEach ((num)=>{
    if (num>4){
        newNums.push(num)
    }
})
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userBook=books.filter( (bk)=> bk.genre === 'History')   //Arrow function we use the filter funcatrion
//   const userBook = books.filter(function(bk) {  //normal function
//     return bk.genre === 'History';
//   });
  
//console.log(userBook);

userBook=books.filter((bk)=>{return bk.publish>=2000})  //Here we see the if we use the arrow function that time thr return keyword is write
console.log(userBook);