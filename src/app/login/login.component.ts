import { Component, OnInit } from '@angular/core';
import { User } from '../core/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  showSpinner: boolean;
  user: User;

  constructor(private router:Router, private authService: AuthService) {

  }


  ngOnInit() {
    this.showSpinner = true;
  }

  // login(): void {
  //   if (this.username == 'admin') {
  //     //this.router.navigate(["user"]);
  //     this.user = new User("Admin", "Ad1", "God");
  //     this.showSpinner = false;
  //     debugger;
  //     this.navigateToHome();
  //   } else {
  //     alert("Invalid credentials");
  //     this.showSpinner = true;
  //   }
  // }

  // navigateToHome(): void {
  //   this.router.navigate(['/dashboard']);
  // }

  login() {        
    this.authService.logIn();
    this.router.navigate(['dashboard']);
  }

  logout() {
    this.authService.logOut();
}



}
