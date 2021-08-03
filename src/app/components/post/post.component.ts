import {Component, Input, OnInit} from '@angular/core';
import {Ipost} from "../../models/ipost";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post: Ipost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  showDetaolsPost() {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state:this.post})
  }
}
