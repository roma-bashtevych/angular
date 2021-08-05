import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../user/services/user.service";
import {PostService} from "../../services/post.service";
import {Ipost} from "../../../models/ipost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
post: Ipost

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostDetails(id).subscribe(value => this.post = value)

    })
  }

  ngOnInit(): void {
  }

}
