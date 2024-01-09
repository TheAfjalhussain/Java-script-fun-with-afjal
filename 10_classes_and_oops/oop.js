const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

//     getUserDetails: function(){
//        console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);
//        console.log(this);
//       // this ka matlab hai apna.
//     }

 }



// console.log(user.username)
// console.log(user.getUserDetails());
//  console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

   // return this
}
// new ka matlab hai ek naya empty object create ho raha hai or karna hai.

// const userOne = new User("hitesh", 12, true)
 const userTwo = new User("ChaiAurCode", 11, false)
 // console.log(userOne);
 console.log(userTwo);

// ek aur operater hota hai intense of usko app khud hi padhiye ga mdn se.