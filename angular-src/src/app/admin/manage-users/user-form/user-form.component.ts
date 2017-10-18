import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { User } from './../../../models/user';
import { UserArrayService } from './../services/user-array.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;

  constructor(
    private userArrayService: UserArrayService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.user = new User(null, '', '', '', '', false);

    // // it is not necessary to save subscription to route.params
    // // it handles automatically
    // this.route.params
    //   .switchMap((params: Params) => this.userArrayService.getUser(+params['id']))
    //   .subscribe(
    //     user => this.user = Object.assign({}, user),
    //     err => console.log(err)
    //   );

  }

  saveUser() {
    // const task = new Task(
    //   this.task.id,
    //   this.task.action,
    //   this.task.priority,
    //   this.task.estHours
    // );

    // if (task.id) {
    //   this.userArrayService.updateUser(task);
    // } else {
    //   this.userArrayService.addUser(user);
    // }

    // this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/admin/users']);
  }

}
