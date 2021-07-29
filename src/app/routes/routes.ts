import {Routes} from "@angular/router";
import {UsersComponent} from "../component/users/users.component";
import {UserDetailsComponent} from "../component/user-details/user-details.component";
import {UserDeactService} from "../services/user-deact.service";

export let routes: Routes = [
  {path: '', component: UsersComponent, canDeactivate: [UserDeactService]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [UserDeactService], canDeactivate: [UserDeactService]},
  {path: 'users', redirectTo: '', pathMatch: 'full'}
]
