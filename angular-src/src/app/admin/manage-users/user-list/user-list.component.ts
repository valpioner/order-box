import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from '../../admin.service';

import { User } from '../../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<User>;

  constructor(
    private adminService: AdminService,
    private FlashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.adminService.getAllUsers().subscribe(users => {
      this.users = users;
    },
      err => {
        console.log(err);
        return false;
      });
  }

  deleteUser(id) {
    this.adminService.deleteUser(id).subscribe(res => {
      if (res.success) {
        this.FlashMessage.show('User deleted', { cssClass: 'alert-success', timeout: 3000 });

        var index = this.users.findIndex(u => u._id === id);
        if (index > -1) {
          this.users.splice(index, 1);
        }
      }
      else {
        this.FlashMessage.show('User was not deleted', { cssClass: 'alert-error', timeout: 3000 });
      }
    });
  }

  editUser(id) {
    const link = ['admin/users/edit', id];
    this.router.navigate(link);
  }

}
