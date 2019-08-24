import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './section11/l124/home/home.component';
import { ServersComponent } from './section11/l124/servers/servers.component';
import { EditServerComponent } from './section11/l124/servers/edit-server/edit-server.component';
import { ServerComponent } from './section11/l124/servers/server/server.component';
import { UsersComponent } from './section11/l124/users/users.component';
import { UserComponent } from './section11/l124/users/user/user.component';
import {FormsModule} from '@angular/forms';
import {ServersService} from './section11/l124/servers/servers.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
