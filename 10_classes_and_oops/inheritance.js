class User {
    constructor(username){
        this.username = username
    }
    //logMe() jo bhee apne user name set kiya hai or value set kiya hai uska value de deta hai.
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
// prototype ke jaysa hai extends jodta hai dusre ko.
class Teacher extends User{
    constructor(username, email, password){
        super(username)  //call ka advance version hai super aur isme this bhee nai lagana padta hai ye apne app le leta hai.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
 chai.addCourse();
  chai.logMe()
const masalaChai = new User("masalaChai")

// masalaChai.logMe()

console.log(chai instanceof User);