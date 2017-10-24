import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, AdminDashboardComponent, ManageCoursesComponent } from '.';
import { UserListComponent, UserFormComponent } from './manage-users';

import { AuthGuard, AdminGuard, UserResolveGuard, CanDeactivateGuard } from './../guards';

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
          { path: 'users/add', component: UserFormComponent },
          { path: 'users/edit/:id', component: UserFormComponent, resolve: { user: UserResolveGuard } },
          { path: 'courses', component: ManageCoursesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

export let adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageCoursesComponent, UserListComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
    CanDeactivateGuard,
    UserResolveGuard
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
