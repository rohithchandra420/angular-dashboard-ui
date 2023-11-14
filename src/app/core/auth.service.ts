//Service Used to call API to check the login Service at the backend

import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Subject } from "rxjs";

@Injectable()
export class AuthService {
    loggedIn = false;
    user: User;

    userLoggedInEmitter = new Subject<string>();

    constructor(){//private user1: User) {
    }

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

    getUserDetails(id: string) {  
        let user1: User;      
        user1.name = 'AdminUser';
        user1.role = 'Admin';
        user1.userId = 'Admin123';        
        return user1;
    }

    logIn() {        
        this.loggedIn = true;
        // setTimeout(() => {
        //     debugger;
            localStorage.setItem("IsLoggedIn", 'true');
        //}, 2000);
        this.userLoggedInEmitter.next('AdminRole');
        
    }

    logOut() {
        this.loggedIn = false;
        localStorage.setItem("IsLoggedIn", 'false');
    }
}

