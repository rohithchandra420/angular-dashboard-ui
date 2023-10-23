//Service Used to call API to check the login Service at the backend

import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        // debugger;
        // const promise = new Promise(
        //     (resolve, reject) => {
        //         setTimeout(() => {
        //             resolve(this.loggedIn);
        //         }, 800);                
        //     }
        // );
        // debugger;
        // return promise;
        return localStorage.getItem("IsLoggedIn")

    }

    logIn() {        
        this.loggedIn = true;
        // setTimeout(() => {
        //     debugger;
            localStorage.setItem("IsLoggedIn", 'true');
        //}, 2000);
        
    }

    logOut() {
        this.loggedIn = false;
        localStorage.setItem("IsLoggedIn", 'false');
    }
}

