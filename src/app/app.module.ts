import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./routes/routes";
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
