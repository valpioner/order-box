import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, AdminDashboardComponent, ManageCoursesComponent/*, ManageUsersComponent*/ } from '.';
import { UserListComponent, UserFormComponent } from './manage-users';

import { AuthGuard, AdminGuard } from './../guards';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard, AdminGuard],
        children: [
          { path: 'users', component: UserListComponent },
          { path: 'users/edit/:id', component: UserFormComponent },
          { path: 'courses', component: ManageCoursesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

export let adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageCoursesComponent,/*, ManageUsersComponent, */UserListComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
