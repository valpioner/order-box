import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AutoUnsubscribe } from './../../../decorators';
import { Subscription } from 'rxjs/Subscription';

import { AdminService } from '../../admin.service';

import { User } from '../../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
@AutoUnsubscribe('subscriptions')
export class UserListComponent implements OnInit {
  users: Array<User>;

  errorMessage: string;
  private subscriptions: Subscription[] = [];
  private editedUser: User;

  constructor(
    private adminService: AdminService,
    private FlashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const sub = this.adminService.getUsers()
      .subscribe(
        data => this.users = data.users,
        error => this.errorMessage = <any>error
      );
    this.subscriptions.push(sub);


    // listen id from UserFormComponent
    this.route.params
      .switchMap((params: Params) => this.adminService.getUser(params['id']))
      .subscribe(
        (user: any) => {
          this.editedUser = Object.assign({}, user.user);
          console.log(`Last time you edit user ${JSON.stringify(this.editedUser)}`);
        },
        (err) => console.log(err)
      );

    //this.getAllUsers();


  }

  // private getAllUsers() {
  //   this.adminService.getAllUsers().subscribe(users => {
  //     this.users = users;
  //   },
  //     err => {
  //       console.log(err);
  //       return false;
  //     });
  // }

  deleteUser(user: User) {
    this.adminService.deleteUser(user).subscribe(
      res => {
        if (res.success) {
          this.FlashMessage.show('User deleted', { cssClass: 'alert-success', timeout: 3000 });

          this.users = this.users.filter(u => u !== user);

          // var index = this.users.findIndex(u => u._id === id);
          // if (index > -1) {
          //   this.users.splice(index, 1);
          // }
        } else {
          this.FlashMessage.show('User was not deleted', { cssClass: 'alert-error', timeout: 3000 });
        }
      },
      err => console.log(err)
    );
  }

  isEdited(user: User) {
    if (this.editedUser) {
      return user._id === this.editedUser._id;
    }
    return false;
  }

  editUser(id) {
    const link = ['admin/users/edit', id];
    this.router.navigate(link);
  }

  createUser() {
    const link = ['admin/users/add'];
    this.router.navigate(link);
  }

}
