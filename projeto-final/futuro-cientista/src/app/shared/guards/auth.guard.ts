import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from 'src/app/features/users/services/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private currentUser: CurrentUserService
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const userStorage = sessionStorage.getItem('currentUser');
      const currentUser = this.currentUser.getCurrentUser();
      if (!currentUser){
        this.router.navigateByUrl("/login");
        return false;
      }
      return true;
    }
  
}
