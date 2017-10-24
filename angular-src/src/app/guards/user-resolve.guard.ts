import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { User } from './../models/user';
import { UserService } from './../admin/manage-users/services';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserResolveGuard implements Resolve<User> {

  constructor(
    private UserService: UserService ,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> | null {
    const id = route.params['id'];

    if (id) {
      return this.UserService.getUser(id)
        .catch(() => {
          this.router.navigate(['/admin/users']);
          return Observable.of(null);
        });
    }
    else {
      return Observable.of(new User(null, null, null, null, null));
    }

  }
}
