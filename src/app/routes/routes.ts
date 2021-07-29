import {Routes} from "@angular/router";
import {PostsComponent} from "../component/posts/posts.component";
import {PostDetailsComponent} from "../component/post-details/post-details.component";
import {PostDiactivService} from "../services/post-diactiv.service";

export let routes: Routes = [
  {path: 'posts', component: PostsComponent, canDeactivate: [PostDiactivService]},
  {path: 'post/:id', component: PostDetailsComponent, canActivate: [PostDiactivService]},
  {path: 'posts', redirectTo: '', pathMatch: 'full'}
]
