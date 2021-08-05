import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import {PostService} from "./services/post.service";
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import { PostDetailsComponent } from './components/post-details/post-details.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  exports: [
    PostsComponent,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostModule { }
