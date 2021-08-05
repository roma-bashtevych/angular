import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Ipost} from "../../../models/ipost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts: Ipost[]
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  this.postService.getPosts().subscribe(value => this.posts = value)
  }

}
