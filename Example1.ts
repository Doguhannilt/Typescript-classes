interface UserInterface {
    username: string;
    password: string;
}

class User implements UserInterface {
    private _username: string;
    private _password: string;

    constructor( username: string,  password: string) {
        this._username = username;
        this._password = password;
    }


    get username(): string {
        return this._username;
    }

    set username(username: string) {
        if (username.length < 3) {
            console.error("Kullanıcı adı en az 3 karakter olmalı.");
            return;
        }

        this._username = username;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        if (password.length < 6) {
            console.error("Şifre en az 6 karakter olmalı.");
            return;
        }

        this._password = password;
    }
}

const user = new User("JohnDoe", "Passw0rd");
console.log(user.username); // "JohnDoe"

user.username = "JD"; 

console.log(user.password); // "Passw0rd"
user.password = "NewPassw0rd";
