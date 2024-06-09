//reduce

const myNum=[1,2,3]

// const myTotal=myNum.reduce (function (acc,curvalue){
//     console.log(`acc:${acc}and curval:${curvalue}`);
//     return acc+curvalue
// },0)

//Using arrow funcation
const myTotal = myNum.reduce((acc,curr)=>acc+curr,0)  //Smart code
console.log(myTotal);



const shoppingCard=[
    {
        itemName: "Js cource",
        price:999
    },
    {
        itemName: "Java cource",
        price:999
    },
    {
        itemName: "py cource",
        price:999
    },
    {
        itemName: "data cource",
        price:999
    }
]

//add all value using reduce
const pricetopay =shoppingCard.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);

//complte understand first we diclar 0 as a curvalue },0) thenn the opration in reduce is acc=0 and 
//add the acc+curvalue is q the the value which is return which is go to the acc the it is again add
//in this process it is excute