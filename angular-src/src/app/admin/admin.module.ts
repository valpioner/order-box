import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersModule } from './manage-users/manage-users.module';

import { AdminComponent, AdminDashboardComponent, ManageCoursesComponent, /*ManageUsersComponent, */AdminService } from '.';

import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ManageUsersModule
  ],
  providers: [
    AdminService
  ],
  declarations: [AdminComponent, AdminDashboardComponent, /*ManageUsersComponent, */ManageCoursesComponent]
})
export class AdminModule { }
