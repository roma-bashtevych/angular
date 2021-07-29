import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IPost} from "../../model/IPost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
post: IPost
  constructor(private router: Router) {
    // console.log(history.state)
    // console.log(this.router.getCurrentNavigation()?.extras.state)
    this.post = this.router.getCurrentNavigation()?.extras.state as IPost
  }

  ngOnInit(): void {
  }

}
