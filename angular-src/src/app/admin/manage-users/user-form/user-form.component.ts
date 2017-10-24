import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { User } from './../../../models/user';
import { UserService } from './../services/user.service';
import { DialogService } from './../../../services/dialog.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  originalUser: User;

  private sub: Subscription[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.user = new User(
      null, //id
      null, //name
      null, //email
      null, //username
      null //pass
    )
    
    this.route.data.forEach((data: { user: any }) => {
      this.user = Object.assign({}, data.user ? data.user.user : undefined);
      this.originalUser = Object.assign({}, data.user ? data.user.user : undefined);
    });

  }

  saveUser() {
    const method = this.user._id ? 'updateUser' : 'createUser';
    const sub = this.userService[method](this.user)
      .subscribe(
        () => {
          this.originalUser = Object.assign({}, this.user);
          this.user._id
            // optional parameter: http://localhost:4200/users;id=2
            ? this.router.navigate(['admin/users', { id: this.user._id }])
            : this.router.navigate(['admin/users']);
        },
        error => console.log(error)
      );
    this.sub.push(sub);
  }

  goBack(): void {
    this.router.navigate(['/admin/users']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`)
    if (!this.originalUser || 
      (this.originalUser.name === this.user.name &&
      this.originalUser.username === this.user.username &&
      this.originalUser.email === this.user.email &&
      this.originalUser.isAdmin === this.user.isAdmin)) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

}
