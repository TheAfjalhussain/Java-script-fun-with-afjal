class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
     
    //createId ka use her ek ko new id dene ke leye use hota hai.
    //static ka use usme kiya jata hai jisme sab ke pass ek unique id hoga
    // lekin jisme static laga hua hai usse unique id nai milega.
    
     createId(){
        return `123`
    }

    //  static createId(){
    //     return `123`
    // }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe())
console.log(iphone.createId());