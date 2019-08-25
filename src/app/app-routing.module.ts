import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './section11/l124/home/home.component';
import {UsersComponent} from './section11/l124/users/users.component';
import {UserComponent} from './section11/l124/users/user/user.component';
import {ServersComponent} from './section11/l124/servers/servers.component';
import {ServerComponent} from './section11/l124/servers/server/server.component';
import {EditServerComponent} from './section11/l124/servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuardService} from './section11/l124/servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolverService} from './section11/l124/servers/server-resolver.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children:[
      { path: ':id/:name', component: UserComponent },
    ] },
  { path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService] }
    ] },
  //{ path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found!'} },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
