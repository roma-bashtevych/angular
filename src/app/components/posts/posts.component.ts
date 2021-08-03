import { Component, OnInit } from '@angular/core';
import {Ipost} from "../../models/ipost";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts: Ipost[]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  this.postService.getShowAllPosts().subscribe(value => this.posts = value)
  }

}
