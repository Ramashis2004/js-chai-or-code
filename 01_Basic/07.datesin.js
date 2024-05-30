//Date

/*let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)//So always remember date is an object*/
/*let myCreatedDate = new Date(2023, 0, 23);

//Here we seen our inpuit is 0 but outpt are janauary so 0 means january
 console.log(myCreatedDate)
 let myTimeStamp=Date.now()
 console.log(myTimeStamp);*/
 

 let newDate=new Date()
 console.log(newDate);
 console.log(newDate.getMonth());
 console.log(newDate.getDay());



 newDate.toLocaleString('default',{
    weekday:"long"
 }
    
 )

/* Some methos in date 
 1.Get methos   
 let date = new Date();
 console.log(date.getFullYear()); // 2023
 console.log(date.getMonth()); // 0 (January)
 console.log(date.getDate()); // 23
 console.log(date.getDay()); // 1 (Monday)
 console.log(date.getHours()); // 10
 console.log(date.getMinutes()); // 30
 console.log(date.getSeconds()); // 0
 console.log(date.getMilliseconds()); // 0
 console.log(date.getTime()); // Milliseconds since epoch

 
 2.Set method
 let date = new Date();
 date.setFullYear(2024);
 date.setMonth(5); // June
 date.setDate(15);
 date.setHours(14);
 date.setMinutes(45);
 date.setSeconds(30);
 date.setMilliseconds(500);


 3.Adding and substract time
 let date = new Date();
 date.setDate(date.getDate() + 5); // Add 5 days
 console.log(date);
 date.setHours(date.getHours() - 3); // Subtract 3 hours
 console.log(date);*/
  
 