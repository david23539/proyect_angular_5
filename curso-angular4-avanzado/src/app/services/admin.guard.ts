import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService} from "./user.service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private _userService:  UserService, private _router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let identity = this._userService.getidentity();
    if(identity && identity.role=='ROLE_ADMIN'){
        return true;
    }else{
        this._router.navigate(['/home']);
        return false;
    }


  }
}
