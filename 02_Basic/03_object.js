//singleton
//object.create

//object literal

const mySym=Symbol("key1")

const JsUser={
    name:"Ramashis",
    "full name":"Ariyan",
   // mySym:"mykey1",  //If ot is ude as a symbol then we are used like
    [mySym]:"mykey1",
    age:18,
    location:"Bbsr",
    email:"dasramashsikalyan@gmail.com",
    isloggedIn:false,
    lastloggin:["Monady","Saturday"]


}

console.log(JsUser.email);  //it is a tye to diclar a object but when  "full name":"Ariyan",  in this type diclar that type problem
console.log(JsUser["email"]);
console.log(JsUser["full name"]);  // In tyhis type all type object will diclar like this "full name":"Ariyan",
console.log(JsUser[mySym]);
console.log(typeof JsUser.mySym);


JsUser.email="dasramashsixyz@gmail.com"
Object.freeze(JsUser)   //we luck aur data so any one can not change due to yhe freeze
JsUser.email="dasramashisqwwerr@gmail.com"
console.log(JsUser);