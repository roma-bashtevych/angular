import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";
import {Routes} from "@angular/router";

export let routes: Routes = [
  {path: 'users', component: UsersComponent, children: [{path: ':id', component: UserDetailsComponent}]},
  {path: 'posts', component: PostsComponent, children: [{path: ':id', component: PostDetailsComponent}]}
]
