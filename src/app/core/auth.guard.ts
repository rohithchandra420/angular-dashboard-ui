import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  //const authS = inject(AuthService).isAuthenticated();
  let token = localStorage.getItem('IsLoggedIn');
  //authS.isA
  const router = inject(Router);
  if(token == 'true') {
      //router.navigate(['dashboard']);
      return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
