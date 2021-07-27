import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../models/IPost";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: IPost

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostId(id).subscribe(value => this.post = value )
    })
  }

  ngOnInit(): void {
  }

}
