const user={
    username: "hitesh",
    price :999,

    WelcomeMessage :function(){
        console.log(`${this.username},welcome to webside`);
        console.log(this);
    }
}
//user.WelcomeMessage()
//user.username="sam"
//user.WelcomeMessage()

//console.log(this);

function chai(){
    console.log(this);
}
chai()