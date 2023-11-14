import { Component } from "@angular/core";
import { AuthService } from "../core/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    userRole;

    constructor(private authService: AuthService) {}
    
    ngOnInit() {
        this.authService.userLoggedInEmitter.subscribe( isLoggedIn => {
            this.userRole = isLoggedIn;
            console.log(this.userRole);
        })
    }
}