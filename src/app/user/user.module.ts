import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { TestComponent } from '../test/test.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [
    UsersComponent,
    HttpClientModule,
    TestComponent
  ],
  providers: [UserService]
})
export class UserModule { }
