//We diclar in this  code in singletone

//const tinderUser=new Object()  
const tinderUser={}       //Here we see in thhis style we diclar the object
    tinderUser.id="123"
    tinderUser.name="Ramashis"
    tinderUser.isLoggedIn="false"

//console.log(tinderUser);


const regularUser={
    email: "dasramashsi@gmail.com",
    fullname:{
    userfullname:{
        firstname:"Ramashis",
        lastname:"Das",
    }
    }
}
//console.log(regularUser.fullname.userfullname);  //Here we see we diclar level by level

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3=Object.assign({},obj1,obj2,obj4)  //Here we see the empty object it called source and other is target so we 
const obj3={...obj1,...obj2}   //Most of the timenwe use this type
//console.log(obj3);

const user=[
    {
        id:1,
        email:"dasram@gamil.com"
    },
    {
        id:1,
        email:"dasram@gamil.com"
    },
]

//user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnpropety('isLoggedin'));  //It can't understand


const course={
    coursename: "js in hindi",
    price:"999",
    courseInstuctor:"Hare krishna"
}
//console.log(course.courseInstuctor);

const {courseInstuctor: instructor}=course//Here we see the destructure the code
console.log(instructor);
