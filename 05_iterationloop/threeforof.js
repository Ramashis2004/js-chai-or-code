//  For of

//["" ,"",""]

const arr=[1,2,3,4,5]

for (const num of arr) {
 //   console.log(num);
    
}

const greetings="Hello world"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}

//Maps

const map=new Map()
map.set('IN' ,"India")
map.set('USA',"Unites sate of america")
map.set('Fr',"France")
//map.set('IN' ,"India")   Her we see the code is not run so the map funcation only single time run 
//console.log(map);

for (const [key,value] of map) {
    console.log([key,':-', value]);
    
}

