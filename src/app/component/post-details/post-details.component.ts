import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Ipost} from "../../model/ipost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
post: Ipost
  constructor(private router: Router) {
    // console.log(history.state)
    // console.log(this.router.getCurrentNavigation()?.extras.state)
    this.post = this.router.getCurrentNavigation()?.extras.state as Ipost
  }

  ngOnInit(): void {
  }

}
