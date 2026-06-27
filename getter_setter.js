
    class User {
        constructor(email, password){
            this.email = email
            this.password = password
        }

        get email(){
            return this._email.toUpperCase()
        }

        set email(value){
            this._email = value
        }

        get password(){
            return this._password
        }

        set password(value){
            this._password = value
        }
    };

    const Deepak = new User("deepak@example.com", "7865");

    console.log(Deepak.email);
    console.log(Deepak.password);