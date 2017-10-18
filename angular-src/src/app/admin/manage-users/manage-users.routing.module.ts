import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent, UserFormComponent } from '.';
import { AuthGuard } from './../../guards/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UserListComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: '',
  //       canActivateChild: [AuthGuard],
  //       children: [
  //         { path: 'users', component: /*ManageUsersComponent*/ UserListComponent },
  //         { path: 'courses', component: ManageCoursesComponent },
  //         { path: '', component: AdminDashboardComponent }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: 'edit/:id',
  //   component: UserFormComponent
  // }  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { } 
