import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './manage-users.routing.module';

import { UserListComponent, UserFormComponent, UserService, UserComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    UserListComponent, 
    UserFormComponent,
    UserComponent
  ],
  providers: [
    UserService
  ]
})
export class ManageUsersModule { }