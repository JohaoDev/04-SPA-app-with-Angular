import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionsService } from '../services/permissions.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  userLogin: any;

  constructor(
    private permissionsService: PermissionsService,
    private router: Router
  ) {
    this.userLogin = this.permissionsService.getUserLogin();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(this.userLogin);
    switch (this.userLogin.role) {
      case '5f0dba3ac6133d66aaee6e2c':
        // this.router.navigate(['/users']);
        return true;
        break;
      // case "":
      //   this.router.navigate(["/users"])
      //   return true
      //   break;
      default:
        // window.location.reload();
        alert("you don't have permissions");
      // window.location.href("http://localhost:4200")
    }
  }

  // if (this.userLogin) {
  // return true;
  // } else {
  // this.router.navigate(['/login']);
  // }
}
