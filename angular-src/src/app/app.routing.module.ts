import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CourseComponent, DashboardComponent, LoginComponent, RegisterComponent, HomeComponent, ProfileComponent } from './components';

import { AuthGuard } from './guards/auth.guard';
import { CustomPreloadingStrategyService } from './services';

const routes: Routes = [
    
    {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    {
        path: 'dashboard',
        component: DashboardComponent, 
        canActivate: [AuthGuard],
        data: { title: 'Dashboard' }
    },
    {
        path: 'profile',
        component: ProfileComponent, 
        canActivate: [AuthGuard],
        data: { title: 'Profile' }
    },
    {
        path: 'course',
        component: CourseComponent, 
        canActivate: [AuthGuard],
        data: { 
            title: 'Course',
            //preload: true, //allow for preload module strategy 
        }
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    // {
    //     // The router will match this route if the URL requested
    //     // doesn't match any paths for routes defined in our configuration
    //     path: '**',
    //     component: PageNotFoundComponent,
    //     data: { title: 'Page Not Found' }
    // }
];

export let appRouterComponents = [RegisterComponent, LoginComponent, DashboardComponent, ProfileComponent, CourseComponent, HomeComponent/*, PageNotFoundComponent*/];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: /*PreloadAllModules*/CustomPreloadingStrategyService })
    ],
    providers: [
        CustomPreloadingStrategyService
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }