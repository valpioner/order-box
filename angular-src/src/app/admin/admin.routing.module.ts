import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, AdminDashboardComponent, ManageCoursesComponent/*, ManageUsersComponent*/ } from '.';
import { UserListComponent, UserFormComponent } from './manage-users';

import { AuthGuard } from './../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
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
