import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Ipost} from "../../models/ipost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
 @Input()
  post: Ipost

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(()=>{
      this.post = this.router.getCurrentNavigation()?.extras.state as Ipost
    })
    // console.log(this.router.getCurrentNavigation()?.extras.state)
    // this.post = this.router.getCurrentNavigation()?.extras.state as Ipost
  }

  ngOnInit(): void {
  }

}
