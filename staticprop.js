class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    };
    logMe(){
        console.log(`Username: ${this.username}`);
    };

    /*static createId(){
        return `123`,
    }*/

};

const Deepak = new User("Deepak", "deepak@example.com", "6864775")
    console.log(Deepak)

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());