import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot,
  RouterStateSnapshot, 
  UrlTree} from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService, private router: Router) { }
  canActivate(): boolean {
    let loggedIn = false;
    console.log("Authenticating");
    this.auth.user$.subscribe(auth => {
      if (auth) {
          loggedIn = true;
      } else {
          this.router.navigate(['/login']);
      }
    })
    return loggedIn;
  }
}
